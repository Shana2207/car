import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';

import { DatePipe } from '@angular/common';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-semana',
  templateUrl: './semana.component.html',
  styleUrls: ['./semana.component.scss']
})
export class SemanaComponent implements OnInit {

  constructor(public formBuilder: FormBuilder, private llenarService: LlenarService, public route: Router) { 
    this.llenarForm = this.formBuilder.group({
      ki: [null, [
        Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  public llenarForm: FormGroup;
  
  

  crear():void{
    for(let i= 42; i<=44; i++){
      this.llenarService.addLlenar(this.llenarForm.value);
      this.route.navigate(['report'])
      console.log('entro a semana');
    }
  }

}
