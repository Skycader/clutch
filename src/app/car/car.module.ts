import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClutchComponent } from './components/clutch/clutch.component';
import { WheelComponent } from './components/wheel/wheel.component';
import { FormsModule } from '@angular/forms';
import { SpeedmeterComponent } from './components/speedmeter/speedmeter.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
    declarations: [ClutchComponent, WheelComponent, SpeedmeterComponent],
  imports: [CommonModule, MaterialModule, FormsModule],
  exports: [ClutchComponent, WheelComponent],
})
export class CarModule {}
