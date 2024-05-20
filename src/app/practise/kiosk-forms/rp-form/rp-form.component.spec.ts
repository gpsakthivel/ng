import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpFormComponent } from './rp-form.component';

describe('RpFormComponent', () => {
  let component: RpFormComponent;
  let fixture: ComponentFixture<RpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
