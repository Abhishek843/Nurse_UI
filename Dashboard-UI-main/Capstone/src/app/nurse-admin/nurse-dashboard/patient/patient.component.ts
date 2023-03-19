import { AppointmentComponent } from './../appointment/appointment.component';
import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
export interface Patient {
  name: string;
  age: number;
  gender: string;
  diagnosis: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent {
  showTable = false;

  showPrescriptionTable() {
    this.showTable = true;


  }
  patients: Patient[] = [
    { name: 'John', age: 35, gender: 'Male', diagnosis: 'Flu' },
    { name: 'Jane', age: 42, gender: 'Female', diagnosis: 'Broken arm' },
    { name: 'Bob', age: 28, gender: 'Male', diagnosis: 'Migraine' },
    { name: 'Sue', age: 57, gender: 'Female', diagnosis: 'High blood pressure' }
  ];

  displayedCols: string[] = ['name', 'age', 'gender', 'diagnosis'];



  
  public patient = {
    name: 'John Doe',
    age: 35,
    gender: 'Male',
    email: 'johndoe@example.com'
  };
  displayedColumns = ['select','id','name','email','department','mobile','actions']
  dataSource = new MatTableDataSource<TableRow>([
    {id:'1', name: 'Jane Doe', email: 'jane.doe@example.com',department:'health',mobile:'46546575676',specialization:'eye' },
    { id:'2',name: 'Bob Johnson', email: 'johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'3',name: 'Matt Hardy', email: 'mat@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'4', name: 'Bob Johnson', email: 'bob.johnson@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
    { id:'5',name: 'Brock Lesner', email: 'lesner@example.com',department:'health',mobile:'9485456565',specialization:'eye' },
  ]);

  selection = new SelectionModel<TableRow>(true, []);

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  constructor(private dialog: MatDialog){ }
  
  openAddPatientDialog(): void {
    const dialogRef = this.dialog.open(AppointmentComponent, {
      width: '500px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach((row: TableRow) => this.selection.select(row));
  }
  onEdit(): void {
    console.log(`Editing user )`);
    // Add edit logic here
  }

  onDelete() :void {
    console.log(`Deleting user )`);
}
}

interface TableRow {
  id: string;
  name: string;
  department: string;
  specialization: string;
  // degree: string;
  mobile: string;
  email: string;

}

