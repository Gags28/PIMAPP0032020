import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url: string = 'http://adspim-com-br.umbler.net/';

  constructor(private http: HttpClient) { }

  get(path, body = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(this.url + path, body).toPromise()
        .then((data) => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })

    })

  }

}
