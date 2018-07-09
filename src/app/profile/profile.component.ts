import {Component, OnInit} from '@angular/core'

@ (Component) ({
selector:  "profile",
templateUrl  :"./profile.component.html",
styleUrls : ["./profile.component.css"]

})

export class ProfileComponent implements OnInit {

    
    public head : any [];
    public skill : any [];
    public employe : any [];
    public education : any [];
    public project : any []


   ngOnInit(){

   } 

   save(){
       console.log("save")
   }


}
