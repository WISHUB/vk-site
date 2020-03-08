// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './main/pages/home/home.component';
import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { CarouselComponent } from './main/components/carousel/carousel.component';
import { SmallCardComponent } from './main/components/small-card/small-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    SmallCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // RouterModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
