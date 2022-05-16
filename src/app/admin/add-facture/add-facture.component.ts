import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AddRequestService } from 'backend/services/add-facture/add-request.service';
import { RequestAdminService } from 'backend/services/request-admin/request-admin.service';

@Component({
  selector: 'app-add-facture',
  templateUrl: './add-facture.component.html',
  styleUrls: ['./add-facture.component.css']
})
export class AddFactureComponent implements OnInit {
  users:any=[]
  requestForm!:FormGroup
  id:any
  title:any
  req:any=[]
    constructor(private fb:FormBuilder , private requestService : RequestAdminService,private activatedRouter:ActivatedRoute, private addReqService : AddRequestService) { }
  
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
  
  
  let y = {somme : 0 , client:'', adress : '', phone : '', MF : '', chargeFix : '', marge : '', carburant : '', depart : '', arrive : '', nbreDeJour : '', nbreDeCar : '', destination : '', firstName : '', lastName : '', id : '', idTransfert:''}
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
  y.idTransfert = this.req._id
  console.log('here',y.idTransfert );
  

  let z = ((((this.requestForm.value.destination * 25) / 100) * this.requestForm.value.carburant) + (this.requestForm.value.chargeFix * this.requestForm.value.nbreDeJour) + this.requestForm.value.marge) * this.requestForm.value.nbreDeCar
  y.somme = z
  


    this.addReqService.addReq(y).subscribe(
      (data)=>{
        console.log( data.message);
    
        
      }
    )
  
  
    }}