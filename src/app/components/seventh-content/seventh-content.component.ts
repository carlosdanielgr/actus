import { Component, Input } from '@angular/core';
import { CardCarousel } from '../card-carousel/card-carousel.component';

@Component({
  selector: 'app-seventh-content',
  standalone: true,
  imports: [],
  templateUrl: './seventh-content.component.html',
  styleUrl: './seventh-content.component.scss',
})
export class SeventhContentComponent {
  @Input() currentCard: CardCarousel = {} as CardCarousel;
}
