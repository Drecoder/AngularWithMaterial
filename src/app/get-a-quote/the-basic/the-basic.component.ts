import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-basic',
  templateUrl: './the-basic.component.html',
  styleUrls: ['./the-basic.component.css']
})
export class TheBasicComponent implements OnInit {
  ngOnInit(): void {

  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
