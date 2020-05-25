import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Employee, EmployeeListItem } from './staff.model';
import { StaffService } from './staff.service';
import { map } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

import { NewEmployeeFormComponent } from './new-employee-form/new-employee-form.component';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss'],
})
export class StaffComponent implements OnInit {
  staff$: Observable<EmployeeListItem[]>;
  filteredStaff: EmployeeListItem[];
  displayedColumns: string[] = ['name', 'group'];

  constructor(private staffService: StaffService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.staff$ = this.staffService.data$.pipe(map(this.mapData));
    this.staffService.getStaff().subscribe();
  }

  openDialog(): void {
    this.dialog.open(NewEmployeeFormComponent, {
      width: '400px',
    });
  }

  filter(event, staff) {
    const keyword = (event.target.value || '').toLowerCase();

    if (!!keyword) {
      this.filteredStaff = staff.filter((el) => {
        return (
          el.name.toLowerCase().indexOf(keyword) >= 0 ||
          el.group.toLowerCase().indexOf(keyword) >= 0
        );
      });
    } else {
      this.filteredStaff = null;
    }
  }

  private mapData(data: Employee[]): EmployeeListItem[] {
    return data.map((el) => ({
      name: `${el.firstName} ${el.lastName}`,
      group: el.group,
    }));
  }
}
