import { Component, OnInit } from '@angular/core';
import { WorkerService } from 'src/app/Data-Services/services/worker.service';
import { WorkerInterface } from 'src/app/Interface/worker-interface';

@Component({
  selector: 'app-all-workers',
  templateUrl: './all-workers.component.html',
  styleUrls: ['./all-workers.component.scss']
})
export class AllWorkersComponent implements OnInit {
  workersList:WorkerInterface []=[];
  isSendPost?:boolean =true;
  success?:string;
  error?:Response
  displayedColumns: string[] = ['name', 'surname', 'username', 'mansion', 'email'];

  constructor(
    private workServ:WorkerService


   ) {}
  ngOnInit(): void {
    this.getAllWorkers()
  }


   public getAllWorkers(){
    this.workServ.getAll().subscribe((response)=>{
      console.log(response);
      this.workersList = response

    })

  }



}
