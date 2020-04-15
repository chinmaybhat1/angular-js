import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  printToConsole(input){
    console.log(input + " service called");
  }
}
