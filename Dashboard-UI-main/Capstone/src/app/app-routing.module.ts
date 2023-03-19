import { AppointmentComponent } from './nurse-admin/nurse-dashboard/appointment/appointment.component';
import { AboutComponent } from './admin/home/about/about.component';
import { PhysicianComponent } from './admin/home/physician/physician.component';
import { PatientComponent } from './nurse-admin/nurse-dashboard/patient/patient.component';
import { NurseComponent } from './nurse-admin/nurse-dashboard/nurse/nurse.component';
import { HomeComponent } from './admin/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    
        // path: 'home',
        // component: HomeComponent,
        children: [
         { path: 'home',
        component: HomeComponent},
          { path: 'nurse', component: NurseComponent },
          { path: 'patient', component: PatientComponent },
          { path: 'physician', component: PhysicianComponent },
          {path:  'about', component: AboutComponent},
          {path: 'appointment',component:AppointmentComponent}
        ]
      },
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
