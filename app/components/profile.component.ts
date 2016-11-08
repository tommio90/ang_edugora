import { Component } from '@angular/core';
import {EdugoraService} from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'words',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

   
    getWord=[];
   
        
   constructor(private _edugoraService :EdugoraService){
       this._edugoraService.getWord().subscribe((word:any) => {
         
        //  console.log(word);
      
        // console.log(JSON.parse(word._body));

        this.getWord = JSON.parse(word._body);

        //  JSON.parse(word._body).forEach(function(object){
        //   });



        

       });
   }
    
        
        
    }

