// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home/fashion',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.routes').then((m) => m.homeRoutes)
  },
  {
    path: 'shop',
    loadChildren: () =>
      import('./shop/shop.routes').then((m) => m.shopRoutes)
  },
  {
    path: 'pages',
    loadChildren: () =>
      import('./pages/pages.routes').then((m) => m.pagesRoutes)
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];
