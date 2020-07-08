import { CourseListItem } from './course-list-item.model';

export class Course implements CourseListItem {
  public id: number;
  public title: string;
  public creationDate: string;
  public duration: number;
  public description: string;

  constructor(id: number, title: string, creationDate: Date, duration: number, description: string){
    this.id = id;
    this.title = title;
    this.creationDate = creationDate.toLocaleDateString();
    this.duration = duration;
    this.description = description;
  }
}
