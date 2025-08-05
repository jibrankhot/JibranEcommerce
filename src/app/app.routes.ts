import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home/fashion',
        pathMatch: 'full'
    },

    { path: 'home', loadChildren: () => import('./home/home.route') },
    { path: 'shop', loadChildren: () => import('./shop/shop.route') },
    { path: 'pages', loadChildren: () => import('./pages/pages.route') },
    // ,
    // {
    //     path: 'shop',
    //     loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule)
    // },
    // {
    //     path: 'pages',
    //     loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
    // },
    {
        path: '**',
        component: NotFoundComponent
    },
];
