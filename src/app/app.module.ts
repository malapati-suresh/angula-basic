import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { RouterModule, Routes} from '@angular/router';

import {AppComponent } from './app.component';
import {HomeComponent}    from'./home/home.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {ServiceComponent} from './service/service.component';
import {ContactComponent} from './contact/contact.component';
import {GrowthComponent } from './service/growth/growth.component';
import {DevopsComponent } from './service/devops/devops.component';
import {NavBarComponent } from './nav-bar/nav-bar.component';


import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { RegisterService } from './product/product.service';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import { HttpModule } from '@angular/http';
import { ProfileComponent } from './profile/profile.component';



const router :Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'}, 
  {path: 'home', component:HomeComponent}, 
 {path: 'about', component:AboutComponent},
 {path: 'product', component:ProductComponent},
 {path: 'service', component:ServiceComponent, children:[
{path: 'devops', component:DevopsComponent},
   {path:'', redirectTo:'/service/devops', pathMatch:'full'},
   {path: 'growth', component:GrowthComponent},
 ]

},
 {path: 'contact', component:ContactComponent},
 {path: "login", component:LoginComponent},
{ path:"profile", component:ProfileComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    ServiceComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    GrowthComponent,
    DevopsComponent,
    NavBarComponent,
    LoginComponent,
    ProfileComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    FormsModule,
    ReactiveFormsModule,
    HttpModule

  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
