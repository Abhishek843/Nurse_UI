import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.profileForm = this.formBuilder.group({
      City: [''],
      State: [''],
      address: [''],
      dob: [''],
      gender: ['']
    });
  }

  saveForm(): void {
    console.log('Form data is ', this.profileForm.value);
    this.appointmentService.saveAppointment(this.profileForm.value).subscribe(
      res => {
        console.log(res);
        alert('Form data submitted successfully!');
      },
      err => {
        console.log(err);
        alert('Error submitting form data!');
      }
    );
  }
}