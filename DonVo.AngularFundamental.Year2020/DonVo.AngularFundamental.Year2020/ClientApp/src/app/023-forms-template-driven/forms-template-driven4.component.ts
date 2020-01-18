import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-template-driven4',
  templateUrl: './forms-template-driven4.component.html'
})
export class FormTemplateDrivenComponent4 implements OnInit  {
  public myLastName: string;
  constructor() {
  }

  ngOnInit() {
    this.myLastName = 'Default Value (coming from component): Smith';
  }

  onSubmit(form) {
    console.log('Form submitted: ', form.value);
    alert('Form submitted!' + JSON.stringify(form.value));
    // TODO: send result to actual API/RESTful endpoint.
  }
}
