import { Component, OnInit } from '@angular/core';
import { animations } from '../../interface/animation';

@Component({
  selector: 'app-courses-topics',
  templateUrl: './courses-topics.component.html',
  styleUrls: ['./../сourses.component.scss'],
  animations: [
    animations.top1,
    animations.top2,
    animations.left,
    animations.left1,
    animations.left2,
    animations.left3,
    animations.left4,
    animations.left5,
    animations.swichCard,
  ],
})
export class CoursesTopicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
