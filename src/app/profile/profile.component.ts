import {Component, OnInit, TemplateRef} from '@angular/core'
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { profileService } from './profile.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';


@ (Component) ({
selector:  "profile",
templateUrl  :"./profile.component.html",
styleUrls : ["./profile.component.css"]

})

export class ProfileComponent implements OnInit {

 modalRef: BsModalRef;
userId : any;

constructor (
 private modalService: BsModalService,
 private  pfService :profileService, 
){}

openModal(template: TemplateRef<any>) {
this.modalRef = this.modalService.show(template);
}

 public detailForm: FormGroup

 public addExp : any;
 public getList : any;
 public getExp;
 
 
ngOnInit(){
    
   var userData = localStorage.getItem('userData');
    this.userId = JSON.parse(userData);
    console.log(this.userId)
    this.getEmploy();

   this.detailForm = new FormGroup({
    description : new FormControl ( null, Validators.required),
    designation : new FormControl (null, Validators.required)
   })
   
   } 


   saving (){
   var Data ={
       id:this.userId.id,
       experience : this.detailForm.value
   }
    this.pfService.saving(this.detailForm.value)
    .subscribe(
        (response) => {
            console.log(response.json());
            this.getEmploy()
            this.modalRef.hide();

        }
    )
   }


   getEmploy(){
    this.pfService.getExp()
       .subscribe((response) => {
            this.getList =(response.json())
            console.log(this.getList)
        }
    )
}


}

