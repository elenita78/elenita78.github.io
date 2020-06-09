import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameCoverComponent } from './components/game-cover/game-cover.component';
import { PlayerComponent } from './components/player/player.component';
import { GameFacilitationComponent } from './components/game-facilitation/game-facilitation.component';


const routes: Routes = [
  {path:'', component:GameCoverComponent},
  {path:'player', component:PlayerComponent},
  {path:'facilitation', component:GameFacilitationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
