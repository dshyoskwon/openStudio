import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { name: 'Projects', path: '/projects' },
  { name: 'Publication', path: '/publication' },
  { name: 'Courses', path: '/courses' },
  { name: 'Participants', path: '/participants' },
  { name: 'About', path: '/about' },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-6 text-sm font-medium tracking-wide w-full">
      <div className="mb-6 w-full">
        <Link href="/" className="block w-full">
          {/* w-full로 가로 꽉 채움. 높이는 이미지 비율에 따라 자동 조절되도록 설정 */}
          <div className="relative w-full">
            <Image 
              src="/images/logo.jpg"
              alt="Open Research Studio Logo"
              width={500} // 충분히 큰 해상도 지정 (화면엔 css로 w-full 적용됨)
              height={500}
              className="w-full h-auto object-contain" // 가로 꽉 채우고 비율 유지
              priority
            />
          </div>
        </Link>
      </div>
      <ul className="flex flex-col gap-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <Link 
              href={item.path}
              className="hover:text-gray-500 transition-colors duration-200 block py-1"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto pt-10 text-xs text-gray-400">
        © 2024 ORS
      </div>
    </nav>
  );
}
