/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { IcatchComponent } from './icatch.component';

describe('IcatchComponent', () => {
  let component: IcatchComponent;
  let fixture: ComponentFixture<IcatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
