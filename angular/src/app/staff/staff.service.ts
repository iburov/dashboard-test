import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Employee } from './staff.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StaffService {
  counter$ = new ReplaySubject<number>();
  data$ = new ReplaySubject<Employee[]>();

  private data: Employee[];

  constructor(private http: HttpClient) {}

  getStaff(): Observable<Employee[]> {
    return this.http.get<Employee[]>(environment.apiUrl + 'staff').pipe(
      map((data: Employee[]) => {
        this.data = data;

        this.updateData();

        return this.data;
      })
    );
  }

  addEmployee(employee: Employee) {
    this.data.push(employee);

    this.updateData();
  }

  private updateData() {
    this.counter$.next(this.data.length);
    this.data$.next(this.data);
  }
}
