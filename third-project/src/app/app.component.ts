import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private testService: TestService, private http: HttpClient){
    this.testService.printToConsole('test');
  }

  ngOnInit(){
    let obs = this.http.get('https://api.github.com/users/chinmaybhat1');
    obs.subscribe((response) => console.log(response))
  }
}
