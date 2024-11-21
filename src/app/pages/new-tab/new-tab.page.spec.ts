import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTabPage } from './new-tab.page';

describe('NewTabPage', () => {
  let component: NewTabPage;
  let fixture: ComponentFixture<NewTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
