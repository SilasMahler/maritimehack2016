import {Component, View} from 'angular2/core';

@Component({
  selector: 'template'
})

@View({
  templateUrl: 'template.html'
})

export class Template {

  constructor() {
    console.info('Template Component Mounted Successfully');
  }

}
