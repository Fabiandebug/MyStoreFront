import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, FormControlName, Validators } from '@angular/forms';

@Component({
  selector: 'app-usercheckout',
  templateUrl: './usercheckout.component.html',
  styleUrls: ['./usercheckout.component.css']
})
export class UsercheckoutComponent {
  Title = "Payment Details"
  // firstName: string = '';
  // lastName: string = '';
  // phone: string = '';
  // credit_card: string = '';

  @Output() checkout: EventEmitter<any> = new EventEmitter();
  constructor() {

  }
  checkoutFrm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastName: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
    credit_card: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')])
  })


  submitForm(): void {
    if (this.checkoutFrm.valid) {
      const formValues = this.checkoutFrm.value;
      this.checkout.emit(formValues);

      // Reset the form after submission
      this.checkoutFrm.reset();
    } else {
      // Handle the case where the form is invalid
      console.log('Invalid form');
    }
  }

  get firstName() {

    return this.checkoutFrm.get('firstName');
  }
  get lastName() {

    return this.checkoutFrm.get('lastName');
  }

  get phone() {

    return this.checkoutFrm.get('phone');
  }

  get credit_card() {
    return this.checkoutFrm.get('credit_card')
  }



}
