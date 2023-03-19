import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsUrl = 'http://localhost:3000/appointments';

  constructor(private http: HttpClient) {}

  saveAppointment(appointment: any): Observable<any> {
    return this.http.post<any>(this.appointmentsUrl, appointment);
  }
}
