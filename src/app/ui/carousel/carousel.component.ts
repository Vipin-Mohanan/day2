import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { carouselList } from '../../interface/interface';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
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
