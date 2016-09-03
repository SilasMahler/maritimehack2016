import {Component} from '@angular/core';

@Component({
  selector: 'vesseltrip',
  template: `
<input 
    type="text"
    (keyup)="onKeyUp()"
    (input)="color=$event.target.value"
    [style.background-color]="color"
    >`
})

export class VesselApp {
  public color: string;
  onKeyUp() {
    console.log('keyup: ' +
      this.color)
  }


}
