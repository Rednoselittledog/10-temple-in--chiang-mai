export interface GalleryItemProps{
    num:number,
    name : string, 
    img : string, 
    url : string
}

export interface TemplePageProps{
    num : number,
    name : string,
    district : string,
    img : string,
    description : string,
    url : string
}

export interface AccommodationPageProps{
    num : number,
    name : string,
    temple_name : string,
    district : string,
    img : string,
    description : string,
    url : string
}

export interface CarouselItemPropsForMap{
    item : any
}

export interface NavbarProps{
    transparent : boolean,
    current? : string
}

export interface NavbarStaticProps{
    state : number
}

export interface ActivityPageProps{
    num : number,
    name : string,
    img : string,
    activity : string
}

export interface TransportationPageProps{
    num:number,
    from:string,
    to:string,
    from_location:string,
    to_location:string
}

export interface DirectionMapProps{
    from:string,
    to:string,
}