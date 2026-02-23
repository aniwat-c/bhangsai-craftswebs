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
    // เปลี่ยน bg และ text เป็นโทนน้ำตาลไหม้และครีมงาช้าง
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* Hero Section */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gray-950">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/img/draw-hero.mp4" type="video/mp4" />
        </video>

        {/* ปรับ Overlay ให้กลืนเข้ากับสีพื้นหลังใหม่ #F5F2ED */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-[#F5F2ED]"></div>
        {/* เปลี่ยนแสงรัศมีตรงกลางเป็นสีทองหม่น */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C29958]/10 via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-6">
          <span className="text-[#C29958] font-bold tracking-[0.3em] uppercase text-sm mb-4 block drop-shadow-[0_0_8px_rgba(194,153,88,0.6)]">
            Heritage of Thai Line
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
            ตระการ <span className="italic text-[#C29958] hover:[text-shadow:0_0_20px_#C29958] transition-all duration-500">ลายไทย</span>
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
            {/* ปรับสีกรอบหลังรูปให้เป็นสีทองหม่นจางๆ */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C29958]/30 rounded-2xl -z-10 translate-x-4 translate-y-4 opacity-50"></div>
          </div>
          
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif">สมาธิที่ปลาย <span className="text-[#C29958]">พู่กัน</span></h2>
            <p className="text-[#5A524D] text-lg leading-relaxed italic border-l-4 border-[#C29958] pl-6">
              "การวาดลายไทยไม่ได้อาศัยเพียงทักษะทางศิลปะ แต่ต้องใช้ความสงบนิ่งของจิตใจ..."
            </p>
            <p className="text-[#5A524D] leading-relaxed">
              เส้นที่ลากต้องมีความต่อเนื่อง พลิ้วไหวแต่แข็งแรง สะท้อนถึงเอกลักษณ์ของความเป็นไทยที่มีความอ่อนโยนแต่เปี่ยมด้วยพลัง
            </p>
          </div>
        </div>
      </section>

      {/* Line Categories Section */}
      {/* เปลี่ยนจากสีดำสนิทเป็นสีน้ำตาลเข้มเกือบดำ #1E1B19 */}
      <section className="bg-[#1E1B19] py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-serif mb-4">แม่ลายพื้นฐาน</h2>
            <div className="h-0.5 w-24 bg-[#C29958] mx-auto shadow-[0_0_15px_#C29958]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {lineStyles.map((style) => (
              <div key={style.id} className="group flex flex-col items-center text-center">
                {/* วงกลมล้อมรอบรูปภาพ ปรับเป็นสีทองหม่นเวลา Hover */}
                <div className="relative w-64 h-64 rounded-full bg-[#2D2825] border border-white/10 overflow-hidden mb-8 transition-all duration-500 group-hover:border-[#C29958] group-hover:shadow-[0_0_30px_rgba(194,153,88,0.2)]">
                  <img src={style.image} alt={style.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-stone-300 group-hover:text-[#C29958] transition-colors">{style.name}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-[#F5F2ED] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl font-serif mb-8 text-[#332D29]">สัมผัสความงามผ่าน <span className="italic text-[#C29958]">ลายเส้น</span></h2>
          <p className="text-[#5A524D] mb-12 text-lg">
            เราเปิดสอนการวาดลายไทยเบื้องต้น สำหรับผู้ที่ต้องการฝึกสมาธิและสัมผัสความงามในแบบฉบับโบราณ
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Button text="ลงทะเบียนเรียน" onClick={() => {}} />
            <Link href="/" className="px-8 py-2.5 border border-[#C29958] text-[#C29958] rounded-full font-bold uppercase text-xs tracking-widest hover:bg-[#C29958] hover:text-white transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}