import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RequestService } from 'src/app/services/request.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public usuario: FormGroup
  public submitAttempt: boolean = false;
  public aviso = ''

  constructor(
    public formBuilder: FormBuilder,
    public requestService: RequestService,
  ) {

    this.usuario = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telcli_01: ['', Validators.required],
      telcli_02: ['', Validators.required],
      datanascimento: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
    });

  }

  save() {

    this.submitAttempt = true;

    if (!this.usuario.valid) {
      this.aviso = 'Preencha todos campos do formulário.'
      console.log(this.usuario)
    }
    else {
      console.log("success!")
      console.log(this.usuario.value);
      this.submitForm(this.usuario.value)
    }

  }

  submitForm(user) {
    user.idendereco = 1;
    user.idUsuario = 6;

    this.requestService.post('cliente', user).then(resp => {
      this.aviso = resp.message
    })

  }

}
