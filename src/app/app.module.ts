import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { PostdetailsComponent } from './components/postdetails/postdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PostCardComponent,
    AddpostComponent,
    PostlistComponent,
    HomeComponent,
    HeaderComponent,
    PostdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
