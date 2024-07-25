import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlankSizeListComponent } from './plank-size-list.component';

describe('PlankSizeListComponent', () => {
  let component: PlankSizeListComponent;
  let fixture: ComponentFixture<PlankSizeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlankSizeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlankSizeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
