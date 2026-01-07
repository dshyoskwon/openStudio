import Link from 'next/link';

const navItems = [
 //{ name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Publication', path: '/publication' },
  { name: 'Participants', path: '/participants' },
  { name: 'Courses', path: '/courses' },
];

export default function Navigation() {
  return (
    <nav className="flex flex-col gap-6 text-sm font-medium tracking-wide">
      <div className="mb-8">
        <Link href="/" className="text-lg font-bold uppercase tracking-wider">
          Open<br />Research<br />Studio
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


