import { Gallery, TemplePage , TemplePage2} from "@/components";
import Image from "next/image";
export default function Home() {
  return (
    <main className="w-screen">
      <Gallery/>
      <TemplePage num={1} name='Wat Phra That Doi Suthep' district="Doi Suthep" img={'/Images/temp1.webp'} description="Wat Phra That Doi Suthep (widely known as just Wat Doi Suthep) holds the title of the most-visited, most famous, and most highly revered temple in Chiang Mai. The journey up the winding mountain road to the entrance is an experience in itself, whether you’re doing it on a rented scooter, as part of a private excursion or sitting in a packed-out songthaew with the locals. The final leg of the journey requires you to climb 309 steps up to reach the 600-year-old golden chedi at the top, which towers above the surrounding temple building, the monks’ living quarters and the city of Chiang Mai."/>
      <TemplePage2 num={2} name='Wat Chedi Luang' district="Old City" img={'/Images/temp2.webp'} description='Wat Chedi Luang is conveniently located right in the middle of the Old City, walking distance from many of most popular hotels and markets. Luang translates in the old Lanna language to something like "very big", and the enormous crumbling central structure certainly lives up to its name. The main chedi is 80 metres tall, making it the highest point in Chiang Mai’s Old City

The temple complex dates all the way back to 1385, but has had various additions, re-builds and revamps since. It was once home to the highly-revered Emerald Buddha, which now takes pride of place in Bangkok’s Grand Palace.'/>
    </main>
  );
}
