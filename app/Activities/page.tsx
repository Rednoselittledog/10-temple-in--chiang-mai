import {
    Gallery,
    Hero,
    NavbarStatic,
    TemplePage5
  } from "@/components";
  import Image from "next/image";
  import data from "@/data.json";
  import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
  export default function Home() {
    let temple_data = data.data;
    return (
      <main className="w-screen overflow-clip">
        <div
        className="w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color overflow-hidden sm:overflow-x-scroll"
      >
        <NavbarStatic state={3}/>
      </div>
        
        {temple_data.map((item:any,index:any)=>{
          return(
            <li key={index}> 
              <TemplePage5
              num={Number(item.num)}
              name={String(item.name)}
              district={String(item.district)}
              img={String(item.img)}
              description={String(item.activity)}
              url={String(item.link)}
              />
            </li>
            )
        })}
        <Gallery />
        <Footer/>
      </main>
    );
  }
  