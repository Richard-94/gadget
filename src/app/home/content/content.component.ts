import { Component } from '@angular/core';
import { AuthService } from 'src/app/Data-Services/services/auth.service';



@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {


  constructor( public authServ: AuthService,){}

}
