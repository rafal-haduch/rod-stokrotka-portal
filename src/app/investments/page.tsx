import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import AnimatedH2 from '@/components/AnimatedH2';

import InvestmentsList from './components/InvestmentsList';

export default function InvestmentsPage() {
    return (
        <article>
            <header>
                <h1>Inwestycje</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimatedH2>Prace i modernizacje wykonane w naszym ogrodzie</AnimatedH2>
                <InvestmentsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
