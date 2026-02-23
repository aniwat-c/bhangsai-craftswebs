'use client';

export default function Button({ text, onClick, type = 'button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        bg-orange-600 hover:bg-orange-500 
        text-white font-bold uppercase tracking-wider text-sm
        py-2 px-6 rounded-sm transition-all duration-300 
        transform active:scale-95 
        /* เรืองแสงสีส้มรอบปุ่ม */
        hover:shadow-[0_0_20px_rgba(249,115,22,0.6)]
        /* ขอบปุ่มสีส้มสว่าง */
        border border-orange-500/30 hover:border-orange-400
      "
    >
      {text}
    </button>
  );
}