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
  public clutch = 1;
  public transmission = 0;
  public break = 1;
  public gear = 0;
  public gas = 1;

  public transmit() {
    if (!this.started && this.transmission > 0)
      this.transmission -= 10 * this.clutch;
    if (this.started && this.engine < 1000 + (1 - this.gas) * 1000)
      this.engine += 80 * (1 / this.gas);
    if (this.engine > 1000 + (1 - this.gas) * 1000)
      this.engine = 1000 + (1 - this.gas) * 1000;

    this.engine -= 1;

    if (!this.started) this.engine -= 45;
    if (this.engine < 0) this.engine = 0;

    if (this.started && this.gear > 0) {
      if (this.transmission < this.clutch * 1000)
        this.transmission += this.engine * this.clutch * 0.05;
    }

    if (this.gear > 0) {
      this.engine -=
        (this.engine *
          this.clutch *
          Math.abs(this.transmission - this.engine)) /
        1000;

      if (this.transmission > 0)
        this.engine -=
          this.gear *
          10 *
          (Math.abs(this.transmission - this.engine - 200) / 1000);
      if (this.engine < 0) this.engine = 0;
    }

    if (this.engine <= 500 && this.clutch > 0 && this.gear > 0) {
      this.stopEngine();
    }

    if (this.transmission > 1000) this.transmission = 1000;

    this.transmission -= (1 + this.gear * 100 * 0.01) / (this.break + 0.01);
    if (this.transmission < 0) this.transmission = 0;

    this.speed = (this.transmission * 1 * 1.2) / 60;
  }

  public startAudio = new Audio('assets/sounds/start.m4a');

  public status = 'Start engine';
  public startEngine() {
    this.startAudio.play();
    this.status = 'Starting...';

    setTimeout(() => {
      this.started = true;
      this.status = 'Start engine';
    }, 2000);
  }

  public stopAudio = new Audio('assets/sounds/stop.wav');

  public stopEngine() {
    this.startAudio.pause();
    this.startAudio.currentTime = 0;

    if (this.engine) this.stopAudio.play();
    setTimeout(() => {
      this.started = false;
    }, 100);
  }

  public toggleEngine(event: any) {
    console.log(event);
  }

  public playRevv() {
    if (Date.now() - this.revvPlaying > 2000) {
      var revvAudio = new Audio('assets/sounds/revv.m4a');
      if (this.engine > 200) revvAudio.play();
      this.revvPlaying = Date.now();
    }
  }

  public lastEngine = 0;
  public revvPlaying = Date.now();

  ngOnInit() {
    setInterval(() => {
      this.transmit();
    }, 100);

    setInterval(() => {
      if (this.engine - 10 > this.lastEngine) {
        this.playRevv();
        this.lastEngine = this.engine;
      }
      this.lastEngine = this.engine;
    }, 300);
  }
}
