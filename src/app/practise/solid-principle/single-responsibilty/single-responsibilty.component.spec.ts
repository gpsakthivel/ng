import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleResponsibiltyComponent } from './single-responsibilty.component';

describe('SingleResponsibiltyComponent', () => {
  let component: SingleResponsibiltyComponent;
  let fixture: ComponentFixture<SingleResponsibiltyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleResponsibiltyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleResponsibiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
