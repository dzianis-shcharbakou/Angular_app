import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item.model';

import { Course } from './course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourseItems(): CourseListItem[] {
    return [
      new Course(1, `Course #1`,new Date(), 140,`Course #1 description`),
      new Course(2, `Course #2`,new Date(), 145,`Course #2 description`),
      new Course(3, `Course #3`,new Date(), 360,`Course #3 description`),
      new Course(4, `Course #4`,new Date(), 600,`Course #4 description`),
      new Course(5, `Course #5`,new Date(), 1200,`Course #5 description`),
    ];
  }
}
