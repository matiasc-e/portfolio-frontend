import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteProyectsComponent } from './delete-proyects.component';

describe('DeleteProyectsComponent', () => {
  let component: DeleteProyectsComponent;
  let fixture: ComponentFixture<DeleteProyectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteProyectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteProyectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
