import { Component } from '@angular/core';
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { DescriptionComponent } from "../description/description.component";
import { CardsComponent } from "../../ui/cards/cards.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CarouselComponent, DescriptionComponent, CardsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  cardList=[
    {
      id:1,
      title:"Thiruvanathapuram",
      imageLink:"../../images/trivandrum.jpg",
      cardText:"Thiruvananthapuram District is the southernmost district in the Indian state of Kerala. Thiruvananthapuram District is the ",
    },
    {
      id:2,
      title:"Kollam",
      imageLink:"../../images/kollam.jpg",
      cardText:"Kollam district, (formerly Quilon district) is one of 14 districts of the state of Kerala, India. Kollam district, (formerly Quilon district)",
    },
    {
      id:3,
      title:"Pathanamthitta",
      imageLink:"../../images/pathanamthitta.jpg",
      cardText:"Pathanamthitta District, is one of the 14 districts in the Indian state of Kerala. Pathanamthitta District, is one of the 14 districts",
    },
    {
      id:4,
      title:"Alappuzha",
      imageLink:"../../images/alappuzha.jpg",
      cardText:"Alappuzha was formed as Alleppey district on 17 August 1957, the name of the district being changed to Alappuzha in 1990.",
    },
    {
      id:5,
      title:"Kottayam",
      imageLink:"../../images/kottayam.jpg",
      cardText:"Kottayam comprises six municipal towns: Kottayam, Changanassery, Pala, Erattupetta, Ettumanoor, and Vaikom. ",
    },
    {
      id:6,
      title:"Idukki",
      imageLink:"../../images/idukki.jpg",
      cardText:"Idukki is the largest district in Kerala and lies amid the Cardamom Hills of Western Ghats in Kerala. Idukki is the largest district in Kerala",
    },
    {
      id:7,
      title:"Ernakulam",
      imageLink:"../../images/ernakulam.jpg",
      cardText:"Ernakulam is situated in the central part of the state, spans an area of about 2,924 square kilometres (1,129 sq mi). ",
    },
    {
      id:8,
      title:"Thrissur",
      imageLink:"../../images/thrissur.jpg",
      cardText:"Thrissur is situated in the central region of the state. Thrissur is situated in the central region of the state.  ",
    },
    {
      id:9,
      title:"Palakkad",
      imageLink:"../../images/palakkad.jpg",
      cardText:"Palakkad was carved out of the southeastern region of the former Malabar District on January first 1957. ",
    },
    {
      id:10,
      title:"Malappuram",
      imageLink:"../../images/malappuram.jpg",
      cardText:"Malappuram, is the most populous district of Kerala, Malappuram is home to around 13% of the total population of the state. ",
    },
    {
      id:11,
      title:"Kozhikode",
      imageLink:"../../images/kozhikode.jpg",
      cardText:"Kozhikode is the largest city in the erstwhile Malabar District and acted as its headquarters during British Raj. ",
    },
    {
      id:12,
      title:"Wayanad",
      imageLink:"../../images/wayanad.jpg",
      cardText:"Wayanad is a district in the north-east of the Indian state of Kerala, with its administrative headquarters at the municipality of Kalpetta.",
    },
    {
      id:13,
      title:"Kannur",
      imageLink:"../../images/kannur.jpg",
      cardText:"Kannur is the sixth-most urbanised district in Kerala, with more than 50% of its residents living in urban areas. ",
    },
    {
      id:14,
      title:"Kasargod",
      imageLink:"../../images/kasargod.jpg",
      cardText:"Kasaragod is the northernmost district of Kerala and is also known as Saptha Bhasha Sangama Bhoomi (The place where Seven languages)"
    },
  ];

  CarouselList=[
    {
      id:0,
      imageLink: "../../images/Media (17).jpg"
    },

    {
      id:2,
      imageLink: "../../images/Media (19).jpg"
    },

    {
      id:3,
      imageLink: "../../images/Media (20).jpg"
    }
  ]
}
