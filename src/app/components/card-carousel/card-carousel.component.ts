import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

export interface CardCarousel {
  icon: string;
  title: string;
  text?: string;
  url?: string;
}

@Component({
  selector: 'app-card-carousel',
  standalone: true,
  imports: [NgTemplateOutlet, NgbCarouselModule],
  templateUrl: './card-carousel.component.html',
  styleUrl: './card-carousel.component.scss',
})
export class CardCarouselComponent {
  @Input() cards: CardCarousel[] = [];

  @Input() isclickable = false;

  @Output() clickEvent = new EventEmitter<CardCarousel>();

  currentCard: Partial<CardCarousel> = {};

  onClick(card: CardCarousel) {
    this.currentCard = card;
    this.clickEvent.emit(card);
  }
}
