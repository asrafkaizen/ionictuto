import { Injectable } from '@angular/core';
import { Worker } from '../worker/worker.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  regisListRef: AngularFireList<any>;
  regisRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  //Create
  createWorker(worker: Worker){
    return this.regisListRef.push({
      name: worker.name,
      email: worker.email,
      password: worker.password,
      department: worker.department
    })
  }

  //get single
  getWorker(id: string) { 
    this.regisRef = this.db.object('/worker/' + id);
    return this.regisRef;
  }

  //get List
  getWorkerList(){
    this.regisListRef = this.db.list('/worker');
    return this.regisListRef;
  }

  //update
  updateWorker(id, worker: Worker){
    return this.regisRef.update({
      name: worker.name,
      email: worker.email,
      password: worker.password,
      department: worker.department
      
    })
  }

  //delete
  deleteWorker(id: string){
    this.regisRef = this.db.object('/worker/' + id);
    this.regisRef.remove();
  }

}
