import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './report/report.component';

import { NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './main/main.component';
import { EditrepComponent } from './editrep/editrep.component';
import { SemanaComponent } from './semana/semana.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    MainComponent,
    EditrepComponent,
    SemanaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class LayoutModule { }
