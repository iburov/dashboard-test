import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleComponent } from './schedule/schedule.component';
import { ErrorComponent } from './error/error.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'schedule',
  },
  {
    path: 'schedule',
    component: ScheduleComponent,
  },
  {
    path: 'error/:errorId',
    component: ErrorComponent,
  },
  {
    path: 'staff',
    component: StaffComponent,
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
