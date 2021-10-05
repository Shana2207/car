import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Llenar } from '../llenar/models/llenar';
import { LlenarService } from '../llenar/services/llenar.service';
@Component({
  selector: 'app-editrep',
  templateUrl: './editrep.component.html',
  styleUrls: ['./editrep.component.scss']
})
export class EditrepComponent implements OnInit {

  edit = null;
  editForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute,  private llenarService: LlenarService) { 
    this.initForm();
  }

  ngOnInit():void{ 
  }

  llen:Llenar = {
    date: '',
    ki:'',
    kf:''
  }

  onSave():void{
    /*
    this.llenarService.getUpdateList(this.llen);*/
    console.log(this.editForm.value);
  }


  private initForm(): void {
    this.editForm = this.formBuilder.group({
      ki: [ '' , [
        Validators.required]],
      kf: ['', [
        Validators.required]],
      coments: ['', [
        Validators.required]]
    });
  }

}
