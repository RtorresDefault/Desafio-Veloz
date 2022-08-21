import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const axios = require('axios').default;


@Injectable({
  providedIn: 'root'
})
export class PetshopService {

  private apiUrl = 'http://petstore-demo-endpoint.execute-api.com/petstore/pets';

  constructor(public http: HttpClient) { }

  getPetshop() {
    return new Promise((resolve, reject) => {
      this.http.request('GET', this.apiUrl, { responseType: 'json' })
        .subscribe(
          (result: any) => {
            console.log('>>> Utilizando HttpClient <<<');
            console.log(result);
            resolve(result.json);
          },
          error => {
            console.error(error);
            reject(error.json);
          }
        );
    })
      .catch(e => console.error(e));
  }

  getPetshop2 = async () => await new Promise((resolve, reject) => {
    this.http.request('GET', this.apiUrl, { responseType: 'json' })
      .subscribe((result: any) => {
        console.log('>>> Utilizando async() e await() <<<');
        console.log(result);
        resolve(result);
      },
        error => {
          console.error(error);
          reject(error.json);
        });
  });

  getPetshop3() {
    axios.get(this.apiUrl)
      .then(response => {
        console.log('>>> Utilizando Axios <<<');
        console.log(response);
        console.log(response.data);
        return response;
      })
      .catch(e => console.error(e));
  }


}
