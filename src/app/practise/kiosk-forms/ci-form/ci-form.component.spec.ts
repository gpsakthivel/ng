import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiFormComponent } from './ci-form.component';

describe('CiFormComponent', () => {
  let component: CiFormComponent;
  let fixture: ComponentFixture<CiFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
