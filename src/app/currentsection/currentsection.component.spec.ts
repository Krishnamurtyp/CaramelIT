import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentsectionComponent } from './currentsection.component';

describe('CurrentsectionComponent', () => {
  let component: CurrentsectionComponent;
  let fixture: ComponentFixture<CurrentsectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentsectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
