'use client';
import GardenMap from '@/components/GardenMap';
import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import GardenStats from './components/GardenStats';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';
import SectionLineSeparator from '@/components/SectionLineSeparator';

export default function AboutGardenPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref3, inView: visible3 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>O Nas</h1>
            <MainHeaderLineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Kilka słów o naszym ogrodzie
            </h2>
            <section>
                <h3>Historia i teraźniejszość</h3>
                <p className="mb-4">
                    Dokładna data założenia ogrodu nie jest obecnie znana, jednakże posiadamy
                    dokument o decyzji dotyczącej ustalenia miejsca naszych ogródków działkowych,
                    wystawiony 27.10.1977 roku. Początkowo działki były przydzielane pracownikom
                    zakładów pracy w okresie PRL. Z czasem przekształciły się w Rodzinne Ogrody
                    Działkowe (ROD) pod auspicjami Polskiego Związku Działkowców (PZD). Od 2015 roku
                    nasza społeczność działa niezależnie, jako Stowarzyszenie Ogrodowe „Stokrotka” w
                    Krajowym Rejestrze Sądowym.
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
            <SectionLineSeparator />
            <section>
                <h2 ref={ref2} className={cn(`h2-animate`, visible2 ? 'visible' : '')}>
                    Nasz ogród w liczbach
                </h2>
                <GardenStats />
            </section>
            <SectionLineSeparator />
            <section>
                <h2 ref={ref3} className={cn(`h2-animate`, visible3 ? 'visible' : '')}>
                    Nasz ogród na mapie
                </h2>
                <GardenMap />
            </section>
            <ImageSeparator />
        </article>
    );
}
