'use client';
import { useState } from 'react';
import Link from 'next/link';
import Button from '../components/Button';

export default function ThaiDrawingPage() {
  const lineStyles = [
    {
      id: "กนก",
      name: "ลายกนก (Kanok)",
      desc: "แม่ลายพื้นฐานที่เลียนแบบความพริ้วไหวของเปลวไฟ บ่งบอกถึงความเจริญรุ่งเรืองที่โชติช่วง",
      meaning: "ความรุ่งโรจน์และพลังชีวิต",
      image: "/img/draw-kanok.jpg"
    },
    {
      id: "กระจัง",
      name: "ลายกระจัง (Krajang)",
      desc: "ลายที่ได้รับแรงบันดาลใจจากกลีบบัว ใช้ตกแต่งขอบและฐานสถาปัตยกรรม",
      meaning: "ความบริสุทธิ์และการปกป้องรักษา",
      image: "/img/draw-krajang.jpg"
    },
    {
      id: "ประจำยาม",
      name: "ลายประจำยาม (Pra-Jam-Yam)",
      desc: "ลายรูปทรงสี่เหลี่ยมพุ่มข้าวบิณฑ์ ใช้สำหรับหยุดเส้นหรือประดับตามมุม",
      meaning: "ความสมดุลและความมั่นคงของชีวิต",
      image: "/img/draw-prajamyam.jpg"
    }
  ];

  // ข้อมูลสำหรับ Step-by-Step
  const steps = [
    { title: "ตระเตรียมสมาธิ", detail: "การร่างเส้นดินสอเบาๆ เพื่อกำหนดโครงสร้างพื้นฐาน", img: "/img/step-1.jpg" },
    { title: "ถมเส้นอ่อนช้อย", detail: "การลงรายละเอียดเส้นกนกให้มีความพลิ้วไหวต่อเนื่อง", img: "/img/step-2.jpg" },
    { title: "ปิดทองส่องสว่าง", detail: "ขั้นตอนสุดท้ายคือการลงรักปิดทองเพื่อให้ลายดูทรงคุณค่า", img: "/img/step-3.jpg" }
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#332D29]">
      
      {/* 1. Hero Section (เนื้อหาเดิม) */}
      <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-gray-950">
        <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
          <source src="/img/draw-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/40 to-[#F5F2ED]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#C29958]/10 via-transparent to-transparent"></div>
        <div className="relative z-10 text-center px-6">
          <span className="text-[#C29958] font-bold tracking-[0.3em] uppercase text-sm mb-4 block">Heritage of Thai Line</span>
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 leading-tight">
            ตระการ <span className="italic text-[#C29958]">ลายไทย</span>
          </h1>
          <p className="text-stone-300 max-w-2xl mx-auto text-lg leading-relaxed">
            สืบสานเส้นสายมรดกโลก ผ่านปลายพู่กันและจินตนาการที่ไม่มีที่สิ้นสุด
          </p>
        </div>
      </section>

      {/* 2. Philosophy Section (เนื้อหาเดิม) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative group">
            <div className="relative z-10 aspect-video bg-stone-200 rounded-2xl overflow-hidden shadow-2xl">
              <img src="/img/draw-thaiskin.jpg" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-[#C29958]/30 rounded-2xl -z-10 translate-x-4 translate-y-4 opacity-50"></div>
          </div>
          <div className="order-1 lg:order-2 space-y-8">
            <h2 className="text-4xl font-serif">สมาธิที่ปลาย <span className="text-[#C29958]">พู่กัน</span></h2>
            <p className="text-[#5A524D] text-lg leading-relaxed italic border-l-4 border-[#C29958] pl-6">
              "การวาดลายไทยไม่ได้อาศัยเพียงทักษะทางศิลปะ แต่ต้องใช้ความสงบนิ่งของจิตใจ..."
            </p>
            <p className="text-[#5A524D] leading-relaxed">
              เส้นที่ลากต้องมีความต่อเนื่อง พลิ้วไหวแต่แข็งแรง สะท้อนถึงเอกลักษณ์ของความเป็นไทย
            </p>
          </div>
        </div>
      </section>

      {/* [NEW] 3. Step-by-Step Evolution: ความสวยงามต้องใช้เวลา */}
      <section className="py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-serif text-center mb-16 italic text-[#C29958]">วิวัฒนาการแห่งเส้นสาย</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative p-8 border border-[#C29958]/10 rounded-2xl hover:bg-white transition-all shadow-sm group">
                <span className="text-5xl font-serif text-[#C29958]/20 absolute top-4 right-6 group-hover:text-[#C29958]/40">0{index + 1}</span>
                <div className="h-48 bg-stone-100 rounded-xl mb-6 overflow-hidden">
                  <img src={step.img} alt={step.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-[#332D29]">{step.title}</h4>
                <p className="text-sm text-[#8C837D] leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Line Categories Section (เนื้อหาเดิม + เพิ่มความหมายมงคล) */}
      <section className="bg-[#1E1B19] py-32 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-serif mb-4">แม่ลายมงคลพื้นฐาน</h2>
            <div className="h-0.5 w-24 bg-[#C29958] mx-auto shadow-[0_0_15px_#C29958]"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {lineStyles.map((style) => (
              <div key={style.id} className="group flex flex-col items-center text-center">
                <div className="relative w-64 h-64 rounded-full bg-[#2D2825] border border-white/10 overflow-hidden mb-8 transition-all duration-500 group-hover:border-[#C29958] group-hover:shadow-[0_0_30px_rgba(194,153,88,0.2)]">
                  <img src={style.image} alt={style.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                </div>
                <h3 className="text-2xl font-serif mb-2 text-stone-300 group-hover:text-[#C29958] transition-colors">{style.name}</h3>
                <p className="text-[#C29958] text-xs font-bold uppercase tracking-widest mb-4">สื่อถึง: {style.meaning}</p>
                <p className="text-stone-500 text-sm leading-relaxed max-w-xs">{style.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 5. Workshop Enrollment: ตารางเรียนจองคลาส */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-[#F5F2ED] rounded-[40px] p-12 md:p-20 shadow-xl border border-[#C29958]/20 relative overflow-hidden">
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif mb-6">เริ่มฝึกสมาธิด้วย <br/><span className="text-[#C29958]">ศิลปะไทย</span></h2>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-[#5A524D]"><span className="w-2 h-2 bg-[#C29958] rounded-full mr-3"></span> ทุกวันเสาร์ - อาทิตย์</li>
                  <li className="flex items-center text-[#5A524D]"><span className="w-2 h-2 bg-[#C29958] rounded-full mr-3"></span> รอบเช้า: 09:00 - 12:00 น.</li>
                  <li className="flex items-center text-[#5A524D]"><span className="w-2 h-2 bg-[#C29958] rounded-full mr-3"></span> รับจำนวนจำกัด 10 ท่านต่อรอบ</li>
                </ul>
                <Button text="จองคลาสเรียน" onClick={() => {}} />
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-inner border border-[#C29958]/10 text-center">
                <p className="text-[#C29958] font-bold mb-2">ตารางเรียนเดือนนี้</p>
                <div className="grid grid-cols-7 gap-2 text-[10px] text-stone-400 mt-4">
                  {['S','M','T','W','T','F','S'].map((d,i)=><div key={i}>{d}</div>)}
                  {[...Array(31)].map((_, i) => (
                    <div key={i} className={`p-2 rounded-lg ${[6,7,13,14,20,21,27,28].includes(i+1) ? 'bg-[#C29958] text-white font-bold' : ''}`}>
                      {i+1}
                    </div>
                  ))}
                </div>
                <p className="text-[10px] mt-4 text-[#8C837D]">* สีทองคือวันที่มีคลาสเรียน</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Section (เนื้อหาเดิม) */}
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