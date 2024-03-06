import {
    Gallery,
    Hero,
    NavbarStatic,
    TemplePage5,
    TransportationPage
  } from "@/components";
  import Image from "next/image";
  import data from "@/data_transportation.json";
  import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
  export default function Home() {
    let transportation_data = data.data;
    return (
      <main className="w-screen overflow-clip">
        <div
        className="w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color overflow-auto"
      >
        <NavbarStatic state={2}/>
      </div>
        
        {transportation_data.map((item:any,index:any)=>{
          return(
            <li key={index}> 
              <TransportationPage
              num={Number(item.num)}
              from={String(item.from)}
              to={String(item.to)}
              from_location={String(item.from_location)}
              to_location={String(item.to_location)}
              />
            </li>
            )
        })}
        <Gallery />
        <Footer/>
      </main>
    );
  }
  