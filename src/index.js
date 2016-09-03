import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Template} from 'template';

@Component({
  selector: 'main'
})

@View({
  directives: [Template],
  template: `
    <template></template>
  `
})

class Main {

}

bootstrap(Main);
