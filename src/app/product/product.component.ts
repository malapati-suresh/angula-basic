import {Component, OnInit} from '@angular/core';
import { RegisterService } from './product.service';
import { Router } from '@angular/router';


@(Component) ({

selector : "product",
templateUrl : "./product.component.html",
styleUrls : ["./product.component.css"]

})

export class ProductComponent  implements OnInit {

constructor (
private router :Router,
private regiService : RegisterService
) {

}
public name : any;
public email : any;
public number : any;
public password : any;
public user : any;

ngOnInit (){ 
}


register () {

if (!this.name){
    alert ("Enter the Name")
} else if (!this.email){
    alert ("Enter the Email")
} else if (!this.number){
    alert ("Enter the Number")
}
else if (!this.password) {
    alert ("Enter the Password ")
}else{
   
this.user = {
    name :this.name,
    email:this.email,
    phone:this.number,
    password:this.password,
}

this.regiService.register(this.user)

    .subscribe(
        (response) => {
            console.log(response.json());
            this.router.navigate (['/login'])
        }
    )


}



}






}