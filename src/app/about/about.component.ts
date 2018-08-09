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

public show : boolean = true;

public showCont :boolean =true;

public logo : any = [];
public selectLogos : any;

ngOnInit () {
    
this.logo = ["../assets/images/location.jpg", "../assets/images/gallery-1.jpg"]    
this.selectLogos = this.logo[0];

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



hide() {

 this.show = !this.show;   

//   if(this.show){
//     this.show = false;
//   } else{
//       this.show = true;
//   }
    
}

ngbtn(){
    this.showCont = !this.showCont;
}


demo (){
    return "bcg"
}

dynamic(){

return {
    width: 200 + 'px',
    height: 150 + 'px',
    'background-color' : "red"
}

}


showImg(){
 this.show = !this.show;   
this.show ? this.logo[0] : this.logo[1];

}



}

