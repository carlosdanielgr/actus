import { Component } from '@angular/core';

import { HeaderComponent } from './components/header/header.component';
import { FirstContentComponent } from './components/first-content/first-content.component';
import { SecondContentComponent } from './components/second-content/second-content.component';
import { ThirdContentComponent } from './components/third-content/third-content.component';
import { FourthContentComponent } from './components/fourth-content/fourth-content.component';
import { FifthContentComponent } from './components/fifth-content/fifth-content.component';
import { SixthContentComponent } from './components/sixth-content/sixth-content.component';
import { FormComponent } from './components/form/form.component';
import { EighthContentComponent } from './components/eighth-content/eighth-content.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    FirstContentComponent,
    SecondContentComponent,
    ThirdContentComponent,
    FourthContentComponent,
    FifthContentComponent,
    SixthContentComponent,
    FormComponent,
    EighthContentComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
