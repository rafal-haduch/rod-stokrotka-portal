import ImageSeparator from '@/components/image-separator';
import MainHeaderLineSeparator from '@/components/main-header-line-separator';
import AnimatedH2 from '@/components/animated-h2';

import InvestmentsList from './_components/investments-list';

export default function InvestmentsPage() {
    return (
        <article>
            <header>
                <h1>Inwestycje</h1>
                <MainHeaderLineSeparator />
            </header>

            <section>
                <AnimatedH2 className="h2-animate">
                    <h2>Prace i modernizacje wykonane w naszym ogrodzie</h2>
                </AnimatedH2>
                <InvestmentsList />
            </section>

            <ImageSeparator />
        </article>
    );
}
