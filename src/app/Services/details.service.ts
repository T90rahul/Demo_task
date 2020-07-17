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



<<<<<<< HEAD
  getDetail() {
    // return this.httpClient.get('../../Data/data.json');
    return this.httpClient.get('http://localhost:3000/detail');
  }

  // public getDetail(): Observable<any> {
  // return this.httpClient.get('../../assets/data.json');
  // }

=======
  // getDetail() {
  //   return this.httpClient.get('../../Data/data.json');
  //   // return this.httpClient.get('http://localhost:3000/detail');
  // }

  public getDetail(): Observable<any> {
  return this.httpClient.get('../../assets/data.json');
  }

>>>>>>> b73a9dd4228bce437b7fe5f78e0faa882e0f9b52
  // getMoreDetail(data) {
  //   this.httpClient.get('../../Data/data.json');
  // }
}
