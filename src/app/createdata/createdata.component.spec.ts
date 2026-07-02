import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';

import { CreatedataComponent } from './createdata.component';

describe('CreatedataComponent', () => {
  let component: CreatedataComponent;
  let fixture: ComponentFixture<CreatedataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatedataComponent],
      providers: [
        { provide: MatDialogRef, useValue: { close: () => {} } }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
