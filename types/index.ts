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