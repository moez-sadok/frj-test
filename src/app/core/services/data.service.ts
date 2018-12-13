import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';
import { League } from '../models/league';
import { Team } from '../models/team';
import { Player } from '../models/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private basePath = 'https://www.thesportsdb.com/api/v1/json/1/';
  private LEAGUES_URL = 'all_leagues.php';
  private TEAMS_URL = 'search_all_teams.php';
  private PLAYRS_URL = 'lookup_all_players.php';
 
  constructor(public httpClient: HttpClient) { }

  getAllLaegues(): Observable<League[]> {
    return this.httpClient.get<League>(this.basePath + this.LEAGUES_URL).pipe(
      map((response: any) => {
        return response.leagues;
      })
    );
  }

  getAllTeamsFromLeagueByName(league: string): Observable<Team[]> {
    const params = new HttpParams().set('l', league);
    return this.httpClient.get<Team>(this.basePath + this.TEAMS_URL, {params}).pipe(
      map((response: any) => {
        return response.teams;
      })
    );
  }

  getAllPlayersByTeamId(teamId: string): Observable<Player[]> {
    const params = new HttpParams().set('id', teamId);
    return this.httpClient.get<Player>(this.basePath + this.PLAYRS_URL, {params}).pipe(
      map((response: any) => {
        return response.player;
      })
    );
  }

}
