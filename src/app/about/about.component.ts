import {Component, OnInit} from '@angular/core'

@ (Component) ({

   selector : "about",
   templateUrl : "./about.component.html",
   styleUrls : ["./about.component.css" ]

})

export class AboutComponent implements OnInit {

public menu : any = ["Hello"];

private works :any = "Interpolation";

public blocks : any = [];

public data: any =[];

ngOnInit () {
    
    this.blocks = [ "Hello", "How", "Are", "You"]

this.data = [
 {
     name: "Suresh",
     city : "Hyd",
 },

 {
    name: "Chandu",
    city : "Ap",
},

{
    name: "Hemanth",
    city : "Vizag",
}

]
   
}



}

