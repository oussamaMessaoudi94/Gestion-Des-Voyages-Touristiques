import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestAdminService } from 'backend/services/request-admin/request-admin.service';

@Component({
  selector: 'app-transfert-list',
  templateUrl: './transfert-list.component.html',
  styleUrls: ['./transfert-list.component.css']
})
export class TransfertListComponent implements OnInit {
request:any =[]
result:any =[]
searchText:any
  constructor(private requestService : RequestAdminService, private router : Router) { }

  ngOnInit(): void {
    this.requestService.getAllRequest().subscribe(
      (data)=>{
this.request = data.findedRequest


      }
    )
    
  }
update(id:any){
  this.router.navigate([`transfert-request/${id}`])
}

print(id:any){
this.router.navigate([`print/${id}`])
}

delet(id:any){
  this.requestService.deleteTransfert(id).subscribe((data) => {
    console.log('delete with success', data.message);
  
  });


}
add(id:any){
  this.router.navigate([`add-facture/${id}`])
}
}
