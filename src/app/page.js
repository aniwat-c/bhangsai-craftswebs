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
      // ปรับสีพื้นหลังการ์ดให้อุ่นขึ้นตามธีม
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
    // เปลี่ยนสีพื้นหลังหลักเป็น #F5F2ED และตัวอักษรเป็น #332D29
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29] font-sans">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* เปลี่ยนสีกรอบและตัวอักษรเป็นโทนทองหม่น #C29958 */}
            <span className="inline-block px-4 py-1.5 rounded-full border border-[#C29958]/30 text-[#C29958] text-xs font-bold tracking-widest uppercase mb-6">
              Founded by HM Queen Sirikit
            </span>
            <h1 className="text-7xl md:text-8xl font-serif mb-8 leading-[0.9]">
              The Art of <br />
              {/* เปลี่ยนสีเน้นเป็นสีทองหม่น */}
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

      {/* Showcase Section */}
      {/* ปรับพื้นหลังส่วนนี้ให้สว่างเล็กน้อยแต่ยังคุมโทนอุ่น */}
      <section className="bg-[#FAF9F6] py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-12">Our Heritage Categories</h2>
          <div className="space-y-24">
            {highlights.map((item, index) => (
              <div key={item.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-16 items-center`}>
                
                <div className={`flex-1 w-full h-96 ${item.bgColor} rounded-3xl overflow-hidden relative shadow-sm border border-[#C29958]/10`}>
                  <img 
                    src={item.imageUrl} 
                    alt={item.name}
                    className="w-full h-full object-cover"
                    onError={(e) => { 
                      e.target.className = "hidden"; 
                    }} 
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-9xl opacity-10 pointer-events-none grayscale">
                    {item.id === "01" ? "🔮" : item.id === "02" ? "🎭" : "🎨"}
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  {/* เปลี่ยนเลขลำดับให้จางลงเป็นสีทองหม่น */}
                  <span className="text-6xl font-serif text-[#C29958]/60">{item.id}</span>
                  <h3 className="text-3xl font-serif text-[#332D29]">{item.name}</h3>
                  {/* เปลี่ยนสีหัวข้อภาษาอังกฤษเป็นสีทองหม่น */}
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
    </div>
  );
}