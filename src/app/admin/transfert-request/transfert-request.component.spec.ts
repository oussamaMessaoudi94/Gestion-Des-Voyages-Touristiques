import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfertRequestComponent } from './transfert-request.component';

describe('TransfertRequestComponent', () => {
  let component: TransfertRequestComponent;
  let fixture: ComponentFixture<TransfertRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfertRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfertRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
