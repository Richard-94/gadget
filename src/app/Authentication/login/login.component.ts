import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SignIn } from 'src/app/Classes/signIn';
import { AuthService } from 'src/app/Data-Services/services/auth.service';
import { SignInService } from 'src/app/Data-Services/services/sign-in.service';
import { UserIdService } from 'src/app/Data-Services/services/userId.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showForm?: boolean
  userData:  SignIn = new  SignIn();
  isSendPost: boolean = true
  error?:Response;
  success?:Response
  public showPassword: boolean = false;
  user: string = '';
  value: string = '';
  hint?:boolean
  username: string = '';


  constructor(
    private signinServ:SignInService,
    private router:Router,
    public authServ:AuthService,
    private userService: UserIdService,
    private userId:UserIdService,
   ) {}


   myForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),

  });


  updateWorkerDataFromFormValues() {
    this.userData = {
      username: this.myForm.value.username || undefined,
      password: this.myForm.value.password || undefined,
    };
  }


  onSend() {
    if (this.isSendPost && this.myForm.valid) {
      this.isSendPost = false;
      this.updateWorkerDataFromFormValues();
      this.signinServ.create(this.userData).subscribe(
        (response: any) => {
          console.log(response);




          const data = {
            accessToken: response.accessToken,
            username: response.username,
            id: response.id
          };

          //console.log(response);
          this.isSendPost = true;
          this.success = response.message;
          this.authServ.login = true;
          this.router.navigate(['content']);


          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('username', data.username);
          localStorage.setItem('id', data.id);
          localStorage.setItem('token', data.accessToken);


        },
        (error: Response) => {
          this.handleServiceError(error);
          this.isSendPost = true;
        }
      );
    }
  }



public togglePasswordVisibility(): void {
  this.showPassword = !this.showPassword;
}

handleServiceError(error: any) {
  console.log(error);

     this.error = error;
     //this.customError = error.message;
     ;

 }



}
