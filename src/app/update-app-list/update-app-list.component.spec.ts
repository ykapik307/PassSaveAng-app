import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAppListComponent } from './update-app-list.component';

describe('UpdateAppListComponent', () => {
  let component: UpdateAppListComponent;
  let fixture: ComponentFixture<UpdateAppListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAppListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAppListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
