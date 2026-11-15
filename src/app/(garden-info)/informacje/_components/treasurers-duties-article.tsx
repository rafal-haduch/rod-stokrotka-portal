import { treasurerDutySchedule } from '@/content/treasurers-duties';

export default function TreasurersDutiesSection() {
    return (
        <section id="dyzury-skarbnika">
            <h3 className="text-center">
                Dyżury Skarbnika (działka 25) na {treasurerDutySchedule.year} rok
            </h3>
            <p>
                W związku ze zbliżającym się końcem sezonu działkowego w 2026 roku informujemy, że
                dyżury skarbnika nie będą już planowane. W przypadku konieczności uregulowania
                zaległych płatności gotówką, prosimy o indywidualne uzgodnienie terminu spotkania ze
                skarbnikiem.
            </p>
            <ul className="text-center">
                {treasurerDutySchedule.appointments.map((item, i) => (
                    <li key={i}>
                        <span>
                            {item.dayOfMonth}.{treasurerDutySchedule.month} w godzinach:{' '}
                            {item.startTime}-{item.endTime}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
