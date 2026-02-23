'use client';
import Link from 'next/link';
import Button from '../components/Button';

export default function KhonPage() {
  const khonCategories = [
    {
      id: "01",
      name: "พระ (Heroic Characters)",
      desc: "ใบหน้าสงบนิ่ง สีขาวหรือสีทอง บ่งบอกถึงบารมีและความเป็นสุภาพบุรุษ",
      image: "/img/khon-phra.jpg"
    },
    {
      id: "02",
      name: "ยักษ์ (Demons)",
      desc: "เขี้ยวโง้ง แววตาดุดัน แฝงด้วยพละกำลังและความน่าเกรงขาม",
      image: "/img/khon-yak.jpg"
    },
    {
      id: "03",
      name: "ลิง (Simians)",
      desc: "ความคล่องแคล่วว่องไว สีสันสดใสตามบุคลิกของทหารเอก",
      image: "/img/khon-monkey.jpg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FCFAf7] text-slate-900">
      
      {/* 1. Hero Section - Full Width Video */}
      <section className="relative h-screen w-full flex items-center overflow-hidden bg-black">
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-60"
          >
            <source src="/img/khon-hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FCFAf7]"></div>
        </div>
        
        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-16 w-full">
          <span className="text-orange-500 font-bold tracking-[0.5em] uppercase text-sm mb-6 block drop-shadow-lg">
            Masterpiece of Thailand
          </span>
          <h1 className="text-6xl md:text-[120px] font-serif text-white mb-8 leading-[0.9] drop-shadow-2xl">
            หัวโขน <br /> 
            <span className="italic text-orange-500">นาฏศิลป์แห่งไฟ</span>
          </h1>
          <p className="text-stone-300 max-w-2xl text-xl md:text-2xl leading-relaxed font-light">
            สัมผัสจิตวิญญาณแห่งช่างศิลป์ไทย ผ่านหน้ากากอันวิจิตรตระการตา 
            ที่รวมศาสตร์และศิลป์ชั้นสูงไว้ในหนึ่งเดียว
          </p>
        </div>
      </section>

      {/* 2. Craftsmanship Section - แก้กลับเป็น "วงกลม" ตามความต้องการ */}
      <section className="py-32 max-w-[1400px] mx-auto px-8 md:px-16">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          <div className="flex-1 relative group">
            {/* ส่วนของรูปภาพวงกลม */}
            <div className="aspect-square bg-stone-200 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src="/img/khon-detail.jpg" 
                alt="Crafting detail" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            </div>
            {/* วงแหวนเรืองแสงสีส้มรอบรูปวงกลม */}
            <div className="absolute inset-0 rounded-full border border-orange-500/20 scale-110 group-hover:scale-125 transition-transform duration-1000 z-0"></div>
            <div className="absolute inset-0 rounded-full border border-orange-500/10 scale-120 group-hover:scale-135 transition-transform duration-1000 z-0"></div>
          </div>
          
          <div className="flex-1 space-y-12">
            <h2 className="text-5xl md:text-7xl font-serif leading-tight">ความลับที่ซ่อนอยู่ใน <br /><span className="text-orange-600">ความประณีต</span></h2>
            <p className="text-slate-500 text-xl leading-relaxed">
              งานหัวโขนคือการควบคุมธาตุทั้งสี่ ดิน น้ำ ลม และไฟ ให้สอดประสานกัน 
              ทุกเส้นสายลายไทยที่ปรากฏ เกิดจากความอดทนและสมาธิขั้นสูงของช่างศิลป์
            </p>
            <div className="grid grid-cols-2 gap-10 pt-4">
              <div className="border-l-4 border-orange-500 pl-6 space-y-2">
                <h4 className="text-2xl font-bold text-orange-600">ทองคำเปลว</h4>
                <p className="text-sm text-slate-400 uppercase tracking-widest">Pure Gold Leaf</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-6 space-y-2">
                <h4 className="text-2xl font-bold text-orange-600">ลงรักปิดทอง</h4>
                <p className="text-sm text-slate-400 uppercase tracking-widest">Traditional Lacquer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Grid */}
      <section className="bg-stone-100 py-32">
        <div className="max-w-[1400px] mx-auto px-8">
          <div className="flex justify-between items-end mb-20">
            <div>
              <h2 className="text-5xl font-serif mb-4">ประเภทของหัวโขน</h2>
              <p className="text-orange-600 font-medium">Our Heritage Categories</p>
            </div>
            <div className="h-[1px] flex-1 bg-stone-300 mx-10 mb-4 hidden md:block"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {khonCategories.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative h-[600px] w-full rounded-[30px] overflow-hidden mb-8 shadow-lg">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-8 left-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    <p className="text-orange-400 font-bold mb-2">Category {item.id}</p>
                    <h3 className="text-3xl font-serif">{item.name}</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-lg px-2 group-hover:text-slate-900 transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section */}
      <section className="py-40 text-center bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl font-serif mb-10 italic text-orange-600">"ศิลปะที่สวมใส่ได้ จิตวิญญาณที่สัมผัสได้"</h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <Button text="ติดต่อชมงานศิลป์" onClick={() => {}} />
            <Link href="/" className="px-12 py-4 bg-stone-900 text-white rounded-full font-bold uppercase text-sm tracking-[0.2em] hover:bg-orange-600 transition-all shadow-2xl">
              กลับหน้าหลัก
            </Link>
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-stone-50 opacity-[0.03] select-none">KHON</div>
      </section>

    </div>
  );
}