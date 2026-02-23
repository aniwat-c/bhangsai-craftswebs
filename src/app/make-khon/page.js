'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';

export default function KhonPage() {
  // สำหรับส่วน Interactive Anatomy ที่เพิ่มเข้ามา
  const [activeInfo, setActiveInfo] = useState(null);
  const hotspots = [
    { id: 1, top: '45%', left: '40%', title: 'ตาจระเข้', desc: 'ลักษณะดวงตาที่เรียวยาว ดูดุดันแต่ทรงอำนาจ มักใช้กับตัวยักษ์สำคัญ' },
    { id: 2, top: '68%', left: '50%', title: 'ปากขบ', desc: 'การปิดปากสนิทแสดงถึงความโกรธแค้นหรือการสะกดพลังอำนาจ' },
    { id: 3, top: '20%', left: '52%', title: 'ยอดชัย', desc: 'ส่วนบนสุดที่ประดับกระจกเกรียบและทองคำเปลว สะท้อนถึงยศถาบรรดาศักดิ์' },
  ];

  const khonCategories = [
    {
      id: "01",
      name: "พระ (Heroic Characters)",
      desc: "ใบหน้าสงบนิ่ง สีขาวหรือสีทอง บ่งบอกถึงบารมีและความเป็นสุภาพบุรุษ",
      image: "/img/khon-phra.jpg"
    },
    {
      id: "02",
      name: "ยักษ์ (Demons)",
      desc: "เขี้ยวโง้ง แววตาดุดัน แฝงด้วยพละกำลังและความน่าเกรงขาม",
      image: "/img/khon-yak.jpg"
    },
    {
      id: "03",
      name: "ลิง (Simians)",
      desc: "ความคล่องแคล่วว่องไว สีสันสดใสตามบุคลิกของทหารเอก",
      image: "/img/khon-monkey.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* 1. Hero Section (เนื้อหาเดิมของคุณ) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/img/khon-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F2ED]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full">
          <span className="text-[#C29958] font-bold tracking-[0.5em] uppercase text-sm mb-6 block drop-shadow-lg">
            Masterpiece of Thailand
          </span>
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-8 leading-[0.9] drop-shadow-2xl">
            หัวโขน <br /> 
            <span className="italic text-[#C29958]">นาฏศิลป์แห่งไฟ</span>
          </h1>
          <p className="text-stone-300 max-w-2xl text-xl md:text-2xl leading-relaxed font-light">
            สัมผัสจิตวิญญาณแห่งช่างศิลป์ไทย ผ่านหน้ากากอันวิจิตรตระการตา 
            ที่รวมศาสตร์และศิลป์ชั้นสูงไว้ในหนึ่งเดียว
          </p>
        </div>
      </section>

      {/* 2. Craftsmanship Section (เนื้อหาเดิมของคุณ) */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 relative group">
            <div className="aspect-square bg-stone-200 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src="/img/khon-detail.jpg" 
                alt="Crafting detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full border border-[#C29958]/20 scale-110 group-hover:scale-125 transition-transform duration-1000 z-0"></div>
            <div className="absolute inset-0 rounded-full border border-[#C29958]/10 scale-120 group-hover:scale-135 transition-transform duration-1000 z-0"></div>
          </div>
          
          <div className="flex-1 space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">ความลับที่ซ่อนอยู่ใน <br /><span className="text-[#C29958]">ความประณีต</span></h2>
            <p className="text-[#5A524D] text-xl leading-relaxed">
              งานหัวโขนคือการควบคุมธาตุทั้งสี่ ดิน น้ำ ลม และไฟ ให้สอดประสานกัน 
              ทุกเส้นสายลายไทยที่ปรากฏ เกิดจากความอดทนและสมาธิขั้นสูงของช่างศิลป์
            </p>
            <div className="grid grid-cols-2 gap-10 pt-4">
              <div className="border-l-4 border-[#C29958] pl-6 space-y-2">
                <h4 className="text-2xl font-bold text-[#C29958]">ทองคำเปลว</h4>
                <p className="text-sm text-[#8C837D] uppercase tracking-widest">Pure Gold Leaf</p>
              </div>
              <div className="border-l-4 border-[#C29958] pl-6 space-y-2">
                <h4 className="text-2xl font-bold text-[#C29958]">ลงรักปิดทอง</h4>
                <p className="text-sm text-[#8C837D] uppercase tracking-widest">Traditional Lacquer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 2.1 Behind The Mask: เพิ่มข้อมูลวัสดุหายาก */}
      <section className="py-24 bg-[#FAF9F6] border-y border-[#C29958]/10">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div>
              <h3 className="text-3xl font-serif mb-6">ชีวิตหลังหน้ากาก</h3>
              <p className="text-[#5A524D]">เบื้องหลังความหรูหรา คือความยากลำบากในการเฟ้นหาและปรุงวัสดุจากธรรมชาติ</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#C29958]">
              <h4 className="font-bold mb-3 text-[#C29958]">กระดาษข่อย & ชันไม้</h4>
              <p className="text-sm text-[#8C837D]">โครงสร้างที่แข็งแกร่งนับร้อยปี เกิดจากการพอกกระดาษข่อยทีละชั้น ผสานกับน้ำชันที่เคี่ยวจนได้ที่</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-[#C29958]">
              <h4 className="font-bold mb-3 text-[#C29958]">รักสมุก</h4>
              <p className="text-sm text-[#8C837D]">การลงรักจากยางไม้ธรรมชาติ ผสมผงถ่านละเอียด เพื่อสร้างผิวสัมผัสที่เรียบเนียนดุจผิวมนุษย์</p>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 2.2 Interactive Anatomy: จุดกดเรียนรู้ส่วนประกอบ */}
      <section className="py-32 bg-[#332D29] text-white">
        <div className="max-w-[1400px] mx-auto px-8">
          <h2 className="text-4xl font-serif text-center mb-16 italic text-[#C29958]">สัญลักษณ์ที่ซ่อนอยู่</h2>
          <div className="relative max-w-2xl mx-auto">
             <img src="/img/khon-anatomy.jpg" alt="Anatomy" className="w-full rounded-3xl opacity-80" />
             {hotspots.map((spot) => (
               <div key={spot.id} style={{ top: spot.top, left: spot.left }} className="absolute">
                 <button 
                   onMouseEnter={() => setActiveInfo(spot)}
                   className="w-6 h-6 rounded-full bg-[#C29958] border-2 border-white animate-bounce"
                 />
                 {activeInfo?.id === spot.id && (
                   <div className="absolute top-8 left-0 w-48 bg-white p-4 rounded-xl shadow-xl text-[#332D29] z-20">
                     <p className="font-bold text-xs text-[#C29958]">{spot.title}</p>
                     <p className="text-[10px] leading-tight">{spot.desc}</p>
                   </div>
                 )}
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. Category Grid (เนื้อหาเดิมของคุณ) */}
      <section className="bg-[#FAF9F6] py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-serif mb-4">ประเภทของหัวโขน</h2>
              <p className="text-[#C29958] font-medium uppercase tracking-widest">Our Heritage Categories</p>
            </div>
            <div className="h-[1px] flex-1 bg-stone-300 mx-10 mb-4 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {khonCategories.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative h-[600px] w-full rounded-[30px] overflow-hidden mb-8 shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#332D29]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-[#C29958] font-bold mb-2 uppercase text-xs tracking-tighter">Category {item.id}</p>
                    <h3 className="text-3xl font-serif">{item.name}</h3>
                  </div>
                </div>
                <p className="text-[#5A524D] text-lg px-2 group-hover:text-[#332D29] transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 3.1 The Master’s Profile: จิตวิญญาณช่างศิลป์ */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16 border-t border-[#C29958]/10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3">
            <img src="/img/master-artisan.jpg" alt="Master" className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-xl" />
          </div>
          <div className="flex-1 space-y-6">
            <span className="text-[#C29958] font-bold uppercase text-xs tracking-widest">Master Artisan</span>
            <h2 className="text-4xl font-serif italic">"หน้าโขนมีชีวิต... ครูอยู่ในนั้น"</h2>
            <p className="text-[#5A524D] leading-relaxed">ถ่ายทอดเรื่องราวผ่านปลายพู่กันและแผ่นทอง โดยครูช่างผู้สืบทอดวิชามากกว่า 3 ทศวรรษ เพื่อให้ศิลปะชั้นสูงนี้ยังคงโลดแล่นในใจคนรุ่นหลัง</p>
          </div>
        </div>
      </section>

      {/* 4. CTA Section (เนื้อหาเดิมของคุณ) */}
      <section className="py-40 text-center bg-[#F5F2ED] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-10 italic text-[#C29958]">"ศิลปะที่สวมใส่ได้ จิตวิญญาณที่สัมผัสได้"</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button text="ติดต่อชมงานศิลป์" onClick={() => {}} />
            <Link href="/" className="px-12 py-4 bg-[#332D29] text-white rounded-full font-bold uppercase text-sm tracking-[0.2em] hover:bg-[#C29958] transition-all shadow-2xl">
              กลับหน้าหลัก
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-[#C29958] opacity-[0.05] select-none">KHON</div>
      </section>

    </div>
  );
}