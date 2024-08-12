import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrl: './wheel.component.scss',
})
export class WheelComponent {
  public get animation() {
    if (this.speed === 0) return '0s';
    return 60 / this.speed + 's';
  }
  public speed = 0;

  public speed2 = 0;

  public started = false;
  public engine = 0;
  public clutch = 0;
  public transmission = 0;

  public transmit() {
    if (this.started) this.engine += 100;
    if (!this.started) this.engine -= 45;
    if (this.engine < 0) this.engine = 0;
    if (this.started && this.engine > 1000) this.engine = 1000;
    if (this.started) {
      if (this.transmission < this.clutch * 1000)
        this.transmission += this.engine * this.clutch * 0.05;
    }
    this.engine -=
      (this.engine * this.clutch * Math.abs(this.transmission - this.engine)) /
      1000;

    if (this.engine <= 500 && this.clutch > 0) {
      this.started = false;
    }
    if (this.engine > 1000) this.engine = 1000;

    if (this.transmission > 1000) this.transmission = 1000;

    this.transmission -= 200 * 0.01;
    if (this.transmission < 0) this.transmission = 0;

    this.speed = this.transmission / 100;
    this.speed2 = this.transmission;
  }

  ngOnInit() {
    setInterval(() => {
      this.transmit();
    }, 100);
  }
}
