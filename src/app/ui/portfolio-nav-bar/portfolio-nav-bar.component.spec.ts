import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioNavBarComponent } from './portfolio-nav-bar.component';

describe('PortfolioNavBarComponent', () => {
  let component: PortfolioNavBarComponent;
  let fixture: ComponentFixture<PortfolioNavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioNavBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
