export interface districts{
  id:number,
  title:string,
  imageLink:string,
  cardText:string
}

export interface carouselList{
  id:number,
  imageLink:string
}

export interface products{
  id:number,
  title: string,
  price: string,
  description: string,
  image: string,
  category:string
  rating:
      {
        rate: number,
        count: number
      }
}

export interface academics{
  id:number,
  imageLink:string,
  year:number,
  schoolname:string
}

export interface validation{
  email:string,
  password:string
}


