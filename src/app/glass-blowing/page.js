'use client';
import Link from 'next/link';
import Button from '../components/Button';

export default function GlassBlowingPage() {
  const processes = [
    {
      step: "01",
      title: "The Melting",
      desc: "หลอมละลายทรายแก้วบริสุทธิ์ในเตาเผาอุณหภูมิสูงกว่า 1,200 องศาเซลเซียส...",
      image: "/img/glass-step-1.jpg"
    },
    {
      step: "02",
      title: "The Blowing",
      desc: "ใช้ท่อเหล็กยาวตักน้ำแก้วแล้วเป่าลมอย่างประณีต...",
      image: "/img/glass-step-2.jpg"
    },
    {
      step: "03",
      title: "The Shaping",
      desc: "ใช้เครื่องมือเฉพาะทางช่วยจัดแต่งสัดส่วนในขณะที่แก้วยังร้อนแดง...",
      image: "/img/glass-step-3.jpg"
    }
  ];

  return (
    // เปลี่ยน bg-หลัก และ text-หลัก ตามธีม Royal Amber & Earth
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-gray-950">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-50">
          <source src="/img/glass-hero-video.mp4" type="video/mp4" />
        </video>
        {/* ปรับ Gradient ให้กลืนเข้ากับสีพื้นหลังใหม่ #F5F2ED */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-[#F5F2ED]"></div>
        <div className="relative z-10 text-center px-6">
          {/* เปลี่ยนสีส้มเป็นสีทองหม่น #C29958 */}
          <span className="text-[#C29958] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Masterpiece of Fire</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6">เป่าแก้ว <span className="italic text-[#C29958]">ศิลปะแห่งไฟ</span></h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg">สัมผัสจิตวิญญาณแห่งช่างศิลป์บางไทร</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              ความลับที่ซ่อนอยู่ใน <br />
              <span className="text-[#C29958]">ความใสและลมหายใจ</span>
            </h2>
            {/* ปรับสีเส้นขอบเป็นสีทองหม่น */}
            <p className="text-[#5A524D] text-lg leading-relaxed border-l-4 border-[#C29958] pl-6 italic">
              "มากกว่าการขึ้นรูป คือการถ่ายทอดความอ่อนช้อยของธรรมชาติลงบนวัสดุที่แข็งแกร่งแต่งดงาม..."
            </p>
            <div className="flex space-x-12 pt-4">
              <div>
                <p className="text-3xl font-serif text-[#332D29]">จิตวิญญาณ</p>
                <p className="text-xs uppercase tracking-widest text-[#C29958] font-bold">Nature Inspired</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-[#332D29]">ความประณีต</p>
                <p className="text-xs uppercase tracking-widest text-[#C29958] font-bold">Beyond Craft</p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[#C29958]/20">
               <img 
                 src="/img/glass-main.jpg" 
                 alt="Thai Glass Art Peacock" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
               />
            </div>
            {/* เอฟเฟกต์แสงฟุ้งเปลี่ยนเป็นสีทองอ่อนๆ */}
            <div className="absolute -z-10 inset-0 bg-[#C29958]/10 blur-[100px] opacity-50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      {/* เปลี่ยน bg-slate-900 เป็นสีน้ำตาลเข้มเกือบดำเพื่อให้เข้าโทน Earth */}
      <section className="bg-[#1E1B19] py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-20 text-center">กระบวนการสร้างสรรค์</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {processes.map((p) => (
              <div key={p.step} className="group cursor-default">
                <div className="relative h-64 bg-[#2D2825] rounded-2xl mb-8 overflow-hidden border border-white/5">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  {/* เปลี่ยนเลขลำดับเป็นสีทองหม่นจางๆ ตามที่คุณชอบ */}
                  <span className="absolute top-6 left-6 text-5xl font-serif text-white/10 group-hover:text-[#C29958]/50 transition-colors">
                    {p.step}
                  </span>
                </div>
                <h3 className="text-xl font-serif mb-4 group-hover:text-[#C29958] transition-colors">{p.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 text-center bg-[#F5F2ED]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-serif mb-8">สัมผัสผลงานจริงด้วยตัวคุณเอง</h2>
          <div className="flex justify-center space-x-6">
            <Button text="จองรอบชมสาธิต" onClick={() => {}} />
            <Link href="/" className="px-8 py-2.5 border border-[#C29958] text-[#C29958] rounded-sm font-bold uppercase text-sm hover:bg-[#C29958] hover:text-white transition-all">
                กลับหน้าหลัก
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}