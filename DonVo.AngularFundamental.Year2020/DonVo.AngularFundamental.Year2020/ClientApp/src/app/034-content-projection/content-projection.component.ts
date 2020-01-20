import { Component } from '@angular/core';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html'
})
export class ContentProjectionComponent {
  onSubmitCard1(event) {
    console.log('Card 1 submitted!, with data: ', event);
  }

  onChecked(value) {
    console.log('Newsletter checked: ', value);
  }
}
