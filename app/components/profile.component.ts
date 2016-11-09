import { Component } from '@angular/core';
import {EdugoraService} from '../services/edugora.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'words',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

   
    getWord=[];
    word: string;
    hanzi: string;
        
   constructor(private _edugoraService :EdugoraService){

      
   }

   searchWord(){
       
       this._edugoraService.updateWord(this.word);

        this._edugoraService.getWord().subscribe((word:any) => {
        
        if(word._body === '[]'){
            console.log('Word not found.. Going to add to the db..');
            console.log(word);            
             this._edugoraService.postWord({hanzi: this.word})
              .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
        }else{
            
            this.getWord = JSON.parse(word._body);
        }

       });
   }

 onSubmit(hanzi: string) {
        this._edugoraService.postWord({hanzi: hanzi})
        
        .subscribe(
            data => console.log(data),
            error => console.log(error)
        );
  }
    
        
        
    }

