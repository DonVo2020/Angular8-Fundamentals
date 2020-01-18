import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms-model-driven1',
  templateUrl: './forms-model-driven1.component.html'
})
export class FormsModelDriven1Component implements OnInit  {
  myReactiveForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // 1. Define the model of Reactive Form.
    // Notice the nested formBuilder.group() for group Customer
    this.myReactiveForm = this.formBuilder.group({
      email: ``,
      password: ``,
      customer: this.formBuilder.group({
        prefix: ``,
        firstName: ``,
        lastName: ``
      })
    });

    // 1a. Different notation: same effect, using new FormControl()
    // this.myReactiveForm = this.formBuilder.group({
    // 	email   : new FormControl(''),
    // 	password: new FormControl(''),
    // 	customer: this.formBuilder.group({
    // 		prefix   : new FormControl(''),
    // 		firstName: new FormControl(''),
    // 		lastName : new FormControl('')
    // 	})
    // });

    // 2. Subscribe to changes at form level or...
    this.myReactiveForm.valueChanges.subscribe((value) => {
      // console.log('Changes at form level: ', value);
    });

    // 3. Subscribe to changes at control level.
    this.myReactiveForm.get('email').valueChanges.subscribe((value) => {
      console.log('Changes at control level: ', value);
    });
  }

  onSubmit() {
    console.log('Form submitted: ', this.myReactiveForm.value);
    alert('Form submitted!' + JSON.stringify(this.myReactiveForm.value));
    // TODO: do something useful with form
  }

	////************************** extra
	// 1a. Default values?
	// setDefault() {
	// 	setTimeout(()=> {
	// 		this.myReactiveForm.patchValue({
	// 			email   : 'info@kassenaar.com',
	// 			password: 'test'
	// 		});
	// 	}, 2000);
	// }
}
