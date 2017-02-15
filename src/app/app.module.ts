import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service' ;
import { MaterialModule } from '@angular/material';


const ROUTES= [
  {
    path : '',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'posts',
    component : PostsComponent
  }
  ];




@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{};
export class PizzaPartyAppModule { }
