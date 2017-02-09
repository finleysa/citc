/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mx15Component } from './mx15.component';

describe('Mx15Component', () => {
  let component: Mx15Component;
  let fixture: ComponentFixture<Mx15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mx15Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mx15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
