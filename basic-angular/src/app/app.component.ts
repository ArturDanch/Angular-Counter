import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public countNumber = 0;
  public size = 150;
  public increase = () => {
    this.countNumber = this.countNumber + 1;
  }
  public refresh = () => {
    this.countNumber = 0;
  }
  public sizeIncrease = () => {
    this.size = this.size  + 10;
    if (this.size > 500) {
      this.size = 500;
    }
  }
  public sizeReduction = () => {
    this.size = this.size - 10;
    if (this.size < 90) {
      this.size = 90;
    }
  }
}

