import Link from 'next/link';

export default function NavLink({ href, title }) {
  return (
    <Link 
      href={href} 
      className="group relative px-4 py-2 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium text-[#F5F2ED]/60 transition-all duration-300"
    >
      {/* เมื่อ Hover: เปลี่ยนจากสีส้มเป็นสีครีมสว่าง และมีรัศมีสีทองจางๆ */}
      <span className="relative z-10 group-hover:text-[#F5F2ED] transition-all duration-300 group-hover:[text-shadow:0_0_8px_rgba(194,153,88,0.5)]">
        {title}
      </span>

      {/* เส้นใต้: เปลี่ยนจากนีออนส้ม เป็นเส้นไหมสีทองหม่นที่ดูพรีเมียม */}
      <span className="absolute bottom-1 left-4 w-0 h-[1px] bg-[#C29958] transition-all duration-500 group-hover:w-[calc(100%-32px)] shadow-[0_0_8px_rgba(194,153,88,0.4)]"></span>
      
      {/* แสงออร่าด้านหลัง: เปลี่ยนเป็นสีทอง Amber จางๆ ให้ความรู้สึกอบอุ่นเหมือนแสงไฟในแกลเลอรี */}
      <span className="absolute inset-0 bg-[#C29958]/0 group-hover:bg-[#C29958]/5 blur-lg transition-all duration-500 -z-10"></span>
    </Link>
  );
}