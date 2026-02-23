'use client';
import Link from 'next/link';
import Button from './components/Button';

export default function Home() {
  const highlights = [
    {
      id: "01",
      name: "แผนกช่างประดิษฐ์เป่าแก้ว",
      title: "Thai Glass Blowing",
      desc: "สัมผัสเสน่ห์แห่งแก้วที่ถูกเป่าด้วยมือจากช่างฝีมือผู้ชำนาญการ",
      path: "/glass-blowing",
      imageUrl: "/img/glass-main.jpg",
      bgColor: "bg-[#F5F2ED]" 
    },
    {
      id: "02",
      name: "แผนกช่างประดิษฐ์หัวโขน",
      title: "Khon Mask Craft Department",
      desc: "การออกแบบหัวโขนโดยบูรณาการวัสดุธรรมชาติกับลวดลายไทยประยุกต์สมัยใหม่",
      path: "/make-khon",
      imageUrl: "/img/khon-main.jpg", 
      bgColor: "bg-[#F5F2ED]" 
    },
    {
      id: "03",
      name: "แผนกภาพวาดลายไทย",
      title: "Thai Pattern Painting Department",
      desc: "การผสมผสานวัสดุธรรมชาติเข้ากับลวดลายไทยประยุกต์ที่ร่วมสมัย",
      path: "/fine-arts",
      imageUrl: "/img/pattern-main.jpg", 
      bgColor: "bg-[#F5F2ED]" 
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29] font-sans">
      
      {/* 1. Hero Section (เดิม) */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C29958]/30 text-[#C29958] text-xs font-bold tracking-widest uppercase mb-6">
              Founded by HM Queen Sirikit
            </span>
            <h1 className="text-7xl md:text-8xl font-serif mb-8 leading-[0.9]">
              The Art of <br />
              <span className="italic text-[#C29958]">Giving.</span>
            </h1>
            <p className="text-lg text-[#5A524D] mb-10 max-w-md">
              สืบสานพระราชปณิธานผ่านงานศิลป์อันประณีต จากใจสู่ใจ เพื่อความยั่งยืนของชุมชนไทย
            </p>
            <Button text="Explore Collections" onClick={() => {}} />
          </div>
          
          <div className="relative h-[500px] bg-[#E5E1DA] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/hero-bg.jpg" 
                alt="Featured Work"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { 
                  e.target.src = "https://db.sac.or.th/museum/images/Museum/279/01-002.JPG"; 
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332D29]/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* [NEW] 2. The Origin: ประวัติความเป็นมา (เพิ่มเนื้อหาประวัติ) */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="text-5xl font-serif leading-tight">จุดกำเนิดแห่ง <br/><span className="text-[#C29958] italic">พระวิริยอุตสาหะ</span></h2>
              <div className="space-y-6 text-[#5A524D] text-lg leading-relaxed">
                <p>
                  ก่อตั้งขึ้นเมื่อวันที่ 7 ธันวาคม พ.ศ. 2523 โดยสมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง เพื่อขยายผลจาก "มูลนิธิส่งเสริมศิลปาชีพฯ"
                </p>
                <p className="border-l-4 border-[#C29958] pl-6 italic">
                  ทรงต้องการให้เกษตรกรมี "อาชีพเสริม" และอนุรักษ์ "งานช่างฝีมือไทย" ที่กำลังจะสูญหายไปให้คงอยู่สืบไปบนเนื้อที่กว่า 1,000 ไร่ ริมแม่น้ำเจ้าพระยา
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-64 bg-stone-200 rounded-2xl overflow-hidden">
                   <img src="/img/history-1.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Bangsai History" />
                </div>
                <div className="p-6 bg-[#F5F2ED] rounded-2xl">
                  <h4 className="font-bold text-[#C29958] mb-2">โรงเรียน & โรงงาน</h4>
                  <p className="text-sm">ฝึกอบรมช่างศิลป์กว่า 30 แผนก พร้อมสนับสนุนที่พักและเบี้ยเลี้ยง</p>
                </div>
              </div>
              <div className="space-y-4 pt-12">
                <div className="p-6 bg-[#332D29] text-white rounded-2xl">
                  <h4 className="font-bold text-[#C29958] mb-2">Masterpiece</h4>
                  <p className="text-sm">งานศิลปะระดับสากลที่ถูกนำไปประดับตกแต่งสถานที่สำคัญทั่วโลก</p>
                </div>
                <div className="h-64 bg-stone-200 rounded-2xl overflow-hidden">
                   <img src="/img/history-2.jpg" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Thai Craft" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Visionary Quote Section (เดิม) */}
      <section className="py-24 bg-[#332D29] text-[#F5F2ED] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="text-[#C29958] text-4xl mb-6 block font-serif">“</span>
          <h2 className="text-2xl md:text-3xl font-serif leading-relaxed mb-8 italic">
            ข้าพเจ้าภูมิใจเสมอมาว่าคนไทยมีสายเลือดของช่างฝีมืออยู่ทุกคน <br className="hidden md:block"/>
            ไม่ว่าจะเป็นชาวไร่ชาวนา หรืออาชีพใด...
          </h2>
          <p className="text-[#C29958] tracking-[0.2em] text-sm uppercase font-bold">
            พระราชดำรัส สมเด็จพระนางเจ้าสิริกิติ์ พระบรมราชินีนาถ พระบรมราชชนนีพันปีหลวง
          </p>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] opacity-[0.03] pointer-events-none font-serif">THAI</div>
      </section>

      {/* 4. Showcase Section (เดิม) */}
      <section className="bg-[#FAF9F6] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-12 italic border-b border-[#C29958]/20 pb-4">Our Heritage Categories</h2>
          <div className="space-y-24">
            {highlights.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className={`flex-1 w-full h-96 ${item.bgColor} rounded-3xl overflow-hidden relative shadow-sm border border-[#C29958]/10 group`}>
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 pointer-events-none grayscale">
                    {item.id === "01" ? "🔮" : item.id === "02" ? "🎭" : "🎨"}
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <span className="text-6xl font-serif text-[#C29958]/60">{item.id}</span>
                  <h3 className="text-3xl font-serif text-[#332D29]">{item.name}</h3>
                  <p className="text-[#C29958] font-bold text-xs uppercase tracking-widest">{item.title}</p>
                  <p className="text-[#5A524D] text-lg leading-relaxed">{item.desc}</p>
                  <Link href={item.path} className="inline-block text-[#C29958] font-bold border-b-2 border-[#C29958] pb-1 hover:text-[#332D29] hover:border-[#332D29] transition-colors">
                    Explore Department
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 5. Bangsai Highlights: จุดไฮไลต์ภายในศูนย์ (เวอร์ชันแสดงเนื้อหาค้างไว้) */}
      <section className="py-32 bg-[#F5F2ED]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4 italic text-[#C29958]">Bangsai Highlights</h2>
            <p className="text-[#5A524D] uppercase tracking-[0.3em] text-xs font-bold">สัมผัสความงามและวิถีชีวิตในพื้นที่จริง</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Highlight 1: ศาลาพระมิ่งขวัญ */}
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="/img/sala-pamingkhwan.jpg" 
                alt="ศาลาพระมิ่งขวัญ" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              {/* แผ่นสีเข้มด้านล่างสำหรับรองรับตัวอักษรให้ค้างไว้ */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#332D29] via-[#332D29]/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#C29958] text-xs font-bold tracking-[0.2em] mb-3 border-l-2 border-[#C29958] pl-3 uppercase">Architectural Icon</span>
                <h4 className="text-3xl font-serif text-white mb-4">ศาลาพระมิ่งขวัญ</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">
                  อาคารทรงไทยประยุกต์ 4 ชั้นที่สง่างามริมน้ำ เป็นศูนย์รวมงานหัตถกรรมชั้นครูและนิทรรศการผลงานมาสเตอร์พีซที่หาดูได้ยากจากฝีมือราษฎร
                </p>
                <div className="h-1 w-12 bg-[#C29958]/50"></div>
              </div>
            </div>

            {/* Highlight 2: หมู่บ้านอาชีพเกษตรกรรม */}
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="/img/village-life.jpg" 
                alt="หมู่บ้านอาชีพเกษตรกรรม" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332D29] via-[#332D29]/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#C29958] text-xs font-bold tracking-[0.2em] mb-3 border-l-2 border-[#C29958] pl-3 uppercase">Local Wisdom</span>
                <h4 className="text-3xl font-serif text-white mb-4">หมู่บ้านเกษตรกรรม</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">
                  ชมความงามของบ้านเรือนไทย 4 ภูมิภาคที่จำลองไว้อย่างสมบูรณ์ สัมผัสวิถีชีวิตและวัฒนธรรมท้องถิ่นที่เรียบง่ายแต่เปี่ยมด้วยเสน่ห์ทางการใช้ชีวิต
                </p>
                <div className="h-1 w-12 bg-[#C29958]/50"></div>
              </div>
            </div>

            {/* Highlight 3: สวนนก & อควาเรียม */}
            <div className="relative h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl group">
              <img 
                src="/img/nature-park.jpg" 
                alt="สวนนกและอควาเรียม" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#332D29] via-[#332D29]/40 to-transparent"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="text-[#C29958] text-xs font-bold tracking-[0.2em] mb-3 border-l-2 border-[#C29958] pl-3 uppercase">Nature & Life</span>
                <h4 className="text-3xl font-serif text-white mb-4">สวนนก & วังมัจฉา</h4>
                <p className="text-stone-300 text-sm leading-relaxed mb-4">
                  พักผ่อนหย่อนใจในสวนนกขนาดใหญ่และอุโมงค์ปลาน้ำจืด เรียนรู้ความหลากหลายทางชีวภาพริมแม่น้ำเจ้าพระยาที่เป็นแหล่งหล่อเลี้ยงชีวิต
                </p>
                <div className="h-1 w-12 bg-[#C29958]/50"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Impact Numbers Section (เดิม) */}
      <section className="py-24 max-w-7xl mx-auto px-6 border-y border-[#C29958]/20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <p className="text-4xl font-serif text-[#C29958] mb-2">500+</p>
            <p className="text-[#5A524D] text-sm uppercase tracking-widest">สร้างอาชีพให้ชุมชน</p>
          </div>
          <div>
            <p className="text-4xl font-serif text-[#C29958] mb-2">20+</p>
            <p className="text-[#5A524D] text-sm uppercase tracking-widest">ส่งออกงานศิลป์ทั่วโลก</p>
          </div>
          <div>
            <p className="text-4xl font-serif text-[#C29958] mb-2">40+</p>
            <p className="text-[#5A524D] text-sm uppercase tracking-widest">ปีแห่งการสืบสาน</p>
          </div>
          <div>
            <p className="text-4xl font-serif text-[#C29958] mb-2">100%</p>
            <p className="text-[#5A524D] text-sm uppercase tracking-widest">งานทำมือประณีตศิลป์</p>
          </div>
        </div>
      </section>

      {/* 7. Visitor Information & Map (เดิม) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-serif">Visit Our Centre</h2>
            <div className="space-y-4 text-[#5A524D]">
              <p className="flex items-start gap-4">
                <span className="text-[#C29958] font-bold">📍</span>
                ศูนย์ศิลปาชีพบางไทร เลขที่ 59 หมู่ 4 ต.ช้างใหญ่ อ.บางไทร จ.พระนครศรีอยุธยา
              </p>
              <p className="flex items-start gap-4">
                <span className="text-[#C29958] font-bold">⏰</span>
                เปิดทำการ: วันอังคาร - วันอาทิตย์ (09:00 - 16:00 น.) <br/> *ปิดทำการทุกวันจันทร์
              </p>
              <p className="flex items-start gap-4">
                <span className="text-[#C29958] font-bold">📞</span>
                ติดต่อสอบถาม: 035-366-252
              </p>
            </div>
            <div className="pt-4">
               <Button text="Get Directions" onClick={() => window.open('https://maps.google.com', '_blank')} />
            </div>
          </div>
          <div className="h-[400px] bg-[#E5E1DA] rounded-3xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700 border border-[#C29958]/10">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.717084534884!2d100.47355157584518!3d14.385750082260432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e20601f021f6a1%3A0xc47b97c83f98295b!2z4Lio4Li54LiZ4Lii4Liy4LiX4Li04Lie4Lit4Liy4LiK4Li14Lie4Liy4LiB4LmE4LiX4Lij!5e0!3m2!1sth!2sth!4v1710000000000!5m2!1sth!2sth" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
            ></iframe>
          </div>
        </div>
      </section>

    </div>
  );
}