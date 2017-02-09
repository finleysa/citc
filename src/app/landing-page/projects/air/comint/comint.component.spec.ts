/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComintComponent } from './comint.component';

describe('ComintComponent', () => {
  let component: ComintComponent;
  let fixture: ComponentFixture<ComintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
