import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuHeaderComponent } from './nav-menu-header.component';

describe('NavMenuHeaderComponent', () => {
  let component: NavMenuHeaderComponent;
  let fixture: ComponentFixture<NavMenuHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
