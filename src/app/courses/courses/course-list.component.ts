import { Component, OnInit } from '@angular/core';
import { CourseListItemComponent } from '../course-list-item/course-list-item.component';
import { CourseListItem } from '../course-list-item.model';
import { CourseService as CourseService } from '../course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: CourseListItem[] = [];

  constructor(private todoService: CourseService) { }

  ngOnInit(): void {
    this.courseItems = this.todoService.getCourseItems();
  }

}
