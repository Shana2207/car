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

  constructor(private llenarService: LlenarService) { }

  ngOnInit(): void {
  }

  crear():void{
    for(let i= 42; i<=44; i++){
      
    }
  }

}
