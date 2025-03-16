import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'layout',
        loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule) // Lazy load the module
      },
];

