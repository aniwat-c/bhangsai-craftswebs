'use client';
import Link from 'next/link';
import Button from '../components/Button';

export default function ThaiDrawingPage() {
  const lineStyles = [
    {
      id: "กนก",
      name: "ลายกนก (Kanok)",
      desc: "แม่ลายพื้นฐานที่เลียนแบบความพริ้วไหวของเปลวไฟและใบไม้ มีความอ่อนช้อยเป็นเอกลักษณ์",
      image: "/img/draw-kanok.jpg"
    },
    {
      id: "กระจัง",
      name: "ลายกระจัง (Krajang)",
      desc: "ลายที่ได้รับแรงบันดาลใจจากกลีบบัว ใช้สำหรับตกแต่งขอบและฐานของงานสถาปัตยกรรม",
      image: "/img/draw-krajang.jpg"
    },
    {
      id: "ประจำยาม",
      name: "ลายประจำยาม (Pra-Jam-Yam)",
      desc: "ลายรูปทรงสี่เหลี่ยมพุ่มข้าวบิณฑ์ ใช้สำหรับหยุดเส้นหรือประดับตามมุมต่างๆ",
      image: "/img/draw-prajamyam.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAf7] text-slate-900">
      
      {/* Hero Section - ปรับปรุงใหม่ให้เหมือนหน้าเป่าแก้ว */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gray-950">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/img/draw-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay ไล่เฉดสีจากใสไปดำ และมีแสงส้มจางๆ เพื่อให้ตัวหนังสืออ่านง่ายเหมือนในรูป */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-[#FCFAf7]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4 block drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]">
            Heritage of Thai Line
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
            ตระการ <span className="italic text-orange-500 hover:[text-shadow:0_0_20px_#f97316] transition-all duration-500">ลายไทย</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
            สืบสานเส้นสายมรดกโลก ผ่านปลายพู่กันและจินตนาการที่ไม่มีที่สิ้นสุด 
            สัมผัสจิตวิญญาณของช่างศิลป์ผ่านลายเส้นที่พลิ้วไหว
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="relative z-10 aspect-video bg-stone-200 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/img/draw-thaiskin.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-orange-200 rounded-2xl -z-10 translate-x-4 translate-y-4 opacity-50"></div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif">สมาธิที่ปลาย <span className="text-orange-600">พู่กัน</span></h2>
            <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-orange-500 pl-6">
              "การวาดลายไทยไม่ได้อาศัยเพียงทักษะทางศิลปะ แต่ต้องใช้ความสงบนิ่งของจิตใจ..."
            </p>
            <p className="text-slate-500 leading-relaxed">
              เส้นที่ลากต้องมีความต่อเนื่อง พลิ้วไหวแต่แข็งแรง สะท้อนถึงเอกลักษณ์ของความเป็นไทยที่มีความอ่อนโยนแต่เปี่ยมด้วยพลัง
            </p>
          </div>
        </div>
      </section>

      {/* Line Categories Section */}
      <section className="bg-stone-900 py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-serif mb-4">แม่ลายพื้นฐาน</h2>
            <div className="h-0.5 w-24 bg-orange-500 mx-auto shadow-[0_0_15px_#f97316]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {lineStyles.map((style) => (
              <div key={style.id} className="group flex flex-col items-center text-center">
                <div className="relative w-64 h-64 rounded-full bg-stone-800 border border-white/10 overflow-hidden mb-8 transition-all duration-500 group-hover:border-orange-500 group-hover:shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <img src={style.image} alt={style.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-stone-300 group-hover:text-orange-400 transition-colors">{style.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-serif mb-8 text-slate-900">สัมผัสความงามผ่าน <span className="italic text-orange-600">ลายเส้น</span></h2>
          <p className="text-slate-500 mb-12 text-lg">
            เราเปิดสอนการวาดลายไทยเบื้องต้น สำหรับผู้ที่ต้องการฝึกสมาธิและสัมผัสความงามในแบบฉบับโบราณ
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button text="ลงทะเบียนเรียน" onClick={() => {}} />
            <Link href="/" className="px-8 py-2.5 border border-stone-300 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-stone-100 transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}