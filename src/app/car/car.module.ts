import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClutchComponent } from './components/clutch/clutch.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { FormsModule } from '@angular/forms';
import { SpeedmeterComponent } from './components/speedmeter/speedmeter.component';

@NgModule({
  declarations: [ClutchComponent, WheelComponent, SpeedmeterComponent],
  imports: [CommonModule, FormsModule],
  exports: [ClutchComponent, WheelComponent],
})
export class CarModule { }
