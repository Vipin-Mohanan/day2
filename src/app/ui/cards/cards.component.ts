import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { districts } from '../../interface/interface';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
 @Input() data:districts=
      {
      id:0,
      title:" ",
      imageLink:" ",
      cardText:" "
      }

 @Input() buttonTitle:string="Know more"
}
