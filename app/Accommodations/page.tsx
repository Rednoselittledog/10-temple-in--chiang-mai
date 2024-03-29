import {
  AccommodationPage,
    Gallery,
    NavbarStatic,
    TemplePage5
  } from "@/components";
  import Image from "next/image";
  import data from "@/data_accomodation.json";
  import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
  export default function Home() {
    let accommodation_data = data.data;
    return (
      <main className="w-screen overflow-clip">
        <div
        className="w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color overflow-auto"
      >
        <NavbarStatic state={4}/>
      </div>
        
        {accommodation_data.map((item:any,index:any)=>{
          return(
            <li key={index}> 
              <AccommodationPage
              num={Number(item.num)}
              name={String(item.name)}
              temple_name={String(item.temple_name)}
              district={String(item.district)}
              img={String(item.img)}
              description={String(item.description)}
              url={String(item.link)}
              />
            </li>
            )
        })}
        <Gallery />
        {/* <Footer/> */}
      </main>
    );
  }
  