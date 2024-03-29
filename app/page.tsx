import {
  Gallery,
  Hero,
  Hero2,
  Hero3,
  TemplePage,
  TemplePage2,
  TemplePage3,
  TemplePage4,
  TemplePage5,
  TemplePageMain
} from "@/components";
import Image from "next/image";
import data from "@/data.json";
import Footer from "@/components/Footer";
export default function Home() {
  let temple_data = data.data;
  return (
    <main className="w-screen overflow-clip">
        <Hero2/>
      
      {temple_data.map((item:any,index:any)=>{
        return(
          <li key={index}> 
            <TemplePageMain
            num={Number(item.num)}
            name={String(item.name)}
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
