import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Option } from 'src/app/type/type';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-image-select',
  templateUrl: './image-select.component.html',
  styleUrls: ['./image-select.component.scss']
})
export class ImageSelectComponent implements OnInit {

  constructor() { }
  @Input() optionList: Option[];
  @Input() selected: Option;
  @Output() changeSelect = new EventEmitter<Option>();
  readonly optionPath = environment.optionPath;
  ngOnInit(): void {
  }

}
