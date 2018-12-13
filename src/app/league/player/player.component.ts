import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/core/models/player';

@Component({
  selector: 'frj-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;
  constructor() { }

  ngOnInit() {
  }

}
