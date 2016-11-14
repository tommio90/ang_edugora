import { Component } from '@angular/core';
import {EdugoraService} from '../../services/edugora.service';
import 'rxjs/add/operator/map';

@Component({
    moduleId: module.id,
    selector: 'words',
    templateUrl: 'words.component.html'
})
export class WordsComponent {

   
    getWord=[];
    word: string;
    spelling: string;
    
        
   constructor(private _edugoraService :EdugoraService){

      
   }

   searchWord(){
       
       this._edugoraService.updateWord(this.word);

        this._edugoraService.getWord().subscribe((word:any) => {
         
        this.getWord = JSON.parse(word._body);
        

       });
   }

 onSubmit(hanzi: string) {
       console.log(hanzi);
        // this._edugoraService.postWord({hanzi: hanzi})
        
        // .subscribe(
        //     data => console.log(data),
        //     error => console.log(error)
        // );
  }
    
        
        
    }

