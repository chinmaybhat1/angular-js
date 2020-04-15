import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private testService: TestService;
  
  constructor(testService: TestService){
    this.testService = testService;
    this.testService.printToConsole('Service called');
  }
}
