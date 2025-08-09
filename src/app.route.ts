// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NotFoundComponent } from './app/pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/fashion',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./app/home/home.route').then((m) => m.homeRoutes)
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./app/shop/shop.route').then((m) => m.shopRoutes)
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./app/pages/pages.route').then((m) => m.pagesRoutes)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
