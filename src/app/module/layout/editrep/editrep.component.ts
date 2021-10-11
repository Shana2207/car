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

  
  editForm!: FormGroup;
  editRef: any
  constructor(private formBuilder: FormBuilder, 
              private route: ActivatedRoute,  
              private llenarService: LlenarService,
              public router: Router) { 
    this.editForm = this.formBuilder.group({
      date: [ '' , [
        Validators.required]],
      ki: [ '' , [
        Validators.required]],
      kf: ['', [
        Validators.required]],
      coments: ['', [
        Validators.required]]
    })
  }

  ngOnInit():void{ 
    const id = this.route.snapshot.paramMap.get('id');
    this.llenarService.getList(id).subscribe(res => {
      this.editRef = res;
      this.editForm = this.formBuilder.group({
        date: [this.editRef.date],
        ki: [this.editRef.ki],
        kf: [this.editRef.kf],
        coments: [this.editRef.coments],
      })
    })
  }
  
  onSave(){
    const id = this.route.snapshot.paramMap.get('id');
    this.llenarService.getUpdateList(this.editForm.value, id);
    this.router.navigate(['report']);
  }


    
  

}
