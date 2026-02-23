import Link from 'next/link';

export default function NavLink({ href, title }) {
  return (
    <Link 
      href={href} 
      className="group relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-medium text-stone-400 transition-all duration-300"
    >
      {/* เมื่อ Hover: เปลี่ยนเป็นสีส้มขาวสว่าง และมี Text Shadow สีส้ม */}
      <span className="relative z-10 group-hover:text-orange-400 transition-all duration-300 group-hover:[text-shadow:0_0_10px_rgba(251,146,60,0.8)]">
        {title}
      </span>

      {/* เส้นใต้: เปลี่ยนเป็นสีส้ม และทำให้เรืองแสงเหมือนหลอดไฟนีออน */}
      <span className="absolute bottom-1 left-4 w-0 h-[1.5px] bg-orange-500 transition-all duration-500 group-hover:w-[calc(100%-32px)] shadow-[0_0_12px_#f97316]"></span>
      
      {/* แสงออร่าสีส้มจางๆ ด้านหลัง */}
      <span className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 blur-xl transition-all duration-500 -z-10"></span>
    </Link>
  );
}