import { Component, Input } from '@angular/core';
import { academics } from '../../interface/interface';

@Component({
  selector: 'app-portfolio-cards',
  standalone: true,
  imports: [],
  templateUrl: './portfolio-cards.component.html',
  styleUrl: './portfolio-cards.component.scss'
})
export class PortfolioCardsComponent {
  @Input() data:academics={
    id:0,
    imageLink:'',
    year:0,
    schoolname:''
  }
}
