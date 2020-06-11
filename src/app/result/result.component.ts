import { Component, OnInit, Input, OnChanges, Renderer2, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Result, result } from './result';
import { Question } from '../type/type';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit, OnChanges {

  constructor(
    private renderer2: Renderer2,
  ) { }
  @Input() secondQuestion: Question;
  @Output() restart = new EventEmitter();

  readonly resultPath = environment.resultPath;
  result: Result = result.a1;
  friend: Result = result[result.a1.friend];
  ngOnInit(): void {
    this.renderer2.addClass(document.body, 'result');
  }

  ngOnChanges() {
    this.getResult();
  }

  private getResult() {
    this.result = result[this.secondQuestion.value.value];
    this.friend = result[this.result.friend];

  }

  gift() {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSfBPYyogf_Wa-MB9qiHwI_CPzaPcE_Ol96u4vtBjGRvyLXtuQ/viewform')
  }

  toFB() {
    const facebookWindow = window.open(
      'https://www.facebook.com/sharer/sharer.php?u=' + document.location.href,
      'facebook-popup',
      'height=350,width=600'
    );
    if (facebookWindow.focus) {
      facebookWindow.focus();
    }
    return false;
  }
}
