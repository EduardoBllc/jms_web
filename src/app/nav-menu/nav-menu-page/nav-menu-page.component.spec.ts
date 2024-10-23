import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavMenuPageComponent } from './nav-menu-page.component';

describe('NavMenuPageComponent', () => {
  let component: NavMenuPageComponent;
  let fixture: ComponentFixture<NavMenuPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavMenuPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavMenuPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
