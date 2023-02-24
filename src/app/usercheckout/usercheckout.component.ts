import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-usercheckout',
  templateUrl: './usercheckout.component.html',
  styleUrls: ['./usercheckout.component.css']
})
export class UsercheckoutComponent {
  Title = "Payment Details"
  firstName: string = '';
  lastName: string = '';
  phone: string = '';
  credit_card: string = '';

  @Output() checkout: EventEmitter<any> = new EventEmitter();
  constructor() {

  }
  ngOnInit(): void {

  }
  submitForm(): void {

    const user = {
      firstName: this.firstName,
      lastname: this.lastName,
      phone: this.phone,
      credit_card: this.credit_card
    }
    this.checkout.emit(user);

    this.firstName = ''
    this.lastName = ''
    this.phone = ''
    this.credit_card = ''
  }


}
