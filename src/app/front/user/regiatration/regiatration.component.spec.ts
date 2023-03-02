import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegiatrationComponent } from './regiatration.component';

describe('RegiatrationComponent', () => {
  let component: RegiatrationComponent;
  let fixture: ComponentFixture<RegiatrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegiatrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegiatrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
