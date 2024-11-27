import { Component } from '@angular/core';
import { PortfolioNavBarComponent } from "../../ui/portfolio-nav-bar/portfolio-nav-bar.component";
import { PortfolioHeadingSectionComponent } from "../../ui/portfolio-heading-section/portfolio-heading-section.component";
import { PortfolioCardsComponent } from '../../ui/portfolio-cards/portfolio-cards.component';
import { PortfolioDescriptionComponent } from "../portfolio-description/portfolio-description.component";
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-thirdpage',
  standalone: true,
  imports: [PortfolioNavBarComponent, PortfolioHeadingSectionComponent, PortfolioCardsComponent, PortfolioDescriptionComponent, NgOptimizedImage],
  templateUrl: './thirdpage.component.html',
  styleUrl: './thirdpage.component.scss'
})
export class ThirdpageComponent {
  collegeList=[
    {
      id:1,
      imageLink:"../../images/portfolio/download (2) 1.png",
      year:2023,
      schoolname:"Government Polytechnic College Nedumangad"
    },
    {
      id:2,
      imageLink:"../../images/portfolio/download (1) 1.png",
      year:2020,
      schoolname:"SNVHSS Anad"
    },
    {
      id:3,
      imageLink:"../../images/portfolio/download 1.png",
      year:2018,
      schoolname:"Durga Higher Secondary School Kanhangad"
    },
  ]
}
