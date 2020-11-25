import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RequestService } from 'src/app/services/request.service'
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public usuarios

  constructor(
    public alertController: AlertController,
    public requestService: RequestService,
  ) { }

  ngOnInit() {
    this.list()
  }

  ionViewWillEnter() {
    this.list()
  }

  list() {
    this.requestService.get('cliente').then(data => {
      console.log(data)
      this.usuarios = data
    }).catch(err => {
      console.log(err)
    })
  }

  async presentAlert(id) {

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remover usuário?',
      message: 'Este registro será excluido, realmente deseja continuar?.',
      mode: 'ios',
      buttons: ['CANCELAR', {
        text: 'REMOVER',
        handler: () => {
            this.requestService.delete('cliente/' + id).then(resp => {
              console.log(resp)
              this.list()
            })
        }
      }]
    });

    await alert.present();
  }
}
