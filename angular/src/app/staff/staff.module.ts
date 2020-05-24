import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffComponent } from './staff.component';
import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';



@NgModule({
  declarations: [StaffComponent, NewEmployeeFormComponent],
  imports: [
    CommonModule
  ]
})
export class StaffModule { }
