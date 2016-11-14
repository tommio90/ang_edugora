import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EdugoraService{
   word:string;
    
    constructor(private _http:Http){
        console.log('Edugora Service Ready...');
       this.word = 'ni';
       

    }

    //WORDS stuff
    
    getWord(){
        return this._http.get('http://localhost:3003/worddb?qu='+this.word);
            .map(res => res.json())
    }

    updateWord(word:string){
        this.word = word;
    }

    postWord(wordSend: any) {
        const body = JSON.stringify(wordSend);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3003/wordbook', body, {
        headers: headers
        })
        .map(res => res.json())
        
  }

 
 
  //User Stuff

  postUserLogin(user: any ) {
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post('http://localhost:3003/users/login', body, {
        headers: headers
        })
        .map(res => res.json())
        
  }
    
    
    

}