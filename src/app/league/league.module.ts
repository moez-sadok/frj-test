import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueRoutingModule } from './league-routing.module';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { SearchComponent } from './search/search.component';
import { SharedModule } from '../shared/shared.module';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    LeagueRoutingModule
  ],
  declarations: [HomeComponent, TeamComponent, SearchComponent, PlayerComponent]
})
export class LeagueModule { }
