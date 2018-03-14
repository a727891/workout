import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.component.html',
  styleUrls: ['./routine.component.css']
})
export class RoutineComponent implements OnInit {

  routineId:any;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.routineId = params['routineId'];
   });
  }

  ngOnInit() {
  }

}
