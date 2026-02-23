'use client';

export default function Button({ text, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        /* เปลี่ยนพื้นหลังเป็นสีทองหม่น #C29958 และ Hover ให้สว่างขึ้นเล็กน้อย */
        bg-[#C29958] hover:bg-[#D4AC6E] 
        
        /* สีตัวอักษรใช้สีขาวเพื่อให้ตัดกับปุ่ม หรือใช้ #F5F2ED เพื่อความละมุน */
        text-white font-bold uppercase tracking-wider text-sm
        
        py-2.5 px-8 rounded-sm transition-all duration-300 
        transform active:scale-95 shadow-lg
        
        /* เปลี่ยนการเรืองแสงจากสีส้มเป็นสีทองหม่น */
        hover:shadow-[0_0_25px_rgba(194,153,88,0.4)]
        
        /* ปรับขอบให้เป็นสีทองที่สว่างกว่าตัวปุ่มเล็กน้อย */
        border border-[#C29958]/20 hover:border-[#D4AC6E]
        
        /* เพิ่มความรู้สึกเหมือนงาน Craft ด้วยการปรับความโค้งมนเล็กน้อย */
        cursor-pointer
      "
    >
      {text}
    </button>
  );
}