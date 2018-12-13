import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'league', pathMatch: 'full' },
    { path: 'league', loadChildren: './league/league.module#LeagueModule' },
    { path: '**', redirectTo: 'league' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
