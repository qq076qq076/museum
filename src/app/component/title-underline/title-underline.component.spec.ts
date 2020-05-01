import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleUnderlineComponent } from './title-underline.component';

describe('TitleUnderlineComponent', () => {
  let component: TitleUnderlineComponent;
  let fixture: ComponentFixture<TitleUnderlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleUnderlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleUnderlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
