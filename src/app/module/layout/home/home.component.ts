import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 
  public llenarForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder, 
    public llenarService: LlenarService,
    public route: Router) { 
      this.llenarForm = this.formBuilder.group({
        date: [null, [
          Validators.required]],
        ki: [null, [
          Validators.required]],
        kf: [null, [
          Validators.required]]
      })
  }

  ngOnInit(): void {
    
  }

  
  agregar(){
    this.llenarService.addLlenar(this.llenarForm.value);
    this.route.navigate(['report'])
  }
}
