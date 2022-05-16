import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { NavAdminComponent } from './admin/nav-admin/nav-admin.component';
import { TransfertRequestComponent } from './admin/transfert-request/transfert-request.component';
import { TransfertListComponent } from './admin/transfert-list/transfert-list.component';
import { PrintComponent } from './admin/print/print.component';
import { AddFactureComponent } from './admin/add-facture/add-facture.component';
import { ContactComponent } from './contact/contact.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NumberToWordsPipe } from './pipe/number.pipe';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    HomeAdminComponent,
    NavAdminComponent,
    TransfertRequestComponent,
    TransfertListComponent,
    PrintComponent,
    AddFactureComponent,
    ContactComponent,
    NumberToWordsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
