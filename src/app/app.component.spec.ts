import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('My-App');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.logo').textContent).toContain('CoolApp');
  });

  describe('test sum() function', () => {
    it('should summarize positive numbers correctly', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const result = app.sum(5, 6);
      expect(result).toBe(11);
    });
    it('should summarize negative numbers correctly', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const result = app.sum(-12, -5);
      expect(result).toBe(-17);
    });
    it('should summarize negative numbers correctly', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const result = app.sum(105, 7);
      expect(result).toBe(112);
    });
  });

  describe('test substract() function', () => {
    it('should substract positive numbers correctly', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const result = app.substract(5, 6);
      expect(result).toBe(-1);
    });
    it('should substract negative numbers correctly', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const result = app.substract(-12, -5);
      expect(result).toBe(-7);
    });
  });
});
