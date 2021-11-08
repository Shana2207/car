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

  semana  = 4;
  dia = 3;
  objeto = {
    kmInicial: 0,
    kmFinal: 0,
    fecha: '0',
    comentarios: '',
    precio: 0,
    kmRecorido : 0
  }

  constructor(public formBuilder: FormBuilder, private llenarService: LlenarService, public route: Router) {
    this.llenarForm = this.formBuilder.group({
      ki: [null, [
        Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  public llenarForm: FormGroup;




  crear(): void {
    // for(let i= 42; i<=44; i++){
    //   this.llenarService.addLlenar(this.llenarForm.value);
    //   this.route.navigate(['report'])
    //   console.log('entro a semana');
    // }
    for(let i = 0; 1 <=3; i++){
      
    }

    this.dia = this.dia +1;
    
    // this.objeto = {
    //   kmInicial: 0,
    //   kmFinal: 500,
    //   fecha: '05-11-2021',
    //   comentarios: 'comentarios',
    //   precio: 200
    // }
    this.llenarService.addKm(this.semana, this.dia, this.objeto).then((res: any) => {
      console.log(res);

    });
  }

}
