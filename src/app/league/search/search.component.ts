import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { League } from 'src/app/core/models/league';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'frj-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchCtrl = new FormControl();
  filterLeagues: Observable<League[]>;
  leagues: League[] = [];

 @Output() selectedLeague: EventEmitter<string> = new EventEmitter();

  constructor(public dataservice: DataService) {
    this.filterLeagues = this.searchCtrl.valueChanges.pipe(
      startWith(''),
      map(league => league ? this._filterLeagues(league) : this.leagues.slice())
    );
  }

  ngOnInit(): void {
    this.dataservice.getAllLaegues().subscribe( list => {
      this.leagues = list;
    });
  }

  getSelectedLeague(idLeague: string){
    this.selectedLeague.emit(idLeague);
  }

  private _filterLeagues(value: string): League[] {
    const filterValue = value.toLowerCase();
    return this.leagues.filter(
      league => league.strLeague.toLowerCase().indexOf(filterValue) === 0
    );
  }

}
