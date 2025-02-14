import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreeComponent } from './degree.component';

describe('DegreeComponent', () => {
  let component: DegreeComponent;
  let fixture: ComponentFixture<DegreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DegreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
