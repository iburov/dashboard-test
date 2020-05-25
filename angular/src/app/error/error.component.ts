import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'dashboard-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {
  errorId$: Observable<string>;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.errorId$ = this.activatedRoute.params.pipe(
      map((params) => params.errorId)
    );
  }
}
