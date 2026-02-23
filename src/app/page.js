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
      
      {/* 1. Hero Section */}
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

      {/* [NEW] 2. The Visionary Quote Section - สร้างความศรัทธา */}
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
        {/* ลายไทยจางๆ ด้านหลัง */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[30vw] opacity-[0.03] pointer-events-none font-serif">
          THAI
        </div>
      </section>

      {/* 3. Showcase Section */}
      <section className="bg-[#FAF9F6] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-12">Our Heritage Categories</h2>
          <div className="space-y-24">
            {highlights.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                <div className={`flex-1 w-full h-96 ${item.bgColor} rounded-3xl overflow-hidden relative shadow-sm border border-[#C29958]/10`}>
                  <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
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

      {/* [NEW] 4. Impact Numbers Section - ความน่าเชื่อถือ */}
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

      {/* [NEW] 5. Visitor Information & Map - ข้อมูลการเยี่ยมชม */}
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
               <Button text="Get Directions" onClick={() => window.open('https://maps.app.goo.gl/qMacF3brcL9Yn1EZ8', '_blank')} />
            </div>
          </div>
          
          {/* Mockup Map - คุณสามารถเปลี่ยนเป็น <iframe> จริงของ Google Maps ได้ที่นี่ */}
          {/* Google Maps Integration */}
          <div className="h-[400px] bg-[#E5E1DA] rounded-3xl overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3868.690499372899!2d100.5198725!3d14.154284699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e27b003d4ff85b%3A0x7352a68d6a487ccc!2z4Lio4Li54LiZ4Lii4LmM4Lio4Li04Lil4Lib4Liy4LiK4Li14Lie4Lia4Liy4LiH4LmE4LiX4Lij!5e0!3m2!1sth!2sth!4v1771849091961!5m2!1sth!2sth" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            >
            </iframe>
          </div>
        </div>
      </section>

    </div>
  );
}