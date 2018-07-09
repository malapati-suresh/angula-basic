import { Injectable } from "@angular/core";
import { Http} from '@angular/http';


@Injectable()

export class RegisterService  {

constructor (
  private http :Http,   
){}

 
register(details){
 return this.http.post ("http://localhost:3500/v1/user/signup", details)

}

login (data){

  return this.http.post ("http://localhost:3500/v1/user/login", data)

}
    
}