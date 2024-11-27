import { LoginComponent } from './pages/login/login.component';
import { PortfolioCardsComponent } from './ui/portfolio-cards/portfolio-cards.component';
import { Component, Type } from '@angular/core';
import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { ProductIndividualComponent } from './pages/product-individual/product-individual.component';
import { roleGuard } from './role.guard';

export const routes: Routes = [
  {
    path:"", component:HomepageComponent, canActivate:[roleGuard]
  },
  {
    path:"du-section",
    loadComponent: () =>
      import('./pages/secondpage/secondpage.component').then((m) => m.SecondpageComponent)
  },
  {
    path:"portfolio", loadComponent: () =>
      import('./pages/thirdpage/thirdpage.component').then((m) => m.ThirdpageComponent)
  },
  {
    path:"products", loadComponent: () =>
      import('./pages/products-page/products-page.component').then((m) => m.ProductsPageComponent)
  },
  {
    path:"product/:id", loadComponent: () =>
      import('./pages/product-individual/product-individual.component').then((m) => m.ProductIndividualComponent)
  },
  {
    path:"login", loadComponent: () =>
      import('./pages/login/login.component').then((m) => m.LoginComponent)
  }
];

