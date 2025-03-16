import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComingSoonComponent } from './layout/coming-soon/coming-soon.component';
import { LayoutModule } from './layout/layout.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[ComingSoonComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'newangular';
}
