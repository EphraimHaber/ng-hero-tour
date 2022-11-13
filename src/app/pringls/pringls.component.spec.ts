import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PringlsComponent } from './pringls.component';

describe('PringlsComponent', () => {
  let component: PringlsComponent;
  let fixture: ComponentFixture<PringlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PringlsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PringlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
