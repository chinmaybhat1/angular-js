import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  inputText : string = "Sample input";

  constructor() {
    this.user = new User();
    this.user.username = "Chinmay Bhat";
    this.user.designation = "Software Engineer";
    this.user.address = "#8, Akkamma block, Dinnur main road, RT Nagar, Bengaluru-32";
    this.user.phone = [
      '91-9035750531'
    ]
  }
}
