import { Routes } from "@angular/router";
import { authGuard } from "../shared/services/auth.guard";
import { ElectronicsComponent } from "./electronics/electronics.component";
import { FashionComponent } from "./fashion/fashion.component";
import { BeautyComponent } from "./beauty/beauty.component";
import { JewelryComponent } from "./jewelry/jewelry.component";

export const homeRoutes: Routes = [
    { path: 'electronic', canActivate: [authGuard], component: ElectronicsComponent, title: 'Home Electronic' },
    { path: 'fashion', canActivate: [authGuard], component: FashionComponent, title: 'Home Fashion' },
    { path: 'beauty', canActivate: [authGuard], component: BeautyComponent, title: 'Home Beautiy' },
    { path: 'jewelry', canActivate: [authGuard], component: JewelryComponent, title: 'Home Jewelry' },
    { path: '**', redirectTo: '/notfound', pathMatch: 'full' }
];