import { Component, OnInit } from '@angular/core';
import { DocumentChangeAction } from '@angular/fire/compat/firestore';

import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';

import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  
  
  llenar!: Llenar[];

   
  public isCollapsed = true;
  myDate = new Date();
  date: Date | undefined;
  constructor(private llenarService: LlenarService, public datepipe: DatePipe) { }

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

  myFunction(){
    this.date=new Date();
    let latest_date =this.datepipe.transform(this.date, 'dd-MM-YYYY');
  }
      
  
          
      
}


