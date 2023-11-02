import { Injectable } from '@angular/core';
import { WorkerInterface } from 'src/app/Interface/worker-interface';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkerService extends DataService<WorkerInterface> {

  constructor(http:HttpClient) {
    super(http, 'http://localhost:8085/api/worker');
  }
}
