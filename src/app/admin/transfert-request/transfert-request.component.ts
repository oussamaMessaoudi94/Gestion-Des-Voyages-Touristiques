import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RequestAdminService } from 'backend/services/request-admin/request-admin.service';

@Component({
  selector: 'app-transfert-request',
  templateUrl: './transfert-request.component.html',
  styleUrls: ['./transfert-request.component.css']
})
export class TransfertRequestComponent implements OnInit {
users:any=[]
requestForm!:FormGroup
id:any
title:any
req:any=[]
  constructor(private fb:FormBuilder , private requestService : RequestAdminService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.users = JSON.parse(localStorage.getItem('connectedUser') || '[]');
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    if (this.id) {
      this.title = 'Edit'
this.requestService.getRequestById(this.id).subscribe(
(data)=>{
this.req = data.request
}
)
  } 

    this.requestForm = this.fb.group({
      client : [''],
      adress : [''],
      phone : [''],
      MF : [''],
      chargeFix : [''],
      marge : [''],
      carburant : [''],
      depart : [''],
      arrive : [''],
      nbreDeJour : [''],
      destination : [''],
      nbreDeCar : ['']
    })
  }


  request(x:any){


let y = {somme : 0 , client:'', adress : '', phone : '', MF : '', chargeFix : '', marge : '', carburant : '', depart : '', arrive : '', nbreDeJour : '', nbreDeCar : '', destination : '', firstName : '', lastName : '', id : ''}
y.client = this.requestForm.value.client,
y.adress = this.requestForm.value.adress,
y.phone = this.requestForm.value.phone,
y.MF = this.requestForm.value.MF,
y.chargeFix = this.requestForm.value.chargeFix,
y.marge = this.requestForm.value.marge,
y.carburant = this.requestForm.value.carburant,
y.depart = this.requestForm.value.depart,
y.arrive = this.requestForm.value.arrive,
y.nbreDeJour = this.requestForm.value.nbreDeJour,
y.nbreDeCar = this.requestForm.value.nbreDeCar,
y.destination = this.requestForm.value.destination,
y.firstName = this.users.firstName,
y.lastName = this.users.lastName,
y.id = this.users._id
let z = ((((this.requestForm.value.destination * 25) / 100) * this.requestForm.value.carburant) + (this.requestForm.value.chargeFix * this.requestForm.value.nbreDeJour) + this.requestForm.value.marge) * this.requestForm.value.nbreDeCar
y.somme = z

if (this.id) {
  this.requestService.editTransfert(this.req,y).subscribe(
    (data)=>{

    }
  )
 
} else {
  this.requestService.addRequest(y).subscribe(
    (data)=>{
      console.log( data.message);
  
      
    }
  )

  }
  }}
