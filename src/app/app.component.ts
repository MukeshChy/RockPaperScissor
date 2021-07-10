import { Component, OnInit } from '@angular/core';
import { HandFormation } from './hand-formation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  userSelected = 0;
  systemSelected = 0;
  userScore = 0;
  systemScore = 0;
  hasUserWon = false;
  hasSystemWon = false;

  victories: any = {}

  ngOnInit() {
    this.victories = {
      1: [HandFormation.SCISSOR],
      2: [HandFormation.ROCK],
      3: [HandFormation.PAPER]
    }
  }

  onUserSelection(selection: HandFormation) {
    this.userSelected = selection;
    this.executeSystemSelection();
  }

  executeSystemSelection() {
    this.systemSelected = Math.floor(Math.random() * 3) + 1;
    if (this.systemSelected !== this.userSelected) {
      this.checkWinner();
    }
  }

  checkWinner() {
    this.hasUserWon = this.victories[this.userSelected].includes(this.systemSelected) ? true : false;
    this.hasSystemWon = this.victories[this.systemSelected].includes(this.userSelected) ? true : false;
    this.userScore+= this.hasUserWon ? 1 : 0;
    this.systemScore+= this.hasSystemWon ? 1 : 0;
  }

  onReplay(reset?: boolean) {
    this.userSelected = 0;
    this.systemSelected = 0;
    this.hasUserWon = false;
    this.hasSystemWon = false;
    if (reset) {
      this.resetScore();
    }
  }

  resetScore() {
    this.userScore = 0;
    this.systemScore = 0;
  }

}
