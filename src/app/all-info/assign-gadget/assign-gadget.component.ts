import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { WorkerService } from 'src/app/Data-Services/services/worker.service';
import { WorkerInterface } from 'src/app/Interface/worker-interface';

@Component({
  selector: 'app-assign-gadget',
  templateUrl: './assign-gadget.component.html',
  styleUrls: ['./assign-gadget.component.scss']
})
export class AssignGadgetComponent {


  showForm?: boolean
  viewMode:string = 'map'

  isSendPost: boolean = true
  error?:Response;
  success?:Response
  workerData?:WorkerInterface;
  user: string = '';
  value: string = '';
  hint?:boolean
  username: string = '';


  constructor(
    private workServ:WorkerService


   ) {}

   myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname:new FormControl('',Validators.required),
    username:new FormControl('',Validators.required),
    mansion:new FormControl('',Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),

  })


  updateUsersDataFromFormValues() {
    const formValue = this.myForm.value;
    this. workerData = {
      name: formValue.name || undefined,
      surname:formValue. surname || undefined,
      username:formValue.username || undefined,
      mansion:formValue.mansion || undefined,
      email:formValue.email || undefined
    }
  }


  onCreatePost(){
    if(this.isSendPost){
        this.updateUsersDataFromFormValues();
        console.log(this.myForm.value);

        if(this. workerData !== null && this. workerData !== undefined)

        this.workServ.create(this. workerData).subscribe({
          next:(response)=>console.log(response),
          error:(e)=>this.handleServiceError(e)

        })

      }
  }


handleServiceError(error: any) {
  console.log(error);

     this.error = error;

     ;

 }




}
