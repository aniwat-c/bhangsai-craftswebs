import NavLink from './NavLink';

export default function Navbar() {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Thai Glass Blowing', href: '/glass-blowing' },
    { title: 'Khon Mask Craft Department', href: '/make-khon' },
    { title: 'Thai Pattern Painting Department', href: '/fine-arts' },
  ];

  return (
    // เพิ่ม border-b จางๆ และ shadow สีฟ้าเพื่อให้ดูเหมือนแสงสะท้อนลงมาด้านล่าง
    <nav className="bg-gray-950 p-4 shadow-[0_4px_20px_rgba(0,0,0,0.5)] border-b border-cyan-500/10 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* โลโก้ IT Shop แบบเรืองแสง Neon */}
        <div className="text-white text-xl font-bold tracking-[0.1em] cursor-pointer transition-all duration-500 hover:text-orange-400 hover:[text-shadow:0_0_15px_rgba(34,211,238,0.8)]">
          ศูนย์ศิลปาชีพบางไทร 
        </div>

        {/* ส่วนของเมนู */}
        <div className="flex space-x-2">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href} title={item.title} />
          ))}
        </div>
      </div>
    </nav>
  );
}