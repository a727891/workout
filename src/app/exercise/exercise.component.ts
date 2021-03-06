import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  routineId:any;
  exerciseId:any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.routineId = params['routineId'];
      this.exerciseId = params['exerciseId'];
   });
  }


  ngOnInit() {
  }

}
