import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {GamesComponent} from "./games/games.component";
import {FormsComponent} from "./forms/forms.component";
import {KalkulatorComponent} from "./kalkulator/kalkulator.component";
import {WonderViewComponent} from "./wonder-view/wonder-view.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'kalkulator', component: KalkulatorComponent },
  { path: 'games', component: GamesComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'wonder', component: WonderViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
