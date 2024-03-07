import { ActivityPage, Gallery, NavbarStatic, TemplePage5 } from "@/components";
import Image from "next/image";
import data from "@/data.json";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Home() {
  let temple_data = data.data;
  return (
    <main className="w-screen overflow-clip">
    <div className="w-screen h-14 md:h-18 shadow-xl z-[100] fixed top-0 left-0 bg-main-color overflow-auto">
        <NavbarStatic state={5}/>
    </div>
      < div className={`flex flex-col items-center justify-center overflow-hidden w-screen h-screen bg-main-color `}>
            <div className="object-cover w-full h-full px-10 pt-24 pb-14 flex flex-col items-center">
                <div className="object-cover w-full h-full p-3 flex flex-col items-center justify-center rounded-xl shadow-lg shadow-gray-500 bg-sub-color">

                    <p className=" sm:title-text-main text-5xl text-title pt-1">about us</p>
                    <div className="py-3 flex flex-col justify-center items-center">
                    <p className="text-2xl font-bold">Members</p>
                    <p className="description-box text-lg md:text-xl ">Natthapha_kh65@live.rmutl.ac.th      Tel.0931426018{'\n'}
                                                            Phusanisa_pa65@live.rmutl.ac.th       Tel.0839688653{'\n'}
                                                            Siribongkot_yo65@live.rmutl.ac.th    Tel.0947106038{'\n'}
                                                            Thidapron_le65@live.rmutl.ac.th        Tel.0888044096</p>
                    </div>
                    <p className="text-xl font-bold ">Rajamangala University of Technology Lanna (RMUTL)</p>
                    <p className="">128 Huay Kaew Road, Muang District, Chaing Mai, Thailand 50300</p>

                </div>
            </div>
      </div>
    </main>
  );
}
