import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-portfolio-heading-section',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-heading-section.component.html',
  styleUrl: './portfolio-heading-section.component.scss'
})
export class PortfolioHeadingSectionComponent {
  @Input() title:string=''
}
