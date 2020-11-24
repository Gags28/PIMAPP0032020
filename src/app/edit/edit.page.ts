import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {

  public usuario = {
    NomCli: '',
    Email: '',
  }
  private id: any;

  constructor(
    public requestService: RequestService,
    private router: ActivatedRoute
  ) { 
    console.log(document.URL)
    let url = document.URL.split('/')
    this.id = url[url.length - 1]
  }

  ngOnInit() {

    this.requestService.get('cliente/' + this.id).then(data => {
      console.log(data)
      this.usuario = data[0]
    }).catch(err => {
      console.log(err)
    })
  }
}
