/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { P750Component } from './p750.component';

describe('P750Component', () => {
  let component: P750Component;
  let fixture: ComponentFixture<P750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ P750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(P750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
