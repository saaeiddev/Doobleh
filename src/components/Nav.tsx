'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  ['/', 'HOME'],
  ['/artists', 'ARTISTS'],
  ['/works', 'WORKS'],
  ['/timeline', 'TIMELINE'],
  ['/about', 'ABOUT']
] as const;

export default function Nav() {
  const path = usePathname();
  return (
    <>
      <div className="site-noise" />
      <header className="nav-shell" aria-label="Main navigation">
        <Link href="/" className="brand"><span className="brand-dot" />DOOBLEH</Link>
        <nav className="nav-links">
          {links.map(([href,label]) => <Link key={href} href={href} aria-current={path===href?'page':undefined}>{label}</Link>)}
        </nav>
        <div className="nav-side">FA · EN</div>
      </header>
    </>
  );
}
