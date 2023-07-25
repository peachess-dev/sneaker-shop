import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [ButtonModule, InputTextModule],
  imports: [CommonModule],
})
export class PrimengModule {}
