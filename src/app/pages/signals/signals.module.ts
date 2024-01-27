import { NgModule } from '@angular/core';
import { SignalsComponent } from './container/signals.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SignalsComponent],
  imports: [CommonModule, RouterModule],
  exports: [],
})
export class SignalsModule {}
