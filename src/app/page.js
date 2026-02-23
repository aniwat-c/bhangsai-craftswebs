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
      imageUrl: "/img/glass-main.jpg", // ตรวจสอบว่าในโฟลเดอร์ชื่อนี้และเป็น .jpg ตัวเล็ก
      bgColor: "bg-rose-50"
    },
    {
      id: "02",
      name: "แผนกช่างประดิษฐ์หัวโขน",
      title: "Khon Mask Craft Department",
      desc: "การออกแบบหัวโขนโดยบูรณาการวัสดุธรรมชาติกับลวดลายไทยประยุกต์สมัยใหม่",
      path: "/make-khon",
      imageUrl: "/img/khon-main.jpg", 
      bgColor: "bg-amber-50"
    },
    {
      id: "03",
      name: "แผนกภาพวาดลายไทย",
      title: "Thai Pattern Painting Department",
      desc: "การผสมผสานวัสดุธรรมชาติเข้ากับลวดลายไทยประยุกต์ที่ร่วมสมัย",
      path: "/fine-arts",
      imageUrl: "/img/pattern-main.jpg", 
      bgColor: "bg-stone-100"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAf7] text-slate-900 font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full border border-orange-200 text-orange-800 text-xs font-bold tracking-widest uppercase mb-6">
              Founded by HM Queen Sirikit
            </span>
            <h1 className="text-7xl md:text-8xl font-serif mb-8 leading-[0.9]">
              The Art of <br />
              <span className="italic text-orange-600">Giving.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-md">
              สืบสานพระราชปณิธานผ่านงานศิลป์อันประณีต จากใจสู่ใจ เพื่อความยั่งยืนของชุมชนไทย
            </p>
            <Button text="Explore Collections" onClick={() => {}} />
          </div>
          
          <div className="relative h-[500px] bg-stone-200 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/img/hero-bg.jpg" 
                alt="Featured Work"
                className="absolute inset-0 w-full h-full object-cover"
                // หากรูปในเครื่องโหลดไม่ได้ ให้ดึงรูปจากเว็บสำรองทันที
                onError={(e) => { 
                  e.target.src = "https://db.sac.or.th/museum/images/Museum/279/01-002.JPG"; 
                }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="bg-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-12">Our Heritage Categories</h2>
          <div className="space-y-24">
            {highlights.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                
                <div className={`flex-1 w-full h-96 ${item.bgColor} rounded-3xl overflow-hidden relative shadow-md`}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    // ถ้าหาไฟล์ไม่เจอ ให้แสดง Emoji แทนที่จะเป็นรูปแตก
                    onError={(e) => { 
                      e.target.className = "hidden"; 
                    }} 
                  />
                  {/* ตัวสำรองเมื่อไม่มีรูป */}
                  <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 pointer-events-none">
                    {item.id === "01" ? "🔮" : item.id === "02" ? "🎭" : "🎨"}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <span className="text-6xl font-serif text-slate-100">{item.id}</span>
                  <h3 className="text-3xl font-serif">{item.name}</h3>
                  <p className="text-orange-600 font-bold text-xs uppercase tracking-widest">{item.title}</p>
                  <p className="text-slate-600 text-lg leading-relaxed">{item.desc}</p>
                  <Link href={item.path} className="inline-block text-orange-700 font-bold border-b-2 border-orange-700 pb-1">
                    Explore Department
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}