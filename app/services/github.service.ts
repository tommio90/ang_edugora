import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class EdugoraService{
   word:string;
    
    constructor(private _http:Http){
        console.log('Edugora Service Ready...');
       this.word = '';
    }
    
    getWord(){
        return this._http.get('http://localhost:3000/wordbook?q='+this.word);
            .map(res => res.json())
    }
    
    

}