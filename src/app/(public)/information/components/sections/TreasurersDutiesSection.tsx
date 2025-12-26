import { treasurersDuties } from '@/data/treasurersDuties';

export default function TreasurersDutiesSection() {
    return (
        <section>
            <h3 className="text-center">
                Dyżury Skarbnika (działka 25) i Sekretarza (działka 24) na 2025 rok
            </h3>
            <ul className="text-center">
                {treasurersDuties.map((item, i) => (
                    <li key={i}>
                        <span>{item.date}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
