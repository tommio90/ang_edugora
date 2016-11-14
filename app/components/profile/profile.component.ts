import { Component } from '@angular/core';
import {EdugoraService} from '../../services/edugora.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

   
   
    
        
   constructor(private _edugoraService :EdugoraService){

      
   }

   onSubmit(email: string, password: string) {
     
         this._edugoraService.postUserLogin({email: email, password: password})
        
        .subscribe(
            data => console.log(data),
            error => console.log(error)

            
        );
  }


  saveJWT(){
      

  }

  
    
        
        
    }

