import NavLink from './NavLink';

export default function Navbar() {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Thai Glass Blowing', href: '/glass-blowing' },
    { title: 'Khon Mask Craft Department', href: '/make-khon' },
    { title: 'Thai Pattern Painting Department', href: '/fine-arts' },
  ];

  return (
    // เปลี่ยนจาก bg-gray-950 เป็นการใช้สีน้ำตาลไหม้แบบโปร่งแสง + Backdrop Blur
    <nav className="bg-[#332D29]/90 backdrop-blur-md p-4 shadow-lg border-b border-[#C29958]/20 sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        {/* โลโก้: เปลี่ยนจากการเรืองแสง Neon เป็นการเรืองแสงสีทองนวล */}
        <div className="text-[#F5F2ED] text-lg font-serif tracking-[0.15em] cursor-pointer transition-all duration-500 hover:text-[#C29958] hover:[text-shadow:0_0_10px_rgba(194,153,88,0.4)]">
          ศูนย์ศิลปาชีพบางไทร 
        </div>

        {/* ส่วนของเมนู: เพิ่มช่องว่างให้ดูโปร่งขึ้น */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
               <NavLink href={item.href} title={item.title} />
               {/* เพิ่มเส้นขีดใต้สีทองที่จะขยายออกเวลา Hover */}
               <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C29958] transition-all duration-300 group-hover:w-full"></span>
            </div>
          ))}
        </div>

        {/* Mobile Menu Icon (ถ้าต้องการเพิ่มความสวยงาม) */}
        <div className="md:hidden text-[#C29958]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
}