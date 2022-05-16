import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFactureComponent } from './admin/add-facture/add-facture.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { PrintComponent } from './admin/print/print.component';
import { TransfertListComponent } from './admin/transfert-list/transfert-list.component';
import { TransfertRequestComponent } from './admin/transfert-request/transfert-request.component';
import { ContactComponent } from './contact/contact.component';

import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'signin' , component : SigninComponent},
  {path : 'signup' , component : SignupComponent},
  {path : 'contact' , component : ContactComponent},
  {path : 'home-admin' , component : HomeAdminComponent},
  {path : 'transfert-request' , component : TransfertRequestComponent},
  {path : 'transfert-request/:id' , component : TransfertRequestComponent},
  {path : 'transfert-list' , component : TransfertListComponent},
  {path : 'print' , component : PrintComponent},
  {path : 'print/:id' , component : PrintComponent},
  {path : 'add-facture' , component : AddFactureComponent},
  {path : 'add-facture/:id' , component : AddFactureComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
