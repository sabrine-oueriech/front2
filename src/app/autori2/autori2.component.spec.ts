import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Autori2Component } from './autori2.component';

describe('Autori2Component', () => {
  let component: Autori2Component;
  let fixture: ComponentFixture<Autori2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Autori2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Autori2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
