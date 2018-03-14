import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './core/auth.guard'

import { SettingsComponent } from './settings/settings.component'
import { RoutineListComponent } from './routine-list/routine-list.component'
import { RoutineComponent } from './routine/routine.component'
import { ExerciseComponent } from './exercise/exercise.component'
import { WorkoutComponent } from './workout/workout.component'

const routes: Routes = [
  { path: 'routines', component: RoutineListComponent, canActivate: [AuthGuard] },
  { path: 'routines/:routineId', component: RoutineComponent, canActivate: [AuthGuard] },
  { path: 'routines/:routineId/:exerciseId', component: ExerciseComponent, canActivate: [AuthGuard] },
  { path: 'routines/:routineId/:exerciseId/w/:workoutId', component: WorkoutComponent, canActivate: [AuthGuard] },
    { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
