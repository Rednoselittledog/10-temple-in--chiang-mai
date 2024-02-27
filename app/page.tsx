import {
  Gallery,
  TemplePage,
  TemplePage2,
  TemplePage3,
  TemplePage4,
} from "@/components";
import Image from "next/image";
import data from "@/data.json";
export default function Home() {
  let temple_data = data.data;
  return (
    <main className="w-screen">
      
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

      <TemplePage4
        num={Number(temple_data[4].num)}
        name={String(temple_data[4].name)}
        district={String(temple_data[4].district)}
        img={String(temple_data[4].img)}
        description={String(temple_data[4].description)}
      />

      <TemplePage4
        num={Number(temple_data[5].num)}
        name={String(temple_data[5].name)}
        district={String(temple_data[5].district)}
        img={String(temple_data[5].img)}
        description={String(temple_data[5].description)}
      />

      <TemplePage4
        num={Number(temple_data[6].num)}
        name={String(temple_data[6].name)}
        district={String(temple_data[6].district)}
        img={String(temple_data[6].img)}
        description={String(temple_data[6].description)}
      />

      <TemplePage4
        num={Number(temple_data[7].num)}
        name={String(temple_data[7].name)}
        district={String(temple_data[7].district)}
        img={String(temple_data[7].img)}
        description={String(temple_data[7].description)}
      />

      <TemplePage4
        num={Number(temple_data[8].num)}
        name={String(temple_data[8].name)}
        district={String(temple_data[8].district)}
        img={String(temple_data[8].img)}
        description={String(temple_data[8].description)}
      />

      <TemplePage4
        num={Number(temple_data[9].num)}
        name={String(temple_data[9].name)}
        district={String(temple_data[9].district)}
        img={String(temple_data[9].img)}
        description={String(temple_data[9].description)}
      />

      <TemplePage4
        num={Number(temple_data[10].num)}
        name={String(temple_data[10].name)}
        district={String(temple_data[10].district)}
        img={String(temple_data[10].img)}
        description={String(temple_data[10].description)}
      />
      
      <Gallery />
    </main>
  );
}
