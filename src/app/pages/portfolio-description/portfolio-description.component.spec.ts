import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDescriptionComponent } from './portfolio-description.component';

describe('PortfolioDescriptionComponent', () => {
  let component: PortfolioDescriptionComponent;
  let fixture: ComponentFixture<PortfolioDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
