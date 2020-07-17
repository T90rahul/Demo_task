import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  // private REST_API_SERVER = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {
    this.getDetail().subscribe(data => {
      // console.log(data);
  });
   }



  getDetail() {
    // return this.httpClient.get('../../Data/data.json');
    return this.httpClient.get('http://localhost:3000/detail');
  }

  // public getDetail(): Observable<any> {
  // return this.httpClient.get('../../assets/data.json');
  // }

  // getMoreDetail(data) {
  //   this.httpClient.get('../../Data/data.json');
  // }
}
