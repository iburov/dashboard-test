import { Component, OnInit, Inject } from '@angular/core';
import { StaffService } from '../staff.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee, EmployeeGroup } from '../staff.model';
@Component({
  selector: 'app-new-employee-form',
  templateUrl: './new-employee-form.component.html',
  styleUrls: ['./new-employee-form.component.scss'],
})
export class NewEmployeeFormComponent implements OnInit {
  firstName: string;
  lastName: string;
  group: EmployeeGroup;

  constructor(
    private staffService: StaffService,
    public dialogRef: MatDialogRef<NewEmployeeFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Employee
  ) {}

  ngOnInit(): void {}

  create() {
    this.staffService.addEmployee({
      id: new Date().getTime(),
      firstName: this.firstName,
      lastName: this.lastName,
      group: this.group,
    });

    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

  // TODO: add validation!!!
}
