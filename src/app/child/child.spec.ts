import { TestBed } from '@angular/core/testing';
import { AppChild } from './child';

describe('Child', () => {
  it('should create the child', async () => {
    TestBed.configureTestingModule({
      imports: [AppChild],
    });
    const fixture = TestBed.createComponent(AppChild);
    await fixture.whenStable();
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
