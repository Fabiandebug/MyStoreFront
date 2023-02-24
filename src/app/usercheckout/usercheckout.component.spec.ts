import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercheckoutComponent } from './usercheckout.component';

describe('UsercheckoutComponent', () => {
  let component: UsercheckoutComponent;
  let fixture: ComponentFixture<UsercheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsercheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
