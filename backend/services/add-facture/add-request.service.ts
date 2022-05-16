import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddRequestService {
  requestUrl = 'http://localhost:3000/addReq'
  constructor( private httpClient : HttpClient) { }

  addReq(request:any){
    return this.httpClient.post<{message:any}>(this.requestUrl, request)
  }

  getAllReq(){
    return this.httpClient.get<{findedReq : any}>(this.requestUrl)
  }
}

