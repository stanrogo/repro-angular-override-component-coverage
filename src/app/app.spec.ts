import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-child',
  template: 'template content',
})
export class MockAppChild {}

describe('App', () => {
  it.skip('should create the app', async () => {
    TestBed.configureTestingModule({
      imports: [App],
    });
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should still provide all code coverage', async () => {
    TestBed.configureTestingModule({
      imports: [App],
    }).overrideComponent(App, {
      set: {
        imports: [MockAppChild],
      },
    });

    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
