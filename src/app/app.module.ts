import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { MatIconModule } from '@angular/material/icon'
import { registerLocaleData } from '@angular/common'
import locale from '@angular/common/locales/es-CO'
registerLocaleData(locale)

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CalculatorComponent } from './components/calculator/calculator.component'

@NgModule({
  declarations: [AppComponent, CalculatorComponent],
  imports: [BrowserModule, AppRoutingModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
