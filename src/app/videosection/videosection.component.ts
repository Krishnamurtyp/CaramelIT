import { Component, OnInit , Input} from '@angular/core';
import { Course } from '../shared/course';
import { Lecture } from '../shared/lecture';


@Component({
  selector: 'app-videosection',
  templateUrl: './videosection.component.html',
  styleUrls: ['./videosection.component.scss']
})
export class VideosectionComponent implements OnInit {

  opened = false;

  @Input()
  course: Course;

  selectedLecture: Lecture;
  constructor() { }

  ngOnInit(): void {
  }
  onSelectLecture(lecture: Lecture){
    console.log(lecture.name);
    this.selectedLecture = lecture;
  }


}
