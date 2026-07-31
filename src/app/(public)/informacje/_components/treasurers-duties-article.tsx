import { treasurersDuties } from '@/content/data/treasurers-duties';

export default function TreasurersDutiesSection() {
    return (
        <section id="dyzury-skarbnika">
            <h3 className="text-center">Dyżury Skarbnika (działka 25) na sierpień 2026 rok</h3>
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
