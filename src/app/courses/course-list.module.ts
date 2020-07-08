import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './courses/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';



@NgModule({
  declarations: [CourseListComponent, CourseListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CourseListComponent
  ]
})
export class CourseListModule { }
