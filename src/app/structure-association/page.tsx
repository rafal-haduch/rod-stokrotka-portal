'use client';

import { cn } from '@/lib/cn';
import { useInView } from '@/lib/use-in-view';

import {
    asOf,
    associationBoard,
    auditCommittee,
    arbitrationCommission,
} from '@/data/structureAssociation';

import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import LineSeparator from '@/components/LineSeparator';

export default function StructureAssociation() {
    const { ref: ref1, inView: visible1 } = useInView<HTMLHeadingElement>(0.3);

    return (
        <article>
            <header>
                <h1>Władze</h1>
                <MainHeaderLineSeparator />
            </header>

            <section className="text-center">
                <h2 ref={ref1} className={cn(`h2-animate`, visible1 ? 'visible' : '')}>
                    Obecna struktura Stowarzyszenia Ogrodowego
                    <br /> ,,Stokrotka'' w Sanoku
                </h2>
                <h3>Zarząd:</h3>
                <ul className="mb-10">
                    {associationBoard.map((item, i) => (
                        <li key={i}>
                            <span>
                                {i + 1}. {item.person} - {item.position}
                            </span>
                        </li>
                    ))}
                </ul>
                <h3>Komisja Rewizyjna:</h3>
                <ul className="mb-10">
                    {auditCommittee.map((item, i) => (
                        <li key={i}>
                            <span>
                                {i + 1}. {item.person} - {item.position}
                            </span>
                        </li>
                    ))}
                </ul>
                <h3>Komisja Rozjemcza:</h3>
                <ul className="mb-16">
                    {arbitrationCommission.map((item, i) => (
                        <li key={i}>
                            <span>
                                {i + 1}. {item.person} - {item.position}
                            </span>
                        </li>
                    ))}
                </ul>
                <p className="mb-10">Stan na dzień: {asOf}</p>
            </section>

            <LineSeparator my="my-10" />

            <section className="text-center">
                <h3>Administrator strony:</h3>
                <p>Rafał Haduch</p>
            </section>

            <ImageSeparator />
        </article>
    );
}
