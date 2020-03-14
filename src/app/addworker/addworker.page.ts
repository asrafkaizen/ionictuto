import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { WorkerService } from './../worker/worker.service';

@Component({
  selector: 'app-addworker',
  templateUrl: './addworker.page.html',
  styleUrls: ['./addworker.page.scss'],
})
export class AddworkerPage implements OnInit {
  registerForm: FormGroup;

  constructor(
    private workerService: WorkerService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      department: ['']
    })
  }

  formSubmit(){
    if (!this.registerForm.valid){
      return false;
    } else {
      this.workerService.createWorker(this.registerForm.value).then(res => {
        console.log(res)
        this.registerForm.reset();
        this.router.navigate(['/login']); //todo shud be home
      })
      .catch(error =>console.log(error));
    }
  }
}
