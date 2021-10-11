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

  constructor(private llenarService: LlenarService) { }

  llen:Llenar = {
    id:'',
        date: '',
        ki:'',
        kf:'',
      coments: ''}

  ngOnInit(): void {
    this.getLlenarList();
  }
  LlenarList: any;
    getLlenarList = () => 
      this.llenarService
      .getLlenarList()
      .subscribe(res => (this.LlenarList = res));
}


