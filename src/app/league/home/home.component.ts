import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Team } from 'src/app/core/models/team';
import { Router } from '@angular/router';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'frj-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  teams: Team[] = [];

  constructor(public dataService: DataService,
     public router: Router,
     public viewService: ViewService) {}

  ngOnInit() {
    this.viewService._currentLeagueName.subscribe(leagueName =>  {
      if( leagueName.length > 0 ){
        this.dataService.getAllTeamsFromLeagueByName(leagueName).subscribe(teams =>{
          this.teams = teams;
        });
      }
    });
  }

  getTeamsByLeague(name){
    this.viewService.currentLeagueName = name;
  }

  selectTeam(team: Team) {
    this.viewService.currentTeam = team.strTeam;
    this.router.navigate(['league/team/' + team.idTeam]);
  }

}
