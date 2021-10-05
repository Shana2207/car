import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  
  
  llenar!: Llenar[];

   
  public isCollapsed = false;
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private formBuilder: FormBuilder, 
              private llenarService: LlenarService,
              private router: Router) { }

  ngOnInit(): void {
    this.getLlenarList();
  }

  llen:Llenar = {
    date: '',
    ki:'',
    kf:''
  }

  LlenarList: any;
  getLlenarList = () => 
    this.llenarService
    .getLlenarList()
    .subscribe(res => (this.LlenarList = res));


  getSendId(idDoc: any): void{
    console.log(idDoc);
  }

}
