import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { MainLayoutComponent } from './main-layout.component';
import { HeaderComponent } from '../../components/header/header.component';

@NgModule({
  declarations: [MainLayoutComponent, HeaderComponent],
  imports: [CommonModule, BrowserModule],
  providers: [],
  bootstrap: [MainLayoutComponent],
})
export class MainLayoutModule {}
