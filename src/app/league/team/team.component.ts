import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';
import { Player } from 'src/app/core/models/player';
import { ViewService } from 'src/app/core/services/view.service';

@Component({
  selector: 'frj-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  currentTeamId = null;
  players: Player[] = [];
  constructor(public route: ActivatedRoute, 
    public dataService: DataService,
    public viewService: ViewService) {}

  ngOnInit() {
    this.checkTeamId();
  }

  checkTeamId() {
    this.route.params.subscribe(params => {
      this.currentTeamId = params['id'];
      if (this.currentTeamId) {
        this.dataService
          .getAllPlayersByTeamId(this.currentTeamId)
          .subscribe(players => {
            this.players = players;
          });
      }
    });
  }
}
