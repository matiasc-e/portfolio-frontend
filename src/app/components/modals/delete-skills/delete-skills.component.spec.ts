import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteSkillsComponent } from './delete-skills.component';

describe('DeleteSkillsComponent', () => {
  let component: DeleteSkillsComponent;
  let fixture: ComponentFixture<DeleteSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
