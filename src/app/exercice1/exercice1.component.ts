import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercice1',
  templateUrl: './exercice1.component.html',
  styleUrls: ['./exercice1.component.css']
})
export class Exercice1Component implements OnInit {

  public text: string = '';
  public disable: boolean = true;

  Setdisable(isChecked: boolean): void {
    this.disable = !isChecked;
  }

  changeText(): void {
    this.text = 'Done';
  }
  constructor() { }

  ngOnInit(): void {
  }

}
