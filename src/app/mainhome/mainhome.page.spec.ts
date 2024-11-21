import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainhomePage } from './mainhome.page';

describe('MainhomePage', () => {
  let component: MainhomePage;
  let fixture: ComponentFixture<MainhomePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MainhomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
