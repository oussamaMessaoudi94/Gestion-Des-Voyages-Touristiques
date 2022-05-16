import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestAdminService {
requestUrl = 'http://localhost:3000/request'
  constructor( private httpClient : HttpClient) { }

  addRequest(request:any){
    return this.httpClient.post<{message:any}>(this.requestUrl, request)
  }

  getAllRequest(){
    return this.httpClient.get<{findedRequest : any}>(this.requestUrl)
  }

  getRequestById(id:any){
    return this.httpClient.get<{request : any}>(`${this.requestUrl}/${id}`)
  }

  deleteTransfert(id: any){
    return this.httpClient.delete<{message :any}>(`${this.requestUrl}/${id}`)
  }

  editTransfert(transfert: any, request:any){
    return this.httpClient.put(`${this.requestUrl}/${transfert._id}`, transfert,request)
  }
}
