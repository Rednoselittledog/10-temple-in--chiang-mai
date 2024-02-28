import {
  Gallery,
  Hero,
  TemplePage,
  TemplePage2,
  TemplePage3,
  TemplePage4,
} from "@/components";
import Image from "next/image";
import data from "@/data.json";
import Footer from "@/components/Footer";
export default function Home() {
  let temple_data = data.data;
  return (
    <main className="w-screen ">
        <Hero/>
      
      {temple_data.map((item:any,index:any)=>{
        return(
          <li key={index}> 
            <TemplePage2
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
      <Footer/>
    </main>
  );
}
