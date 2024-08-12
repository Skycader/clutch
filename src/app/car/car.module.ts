import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClutchComponent } from './components/clutch/clutch.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ClutchComponent, WheelComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClutchComponent, WheelComponent],
})
export class CarModule { }
