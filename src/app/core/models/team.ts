import { Player } from './player';

export interface Team {
  idTeam: number;
  strTeam: string;
  strTeamBadge: string;

  players: Player[];

}
