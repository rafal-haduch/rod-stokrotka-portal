'use client';

import GardenMap from '@/components/GardenMap';
import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import GardenStats from './components/GardenStats';
import { useInView } from '@/lib/use-in-view';
import { cn } from '@/lib/cn';

export default function AboutGardenPage() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref2, inView: visible2 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref3, inView: visible3 } = useInView<HTMLHeadingElement>(0.3);
    const { ref: ref4, inView: visible4 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <h1>O Nas</h1>
            <LineSeparator />
            <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                Kilka słów o naszym ogrodzie
            </h2>
            <section>
                <p className="mb-4 text-gray-700">
                    Ogród „Stokrotka” w Sanoku to miejsce, gdzie pasja do ogrodnictwa łączy się z
                    troską o lokalną społeczność i środowisko. Choć dokładna data założenia ogrodu
                    nie jest obecnie dostępna, wiadomo, że początkowo ogrody działkowe były
                    przydzielane pracownikom zakładów pracy w okresie PRL. Z czasem, w wyniku zmian
                    społeczno-politycznych, ogrody te przekształciły się w Rodzinne Ogrody Działkowe
                    (ROD) pod auspicjami Polskiego Związku Działkowców (PZD). Jednakże, od 2015
                    roku, nasza społeczność postanowiła działać niezależnie, rejestrując się jako
                    Stowarzyszenie Ogrodowe „Stokrotka” w Krajowym Rejestrze Sądowym
                </p>
                <p className="mb-8 text-gray-700">
                    Naszym celem jest nie tylko umożliwienie mieszkańcom Sanoka prowadzenia upraw
                    ogrodniczych, ale także integracja społeczna, edukacja ekologiczna oraz aktywne
                    uczestnictwo w życiu lokalnej wspólnoty. Dzięki zaangażowaniu naszych członków,
                    ogród „Stokrotka” stał się przestrzenią, w której tradycja spotyka się z
                    nowoczesnością, a miłość do natury z chęcią wspólnego działania.
                </p>
                <h2 ref={ref2} className={cn(`h2-animate mt-10, mb-4`, visible2 ? 'visible' : '')}>
                    Nasze cele
                </h2>
                <ul className="mb-4 list-inside list-disc space-y-3 text-base text-gray-700 md:text-lg">
                    <li>
                        Zaspokajanie wypoczynku i rekreacyjnych potrzeb społeczeństwa poprzez
                        umożliwianie prowadzenia upraw ogrodniczych.
                    </li>
                    <li>Poprawa warunków socjalnych członków społeczności lokalnych.</li>
                    <li>Integracja wielopokoleniowej rodziny.</li>
                    <li>
                        Wychowanie dzieci w zdrowych warunkach oraz zachowanie aktywności i zdrowia
                        emerytów i rencistów.
                    </li>
                    <li>Integracja społeczna osób w wieku emerytalnym oraz niepełnosprawnych.</li>
                    <li>Przywracanie społeczności i przyrodzie terenów zdegradowanych.</li>
                    <li>Ochrona środowiska i przyrody.</li>
                    <li>Kształtowanie zdrowego otoczenia człowieka.</li>
                </ul>
            </section>

            <ImageSeparator />

            <section>
                <h2 ref={ref3} className={cn(`h2-animate`, visible3 ? 'visible' : '')}>
                    Nasz ogród w liczbach
                </h2>
                <GardenStats />
            </section>

            <ImageSeparator />

            <section>
                <h2 ref={ref4} className={cn(`h2-animate`, visible4 ? 'visible' : '')}>
                    Nasz ogród na mapie
                </h2>
                <GardenMap />
            </section>

            <ImageSeparator />
        </article>
    );
}
