/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BmsComponent } from './bms.component';

describe('BmsComponent', () => {
  let component: BmsComponent;
  let fixture: ComponentFixture<BmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
