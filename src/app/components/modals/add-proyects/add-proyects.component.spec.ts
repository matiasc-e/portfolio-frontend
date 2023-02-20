import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProyectsComponent } from './add-proyects.component';

describe('AddProyectsComponent', () => {
  let component: AddProyectsComponent;
  let fixture: ComponentFixture<AddProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
