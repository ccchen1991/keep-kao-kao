import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Keep Kao Kao';

  clickMessage = '';

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }
}
