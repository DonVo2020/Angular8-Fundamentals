import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms-template-driven3',
  templateUrl: './forms-template-driven3.component.html'
})
export class FormTemplateDrivenComponent3 implements OnInit  {
  public myLastName: string;
  constructor() {
  }

  ngOnInit() {
    this.myLastName = 'Default Value (coming from component): Smith';
  }
}
