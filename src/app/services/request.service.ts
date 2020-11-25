import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  private url: string = 'http://localhost:3000/';

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

  post(path, body = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(this.url + path, body).toPromise()
        .then((data) => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  }

  delete(path, body = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + path, body).toPromise()
        .then((data) => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  }

  put(path, body = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + path, body).toPromise()
        .then((data) => {
          resolve(data)
        }).catch(err => {
          reject(err)
        })
    })
  }

}
