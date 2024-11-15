import { PortfolioCardsComponent } from './ui/portfolio-cards/portfolio-cards.component';
import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SecondpageComponent } from './pages/secondpage/secondpage.component';
import { ThirdpageComponent } from './pages/thirdpage/thirdpage.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';

export const routes: Routes = [
  {
    path:"", component:HomepageComponent
  },
  {
    path:"du-section", component:SecondpageComponent
  },
  {
    path:"portfolio", component:ThirdpageComponent
  },
  {
    path:"products", component:ProductsPageComponent
  },
  {
    path:"academics",component:PortfolioCardsComponent
  }

];
