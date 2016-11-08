import { Component } from '@angular/core';
import {EdugoraService} from './services/github.service';

@Component({
    moduleId:module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    providers: [EdugoraService]
})
export class AppComponent {}
