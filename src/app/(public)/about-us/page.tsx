import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import GardenMap from '@/components/GardenMap';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

import GardenStats from './components/GardenStats';
import AnimateOnView from '@/components/AnimatedH2';
import GalleryPreview from './components/GalleryPreview';

export default function AboutGardenPage() {
    return (
        <article>
            <header>
                <h1>O Nas</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Kilka słów o ogrodzie ,,Stokrotka'' w Sanoku</h2>
                </AnimateOnView>
                <h3>Historia i teraźniejszość</h3>
                <p className="mb-4">
                    Dokładna data założenia naszego ogrodu nie jest obecnie znana jednakże posiadamy
                    dokument o decyzji dotyczącej ustalenia miejsca naszych ogródków działkowych,
                    wystawiony <span className="font-bold"> 27.10.1977 roku. </span>
                    Początkowo działki były przydzielane pracownikom zakładów pracy w okresie PRL. Z
                    czasem przekształciły się w Rodzinne Ogrody Działkowe (ROD) pod auspicjami
                    Polskiego Związku Działkowców (PZD). Od 2015 roku nasza społeczność działa
                    niezależnie, jako Stowarzyszenie Ogrodowe „Stokrotka” w Krajowym Rejestrze
                    Sądowym.
                </p>
                <p className="mb-4">
                    Ogród „Stokrotka” w Sanoku to miejsce, gdzie pasja do ogrodnictwa łączy się z
                    troską o lokalną społeczność i środowisko. Naszym celem jest umożliwienie
                    mieszkańcom okolic Sanoka prowadzenia upraw ogrodniczych oraz wspieranie
                    integracji społecznej, edukacji ekologicznej i aktywnego uczestnictwa w życiu
                    wspólnoty.
                </p>
                <p className="mb-8">
                    Chcemy dalej rozwijać ogród, wzbogacając jego infrastrukturę i oferując
                    przestrzeń do wspólnych działań, zabaw i integracji, które zostawią wiele miłych
                    wspomnień.
                </p>
                <h3>Nasza misja jako ROD</h3>
                <ul className="mb-4 list-inside list-disc space-y-3">
                    <li>Umożliwianie prowadzenia upraw ogrodniczych i zapewnienie rekreacji.</li>
                    <li>Poprawa warunków socjalnych członków społeczności lokalnej.</li>
                    <li>Integracja wielopokoleniowej rodziny i społeczności lokalnej.</li>
                    <li>
                        Wychowanie dzieci w zdrowych warunkach oraz wsparcie aktywności seniorów.
                    </li>
                    <li>Wsparcie osób niepełnosprawnych i starszych w integracji społecznej.</li>
                    <li>Rewitalizacja terenów zdegradowanych dla ludzi i przyrody.</li>
                    <li>Ochrona środowiska naturalnego i kształtowanie zdrowego otoczenia.</li>
                </ul>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród w liczbach</h2>
                </AnimateOnView>
                <GardenStats />
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród na zdjęciach</h2>
                </AnimateOnView>
                <GalleryPreview />
                <Link href="/gallery" className="btn btn-lg btn-theme mx-auto">
                    <span>Zobacz wszystkie</span>
                    <ArrowRight />
                </Link>
            </section>

            <LineSeparator />

            <section>
                <AnimateOnView className="h2-animate">
                    <h2>Nasz ogród na mapie</h2>
                </AnimateOnView>
                <GardenMap />
            </section>

            <ImageSeparator />
        </article>
    );
}
