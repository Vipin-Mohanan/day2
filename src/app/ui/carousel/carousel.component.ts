import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carouselList } from '../../interface/interface';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})

export class CarouselComponent {
@Input() carouseldata:carouselList=
  {
    id:0,
    imageLink: " "
  }

}
