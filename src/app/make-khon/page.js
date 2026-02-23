'use client';
import { useState } from 'react'; // เพิ่ม useState สำหรับ Hotspot
import Link from 'next/link';
import Button from '../components/Button';

export default function KhonPage() {
  // ข้อมูลสำหรับ Interactive Hotspots
  const [activeInfo, setActiveInfo] = useState(null);
  const hotspots = [
    { id: 1, top: '45%', left: '42%', title: 'ตาจระเข้', desc: 'ลักษณะดวงตาที่เรียวยาว ดูดุดันแต่ทรงอำนาจ มักใช้กับตัวยักษ์ที่มีความสำคัญ' },
    { id: 2, top: '65%', left: '50%', title: 'ปากขบ', desc: 'ลักษณะการปิดปากที่แสดงถึงความโกรธแค้นหรือการสะกดกลั้นพลังอำนาจ' },
    { id: 3, top: '25%', left: '55%', title: 'ยอดชัย', desc: 'ส่วนบนสุดของชฎาที่ประดับด้วยกระจกเกรียบและทองคำเปลว สะท้อนถึงยศถาบรรดาศักดิ์' },
  ];

  const khonCategories = [
    { id: "01", name: "พระ (Heroic Characters)", desc: "ใบหน้าสงบนิ่ง สีขาวหรือสีทอง บ่งบอกถึงบารมีและความเป็นสุภาพบุรุษ", image: "/img/khon-phra.jpg" },
    { id: "02", name: "ยักษ์ (Demons)", desc: "เขี้ยวโง้ง แววตาดุดัน แฝงด้วยพละกำลังและความน่าเกรงขาม", image: "/img/khon-yak.jpg" },
    { id: "03", name: "ลิง (Simians)", desc: "ความคล่องแคล่วว่องไว สีสันสดใสตามบุคลิกของทหารเอก", image: "/img/khon-monkey.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* 1. Hero Section (เหมือนเดิมแต่เปลี่ยนสีกรอบ) */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
            <source src="/img/khon-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F5F2ED]"></div>
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full text-white">
          <span className="text-[#C29958] font-bold tracking-[0.5em] uppercase text-sm mb-6 block">Masterpiece of Thailand</span>
          <h1 className="text-6xl md:text-[120px] font-serif mb-8 leading-[0.9]">หัวโขน <br /><span className="italic text-[#C29958]">นาฏศิลป์แห่งไฟ</span></h1>
        </div>
      </section>

      {/* [NEW] 2. Behind The Mask: หัตถศิลป์จากธรรมชาติ */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-5xl font-serif mb-8 leading-tight">หัตถศิลป์ <br /><span className="text-[#C29958]">จากธรรมชาติ</span></h2>
            <p className="text-[#5A524D] leading-relaxed mb-8">ความหรูหราของหัวโขนไม่ได้อยู่ที่ทองคำเท่านั้น แต่อยู่ที่การนำวัสดุพื้นบ้านมาผ่านกรรมวิธีที่ซับซ้อนและต้องใช้เวลาแรมปี</p>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/50 p-8 rounded-2xl border border-[#C29958]/10 hover:shadow-xl transition-all">
              <h4 className="text-[#C29958] font-serif text-2xl mb-4">กระดาษข่อย</h4>
              <p className="text-[#8C837D] text-sm leading-relaxed">หัวโขนที่ดีต้องขึ้นรูปด้วยกระดาษข่อยที่มีความเหนียวและทนทานนับร้อยปี ผสานด้วย "ชันจากไม้" เพื่อความแข็งแกร่ง</p>
            </div>
            <div className="bg-white/50 p-8 rounded-2xl border border-[#C29958]/10 hover:shadow-xl transition-all">
              <h4 className="text-[#C29958] font-serif text-2xl mb-4">รักและสมุก</h4>
              <p className="text-[#8C837D] text-sm leading-relaxed">การลงรักจากยางไม้ธรรมชาติ ผสมกับผงถ่าน (สมุก) เพื่ออุดรูพรุนและสร้างพื้นผิวที่เนียนกริบก่อนจะปิดทองคำแท้</p>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 3. Interactive Anatomy: กายวิภาคแห่งหัวโขน */}
      <section className="py-32 bg-[#332D29] text-[#F5F2ED] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-8 text-center mb-16">
          <h2 className="text-5xl font-serif mb-4 italic">The Secret Meaning</h2>
          <p className="text-[#C29958] tracking-widest uppercase text-xs">สัมผัสรายละเอียดที่ซ่อนอยู่ในใบหน้า</p>
        </div>
        <div className="relative max-w-4xl mx-auto group">
          {/* รูปภาพหลัก (เปลี่ยน Path เป็นรูปหัวโขนด้านหน้า) */}
          <img src="/img/khon-anatomy.jpg" alt="Khon Anatomy" className="w-full h-auto rounded-3xl grayscale group-hover:grayscale-0 transition-all duration-1000" />
          
          {/* Render Hotspots */}
          {hotspots.map((spot) => (
            <div key={spot.id} style={{ top: spot.top, left: spot.left }} className="absolute z-20">
              <button 
                onMouseEnter={() => setActiveInfo(spot)}
                className="w-8 h-8 rounded-full bg-[#C29958] border-2 border-white animate-pulse"
              ></button>
              {activeInfo?.id === spot.id && (
                <div className="absolute top-10 left-0 w-64 bg-white p-6 rounded-2xl shadow-2xl text-[#332D29] z-30 transition-all">
                  <h5 className="font-bold text-[#C29958] mb-2">{spot.title}</h5>
                  <p className="text-sm leading-relaxed">{spot.desc}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 4. Category Grid (เหมือนเดิม) */}
      <section className="bg-[#FAF9F6] py-32">
        {/* ... (Code เดิมของคุณ) ... */}
      </section>

      {/* [NEW] 5. The Master's Profile: จิตวิญญาณหลังชิ้นงาน */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16 border-t border-[#C29958]/10">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="aspect-[4/5] bg-stone-300 rounded-3xl overflow-hidden shadow-2xl">
              <img src="/img/master-artisan.jpg" alt="Master Artisan" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
          <div className="flex-1 space-y-8">
             <span className="text-[#C29958] font-bold tracking-[0.2em] uppercase text-xs">The Soul Behind The Mask</span>
             <h2 className="text-5xl font-serif">ครูช่างผู้อุทิศ <br />ลมหายใจให้งานศิลป์</h2>
             <p className="text-[#5A524D] text-lg italic">"หน้าโขนแต่ละหน้ามีชีวิต เราไม่ได้แค่สร้างหน้ากาก แต่เรากำลังเชิญครูมาประทับ เพื่อให้ศิษย์ได้นำไปร่ายรำอย่างภาคภูมิ"</p>
             <p className="text-[#8C837D] leading-relaxed">กว่า 40 ปีที่ครูได้บ่มเพาะวิชาช่างหัวโขน ถ่ายทอดจากรุ่นสู่รุ่นที่ศูนย์ศิลปาชีพ เพื่อไม่ให้ลายไทยที่วิจิตรนี้เลือนหายไปจากแผ่นดิน</p>
             <Link href="/contact" className="inline-block text-[#C29958] border-b-2 border-[#C29958] font-bold pb-2 hover:text-[#332D29] hover:border-[#332D29] transition-all">ทำความรู้จักเหล่าช่างศิลป์เพิ่มเติม</Link>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (เหมือนเดิม) */}
      <section className="py-40 text-center bg-[#F5F2ED] relative overflow-hidden">
        {/* ... (Code เดิมของคุณ) ... */}
      </section>

    </div>
  );
}