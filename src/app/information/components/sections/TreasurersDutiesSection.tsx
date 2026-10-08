import { treasurersDuties } from '@/data/treasurersDuties';

export default function TreasurersDutiesSection() {
    return (
        <section id="dyzury-skarbnika">
            <h3 className="text-center">Dyżury Skarbnika (działka 25) 2026 rok</h3>
            <p>
                W związku ze zbliżającym się końcem sezonu działkowego w 2026 roku informujemy, że
                dyżury skarbnika nie będą już planowane. W przypadku konieczności uregulowania
                zaległych płatności gotówką, prosimy o indywidualne uzgodnienie terminu spotkania ze
                skarbnikiem.
            </p>
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
