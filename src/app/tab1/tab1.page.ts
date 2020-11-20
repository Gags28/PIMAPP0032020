import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public usuarios = [
    {
      nome: 'Gabriel Gonçalves',
      email: 'gagsilva28@gmail.com'
    },
    {
      nome: 'Lucaz Denadai',
      email: 'lucaz@gmai.com'
    }
  ]

  constructor(public alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Remover usuário?',
      message: 'Este registro será excluido, realmente deseja continuar?.',
      mode: 'ios',
      buttons: ['CANCELAR', 'REMOVER']
    });

    await alert.present();
  }
}
