import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-second-content',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './second-content.component.html',
  styleUrl: './second-content.component.scss',
})
export class SecondContentComponent {
  images: string[] = [
    './assets/icons/caffenio.webp',
    './assets/icons/optinum.webp',
    './assets/icons/laruina.webp',
    './assets/icons/saving.webp',
  ];
}
