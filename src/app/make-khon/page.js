'use client';
import Link from 'next/link';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* 1. Hero Section (เหมือนเดิม) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/img/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#F5F2ED]"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#C29958] font-bold tracking-[0.4em] uppercase text-sm mb-4 block">The Royal Arts and Crafts Center of Bangsai</span>
          <h1 className="text-6xl md:text-9xl font-serif text-white mb-8 leading-tight">
            ศิลปาชีพ <br /> <span className="italic text-[#C29958]">บางไทร</span>
          </h1>
          <p className="text-stone-300 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            สืบสานพระราชปณิธานแห่งความประณีต มรดกทางวัฒนธรรมที่ถูกถ่ายทอดผ่านจิตวิญญาณช่างศิลป์ไทย
          </p>
        </div>
      </section>

      {/* 2. The Visionary Quote (เหมือนเดิม) */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="w-16 h-1 bg-[#C29958] mx-auto"></div>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-snug text-[#332D29]">
            "ทรงต้องการให้เกษตรกรมีอาชีพเสริม เพื่ออนุรักษ์งานช่างฝีมือไทยที่กำลังจะสูญหายไปให้คงอยู่สืบไป"
          </h2>
          <p className="text-[#C29958] font-bold tracking-widest uppercase text-sm">— สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ —</p>
        </div>
      </section>

      {/* [NEW] 3. The Legacy: ประวัติความเป็นมา (แทรกใหม่เพื่อให้เว็บดูแน่นขึ้น) */}
      <section className="py-32 border-y border-[#C29958]/10 bg-white/30">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000">
                <img src="/img/history-bangsai.jpg" alt="ประวัติศูนย์ศิลปาชีพบางไทร" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-[#C29958] rounded-2xl flex flex-col justify-center items-center text-white shadow-xl">
                <span className="text-4xl font-serif font-bold">1,000</span>
                <span className="text-xs uppercase tracking-widest mt-2">กว่าหนึ่งพันไร่</span>
              </div>
            </div>
            <div className="space-y-8">
              <span className="text-[#C29958] font-bold tracking-[0.3em] uppercase text-sm">Our Origin</span>
              <h2 className="text-5xl font-serif leading-tight">จุดกำเนิดจาก <br/> <span className="text-[#C29958] italic">พระวิริยอุตสาหะ</span></h2>
              <p className="text-[#5A524D] text-lg leading-relaxed">
                ศูนย์ศิลปาชีพบางไทร ก่อตั้งขึ้นเมื่อวันที่ 7 ธันวาคม พ.ศ. 2523 ตั้งอยู่ริมแม่น้ำเจ้าพระยา จ.พระนครศรีอยุธยา เพื่อเป็น "โรงเรียน" และ "โรงงาน" ในเวลาเดียวกัน
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-sm border-t-2 border-[#C29958]">
                  <h4 className="font-bold text-[#332D29] mb-2">กว่า 30 แผนก</h4>
                  <p className="text-xs text-[#8C837D]">เปิดสอนศิลปะพื้นบ้าน ตั้งแต่งานจักสานจนถึงเครื่องเคลือบดินเผาชั้นสูง</p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-sm border-t-2 border-[#C29958]">
                  <h4 className="font-bold text-[#332D29] mb-2">งานมาสเตอร์พีซ</h4>
                  <p className="text-xs text-[#8C837D]">ผลิตภัณฑ์หลายชิ้นได้รับการยกย่องและนำไปประดับในสถานที่สำคัญทั่วโลก</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 4. Highlights Section: จุดสำคัญที่ไม่ควรพลาด (แทรกใหม่) */}
      <section className="py-32 bg-[#1E1B19] text-white">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 italic text-[#C29958]">Experience Bangsai</h2>
            <p className="text-stone-500 tracking-widest uppercase text-xs">จุดไฮไลต์สำคัญที่คุณจะได้สัมผัส</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Highlight Cards */}
            {[
              { title: "ศาลาพระมิ่งขวัญ", desc: "อาคารทรงไทยประยุกต์ ศูนย์รวมงานศิลป์ระดับมาสเตอร์พีซ", img: "/img/sala-pamingkhwan.jpg" },
              { title: "หมู่บ้านอาชีพเกษตรกรรม", desc: "จำลองวิถีชีวิตชาวไทยใน 4 ภูมิภาคอย่างสมจริง", img: "/img/village-life.jpg" },
              { title: "สถาบันสิริกิติ์", desc: "พื้นที่พักผ่อน สวนนก และสถานแสดงพันธุ์สัตว์น้ำริมแม่น้ำ", img: "/img/nature-park.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-3xl h-[450px]">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <h4 className="text-2xl font-serif mb-2 text-[#C29958]">{item.title}</h4>
                  <p className="text-stone-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our Heritage: ลิงก์ไปหน้าแผนกต่างๆ (เนื้อหาเดิม) */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16">
        <h2 className="text-4xl font-serif mb-16 border-b border-[#C29958]/20 pb-8">มรดกจาก <span className="text-[#C29958]">บางไทร</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* ข้อมูล 3 แผนกของคุณที่นี่ (เหมือนเดิม) */}
          <Link href="/khon-mask" className="group">
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
              <img src="/img/khon-main.jpg" alt="Khon Mask" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
            </div>
            <h3 className="text-2xl font-serif group-hover:text-[#C29958] transition-all">ช่างประดิษฐ์หัวโขน</h3>
            <p className="text-stone-500 mt-2">ประณีตหัตถศิลป์แห่งความศรัทธา</p>
          </Link>
          {/* ... เพิ่มแผนกอื่นๆ ที่นี่ ... */}
        </div>
      </section>

      {/* 6. Contact & Map Section (เนื้อหาเดิม) */}
      <section className="py-32 bg-white/50">
        <div className="max-w-[1400px] mx-auto px-8 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-8">
            <h3 className="text-4xl font-serif">แผนที่และการเดินทาง</h3>
            <p className="text-[#5A524D]">ศูนย์ศิลปาชีพบางไทร อ.บางไทร จ.พระนครศรีอยุธยา</p>
            {/* โค้ด iframe แผนที่ที่คุณแก้แล้ว */}
          </div>
        </div>
      </section>

    </div>
  );
}