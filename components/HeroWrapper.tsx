'use client';
import { usePathname } from 'next/navigation';
import Hero from './Hero';

export default function HeroWrapper() {
    const pathname = usePathname();
    const showHero = !['/sign-in', '/dashboard'].includes(pathname);
    return showHero ? <Hero /> : null;
}
