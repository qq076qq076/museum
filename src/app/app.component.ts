import { Component, OnInit } from '@angular/core';
import { fadeInOutAnimation } from './animation/animation';
import { FirstQuestion, SecondQuestion, QuestionList } from './question';
import { environment } from 'src/environments/environment';
import { Question, Option } from './type/type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInOutAnimation],
})
export class AppComponent implements OnInit {
  constructor() { }
  step = 1;
  firstQuestion = FirstQuestion;
  secondQuestion: Question;
  questionList: Question[] = QuestionList;
  readonly optionPath = environment.optionPath;

  get qIndex(): number {
    return this.step - 1;
  }

  ngOnInit() {
    this.setRandomSort();
    console.log(this.questionList)
  }

  start() {
    this.step = this.step + 1;
  }

  next(question: Question, option: Option) {
    if (this.step === 1) {
      this.secondQuestion = SecondQuestion[this.firstQuestion.value.next];
      console.log(this.secondQuestion)
    }
    question.value = option;
    this.step = this.step + 1;
  }

  getShowState(index: number) {
    if (index === this.step) {
      return 'show';
    } else if (index === this.step + 1) {
      return 'secondWait';
    } else if (index === this.step + 2) {
      return 'thirdWait';
    }
  }

  private setRandomSort() {
    this.questionList.sort(() => Math.random() - 0.5);
  }

}
