import { Gallery, TemplePage , TemplePage2, TemplePage3, TemplePage4} from "@/components";
import Image from "next/image";
import data from "@/data.json"
export default function Home() {
  let temple_data = data.data
  return (
    
    <main className="w-screen">
      <Gallery/>
      <TemplePage 
        num={Number(temple_data[1].num)} 
        name={String(temple_data[1].name)} 
        district={String(temple_data[1].district)} 
        img={String(temple_data[1].img)} 
        description={String(temple_data[1].description)}
      />

      <TemplePage2 
        num={Number(temple_data[2].num)} 
        name={String(temple_data[2].name)} 
        district={String(temple_data[2].district)} 
        img={String(temple_data[2].img)} 
        description={String(temple_data[2].description)}
      />

      <TemplePage3 
        num={Number(temple_data[3].num)} 
        name={String(temple_data[3].name)} 
        district={String(temple_data[3].district)} 
        img={String(temple_data[3].img)} 
        description={String(temple_data[3].description)}
      />

      {/* <TemplePage4
        num={Number(temple_data[4].num)} 
        name={String(temple_data[4].name)} 
        district={String(temple_data[4].district)} 
        img={String(temple_data[4].img)} 
        description={String(temple_data[4].description)}
      /> */}
    </main>
  );
}
