import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/type/type';

@Component({
  selector: 'app-text-select',
  templateUrl: './text-select.component.html',
  styleUrls: ['./text-select.component.scss']
})
export class TextSelectComponent implements OnInit {

  constructor() { }
  @Input() optionList: Option[];
  @Input() selected: Option;
  @Input() font: string;
  @Output() changeSelect = new EventEmitter<Option>();
  // readonly optionPath = environment.optionPath;

  ngOnInit(): void {
  }

}
