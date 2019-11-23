import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { NiceFooterComponent } from './nice-footer/nice-footer.component';
import { GamesComponent } from './games/games.component';
import { FormsComponent } from './forms/forms.component';
import { KalkulatorComponent } from './kalkulator/kalkulator.component';
import {FormsModule} from "@angular/forms";
import { WonderViewComponent } from './wonder-view/wonder-view.component';
import { AuctionComponent } from './zadania/auction/auction.component';
import { KantorComponent } from './zadania/kantor/kantor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    MenuComponent,
    NiceFooterComponent,
    GamesComponent,
    FormsComponent,
    KalkulatorComponent,
    WonderViewComponent,
    AuctionComponent,
    KantorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [MenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
