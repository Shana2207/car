import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private llenarService: LlenarService) { }

  ngOnInit(): void {
    
  }

  llenarForm = this.formBuilder.group({
    ki: [null, [
      Validators.required]]
  });

  llen:Llenar = {
    date: '',
    ki:'',
    kf:''
  }

  agregar(){
    this.llenarService.addLlenar(this.llen);
  }
}
