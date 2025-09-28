import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';
import WorkInProgress from '@/components/WorkInProgress';

export default function PaymentsPage() {
    return (
        <article>
            <h1>Opłaty</h1>
            <LineSeparator />
            <h2>Informacje dotyczące płatności za użytkowanie ogrodu</h2>
            <section>
                <WorkInProgress />
            </section>
            <ImageSeparator />
        </article>
    );
}
