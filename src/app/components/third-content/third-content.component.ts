import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Card {
  icon: string;
  title: string;
  text: string;
  url: string;
}

@Component({
  selector: 'app-third-content',
  standalone: true,
  imports: [NgTemplateOutlet, NgbCarouselModule],
  templateUrl: './third-content.component.html',
  styleUrl: './third-content.component.scss',
})
export class ThirdContentComponent {
  cards: Card[] = [
    {
      icon: './assets/images/innovative.webp',
      title: 'Eficiencia Innovadora',
      text: 'Nuestra plataforma revoluciona la gestión energética, ofreciendo soluciones personalizadas para potenciar tu negocio hacia el éxito.',
      url: '',
    },
    {
      icon: './assets/images/strategy.webp',
      title: 'Decisiones Estratégicas',
      text: 'Con datos precisos en tiempo real, toma decisiones informadas que optimizan tus operaciones y aumentan tu rentabilidad.',
      url: '',
    },
    {
      icon: './assets/images/corporate.webp',
      title: 'Sostenibilidad Empresarial',
      text: 'Enfocados en un futuro sostenible, Actus ELENA te ayuda a reducir tu huella ambiental y contribuir al cambio global.',
      url: '',
    },
  ];
}
