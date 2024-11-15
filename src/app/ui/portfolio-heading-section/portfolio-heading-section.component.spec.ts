import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioHeadingSectionComponent } from './portfolio-heading-section.component';

describe('PortfolioHeadingSectionComponent', () => {
  let component: PortfolioHeadingSectionComponent;
  let fixture: ComponentFixture<PortfolioHeadingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioHeadingSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioHeadingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
