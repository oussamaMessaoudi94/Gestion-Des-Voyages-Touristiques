
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddRequestService } from 'backend/services/add-facture/add-request.service';
import { RequestAdminService } from 'backend/services/request-admin/request-admin.service';


declare function NumberToLetter(x: any): any

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.css']
})
export class PrintComponent implements OnInit {
  id: any
  res: any = []
  user: any = []
  x: any
  TTC: any
  som: any
  timbre: any
  facture: any
  date: any
  req: any = []
  plus: any = []
  r: any
  m: any = []

  num: any;

w : any = 0
s :any = 0
sim :any = 0  
HT :any
  constructor(private requestService: RequestAdminService, private activatedRouter: ActivatedRoute, private addReqService: AddRequestService) { }

  ngOnInit(): void {



    this.user = JSON.parse(localStorage.getItem('connectedUser') || '[]');
    this.id = this.activatedRouter.snapshot.paramMap.get('id')
    this.requestService.getRequestById(this.id).subscribe(
      (data) => {
        this.res = data.request
        this.addReqService.getAllReq().subscribe(
          (data) => {
            this.req = data.findedReq
            let x = []
            for (let i = 0; i < this.req.length; i++) {
              if (this.req[i].idTransfert == this.res._id) {
                x.push(this.req[i])
                this.plus = x
                console.log('here', this.plus);
                
                this.w = this.w + this.plus[i].somme 
                this.HT = this.res.somme + this.w
                
      
              }
            }
            
            this.s = (this.w *7 )/100
            console.log("s",this.s);
            console.log('w', this.w);
            
            this.timbre = (this.TTC + this.s + 600 + this.w) 
          }




        )
        
        

        this.x = this.res.somme


        
        this.som = ((this.res.somme * 7) / 100) + this.s
        this.TTC = (this.res.somme + this.som)
console.log('alo',this.s);

        

        this.num = NumberToLetter(this.timbre)


        this.TTC = this.TTC.toLocaleString()
        

        this.date = Date.now()
      }
    )
    this.facture = Date.now()

  }




}
