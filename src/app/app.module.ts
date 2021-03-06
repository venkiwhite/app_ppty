import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
// import { ReactiveFormsModule } from "@angular/forms";

// Custom Modules
import { SharedModule } from './shared/modules/shared/shared.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BuyInMenuComponent } from './shared/components/buy-in-menu/buy-in-menu.component';
import { BannerComponent } from './shared/components/banner/banner.component';
import { BannerMenuComponent } from './shared/components/banner/banner-menu/banner-menu.component';
import { BannerWindowComponent } from './shared/components/banner/banner-window/banner-window.component';

// Services
import { DataServiceService } from './shared/services/data-service.service';
import { OverlayMenuComponent } from './core/overlay-menu/overlay-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BuyInMenuComponent,
    BannerComponent,
    BannerMenuComponent,
    BannerWindowComponent,
    OverlayMenuComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
