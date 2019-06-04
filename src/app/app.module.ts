import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { FormzModule } from './formz/formz.module';
import { NavigationModule } from './navigation/navigation.module';
import { LayoutModule } from './layout/layout.module';
import { ButtonsModule } from './buttons/buttons.module';
import { TablesModule } from './tables/tables.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HomeModule,
    FormzModule,
    NavigationModule,
    LayoutModule,
    ButtonsModule,
    TablesModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
