import { Route } from '@angular/router';
import { CourseListComponent } from './courses/courses/course-list.component';

export const ROUTES: Route[] = [
  { path: `listing`, component: CourseListComponent },
  { path: ``, redirectTo: `listing`, pathMatch: `full`}
];
