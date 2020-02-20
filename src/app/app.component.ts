import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  // Title
  title = 'My-App';

  public sum(a = 10, b = -1) {
    this.consoleLog(a, b);
    return a + b;
  }

  public substract(a, b) {
    this.consoleLog(a, b);
    return a - b;
  }

  private consoleLog(a, b) {
    console.log(a);
    console.log(b);
  }
}
