import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Option, Question } from 'src/app/type/type';
import { environment } from 'src/environments/environment';
import { cardAnimation, fadeInOutAnimation, cardBackgroundAnimation } from 'src/app/animation/animation';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [cardAnimation, fadeInOutAnimation, cardBackgroundAnimation],
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() question: Question;
  @Input() showState: 'thirdWait' | 'secondWait' | 'show';
  @Output() next = new EventEmitter<Option>();

  readonly optionPath = environment.optionPath;
  backgroundImage: string;
  ngOnInit(): void { }

  select(option: Option) {
    this.question.value = option;
    // this.next.emit(option);
  }

  nextStep() {
    if (this.question.value) {
      this.next.emit(this.question.value);
    }
  }
}
