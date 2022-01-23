import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { HttpClientModule } from '@angular/common/http';
import { ConsultaLojaSupermercadorComponent } from './consulta-lojaSupermercador/consulta-Supermercador.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, ConsultaLojaSupermercadorComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
