import { Component } from '@angular/core';
import {
  CardCarousel,
  CardCarouselComponent,
} from '../card-carousel/card-carousel.component';
import { SeventhContentComponent } from '../seventh-content/seventh-content.component';

@Component({
  selector: 'app-sixth-content',
  standalone: true,
  imports: [CardCarouselComponent, SeventhContentComponent],
  templateUrl: './sixth-content.component.html',
  styleUrl: './sixth-content.component.scss',
})
export class SixthContentComponent {
  cards: CardCarousel[] = [
    {
      icon: './assets/images/agricul.webp',
      title: 'AGRO',
    },
    {
      icon: './assets/images/manufact.webp',
      title: 'MANUFACTURA',
    },
    {
      icon: './assets/images/hotel.webp',
      title: 'HOTELERÍA',
    },
  ];

  currentCard: CardCarousel = {} as CardCarousel;

  onSelectCard(card: CardCarousel) {
    this.currentCard = card;
  }
}
