import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/fashion',
        pathMatch: 'full'
    },

    { path: 'home', loadChildren: () => import('./home/home.route').then((m) => m.homeRoutes) },
    {
        path: 'shop', loadChildren: () => import('./shop/shop.route').then((m) => m.shopRoutes)
    },
    { path: 'pages', loadChildren: () => import('./pages/pages.route').then((m) => m.pagesRoutes) },

    {
        path: '**',
        component: NotFoundComponent
    },
];
