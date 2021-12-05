import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { TextAnimationComponent } from './components/text-animation/text-animation.component';
import { PlanetarySystemComponent } from './components/planetary-system/planetary-system.component';
import { FaqTabletComponent } from './components/faq-tablet/faq-tablet.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    FooterComponent,
    FaqComponent,
    TextAnimationComponent,
    PlanetarySystemComponent,
    FaqTabletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
