import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-speedmeter',
  templateUrl: './speedmeter.component.html',
  styleUrl: './speedmeter.component.scss',
})
export class SpeedmeterComponent {
  @Input() speed = 0;
  public get transform() {
    return 'rotate(' + (-128 + this.speed) + 'deg)';
  }
}
