import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditrepComponent } from './module/layout/editrep/editrep.component';
import { HomeComponent } from './module/layout/home/home.component';
import { ReportComponent } from './module/layout/report/report.component';
import { SemanaComponent } from './module/layout/semana/semana.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'report', component: ReportComponent },
  { path: 'edit-report/:id', component: EditrepComponent },
  { path: 'semana', component: SemanaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
