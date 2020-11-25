import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service'
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public usuario = {
    NomCli: '',
    Email: '',
    TelCli_02: '',
    TelCli_01: '',
    CpfCnpj: '',
    DataNascimento: '',
  }

  public nome: any;
  public email: any;
  public telcli_01: any;
  public telcli_02: any;
  public datanascimento: any;
  public cpfcnpj: any;

  public usuarioForm: FormGroup;
  public submitAttempt: boolean = false;
  public aviso = '';
  private id: any;

  constructor(
    public requestService: RequestService,
    private router: ActivatedRoute,
    public formBuilder: FormBuilder,
  ) {
    console.log(document.URL)
    let url = document.URL.split('/')
    this.id = url[url.length - 1]

    this.usuarioForm = formBuilder.group({
      nome: ['', Validators.required],
      email: ['', Validators.required],
      telcli_01: ['', Validators.required],
      telcli_02: ['', Validators.required],
      datanascimento: ['', Validators.required],
      cpfcnpj: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.loadCliente()
  }

  ionViewWillEnter() {
    this.aviso = ''
  }

  loadCliente() {
    this.requestService.get('cliente/' + this.id).then(data => {
      console.log(data)
      this.usuario = data[0]
      this.nome = this.usuario.NomCli
      this.email = this.usuario.Email
      this.telcli_01 = this.usuario.TelCli_01
      this.telcli_02 = this.usuario.TelCli_02
      this.datanascimento = this.usuario.DataNascimento
      this.cpfcnpj = this.usuario.CpfCnpj

    }).catch(err => {
      console.log(err)
    })
  }

  save() {

    this.submitAttempt = true;

    if (!this.usuarioForm.valid) {
      this.aviso = 'Preencha todos campos do formulário.'
      console.log(this.usuarioForm.value)
    }
    else {
      console.log("success!")
      console.log(this.usuarioForm.value);
      this.submitForm(this.usuarioForm.value)
    }

  }

  submitForm(user) {
    user.idendereco = 1;
    user.idUsuario = 6;

    this.requestService.put('cliente/' + this.id, user).then(resp => {
      this.aviso = resp.message
    })

  }
}
