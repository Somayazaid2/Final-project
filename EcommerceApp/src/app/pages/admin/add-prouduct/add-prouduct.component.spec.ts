import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProuductComponent } from './add-prouduct.component';

describe('AddProuductComponent', () => {
  let component: AddProuductComponent;
  let fixture: ComponentFixture<AddProuductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProuductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProuductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
