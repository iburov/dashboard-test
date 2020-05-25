import { Component, OnInit } from '@angular/core';
import { StaffService } from '../staff/staff.service';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  counter$: ReplaySubject<number>;

  constructor(private staffService: StaffService) {}

  ngOnInit(): void {
    this.counter$ = this.staffService.counter$;
  }
}
