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
    './assets/icons/Logo_Caffenio.svg',
    './assets/icons/Logo_Optimum.svg',
    './assets/icons/Logo_Parque la ruina.svg',
    './assets/icons/Logo_SWEM.svg',
  ];
}
