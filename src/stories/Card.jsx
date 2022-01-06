import React from "react";
import "./Card.css";
const Card = () =>(
    
    <div class="w-1/6  flex flex-col  bg-white ">
        <div class="h-36 flex flex-col items-center justify-center bg-blue-900 text-white font-medium  rounded-t-xl ">
            <h2 class="text-xl md:text-lg">STANDARD</h2>
            <h1 class="text-2xl md:text-xl">Rp 2,000,000</h1>

        </div>

        <div class=" flex flex-col text-xl md:text-lg shadow-xl h-auto ">
            <div class="   px-5 space-y-3 h-auto text-2xl md:text-sm pt-5 pb-10">
                <p class="flex items-center"><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" width="20"/>Indonesian Legal Brief
                    (ILB)</p>
                <p class="flex items-center"><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" width="20"/> Daily Updates</p>
                <p class="flex items-center"><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" width="20"/>Pusat Data Peraturan & Putusan Pengadilan</p>
                <p class="flex items-center"><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" width="20"/>Bantuan Layanan Pencarian Peraturan</p>
                <p class="flex items-center"><img src="https://img.icons8.com/emoji/48/000000/check-mark-emoji.png" width="20"/>Daftar Peraturan Perundang-undangan Terbaru</p>
            </div>
            <div class="w-full h-auto flex items-center justify-center ">
                <button
                    class="w-56 md:w-40 h-16 md:h-10 rounded-lg  bg-yellow-400 font-bold  ">BERLANGGANAN</button>

            </div>
        </div>
    </div>

)

export default Card;