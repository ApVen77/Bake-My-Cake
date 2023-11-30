import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeBuilderComponent } from './cake-builder.component';

describe('CakeBuilderComponent', () => {
  let component: CakeBuilderComponent;
  let fixture: ComponentFixture<CakeBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CakeBuilderComponent]
    });
    fixture = TestBed.createComponent(CakeBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
