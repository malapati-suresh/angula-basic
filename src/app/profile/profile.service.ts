import { Injectable } from "@angular/core";
import { Http } from "@angular/http";


@Injectable ()

export class profileService {

   constructor (
    private http :Http
   ){} 


  saving(detailForm) {
   return this.http.post("http://localhost:3500/v1/user/addExperience", detailForm)

  } 

  getExp() {

   return this.http.get ("http://localhost:3500/v1/user/getExperience")
  }

  
 




}