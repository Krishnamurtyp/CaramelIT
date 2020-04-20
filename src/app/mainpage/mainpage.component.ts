import { Component, OnInit } from '@angular/core';
import { Course} from '../shared/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  courses: Course[];

  selectedCourse: Course;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courses = this.courseService.getCourse();
  }

  onSelect(course: Course){
    this.selectedCourse = course;
  }

}
