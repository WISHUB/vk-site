// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

// Utilities
import { registerLocaleData } from '@angular/common';
import localeEsAR from '@angular/common/locales/es-AR';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './main/pages/home/home.component';
import { NavBarComponent } from './main/components/nav-bar/nav-bar.component';
import { FooterComponent } from './main/components/footer/footer.component';
import { CarouselComponent } from './main/components/carousel/carousel.component';
import { SmallCardComponent } from './main/components/small-card/small-card.component';
import { ProductDetailComponent } from './main/pages/product-detail/product-detail.component';
import { PaymentsMethodsComponent } from './main/components/payments-methods/payments-methods.component';

registerLocaleData(localeEsAR, 'es-Ar');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    FooterComponent,
    CarouselComponent,
    SmallCardComponent,
    ProductDetailComponent,
    PaymentsMethodsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'es-Ar' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
