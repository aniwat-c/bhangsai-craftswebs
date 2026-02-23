import './globals.css';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'IT Shop Online | Thai Craft Heritage',
  description: 'ศูนย์ศิลปาชีพบางไทร - มรดกทางวัฒนธรรมไทย',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body className="bg-[#FCFAf7] text-slate-900 overflow-x-hidden">
        {/* Navbar วางไว้ด้านบนสุด */}
        <Navbar />
        
        {/* ลบ container และ padding ออกเพื่อให้ children ขยายได้เต็มจอ 100% */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* คุณสามารถเพิ่ม Footer ตรงนี้ได้ในอนาคต */}
      </body>
    </html>
  );
}