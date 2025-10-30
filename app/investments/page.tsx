import ImageSeparator from '@/components/ImageSeparator';
import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import WorkInProgress from '@/components/WorkInProgress';
import InvestmentsList from './components/InvestmentsList';

export default function CompletedProjectsPage() {
    return (
        <article>
            <h1>Inwestycje</h1>
            <MainHeaderLineSeparator />
            <h2>Prace i modernizacje wykonane w naszym ogrodzie</h2>
            <section>
                <InvestmentsList />
            </section>
            <ImageSeparator />
        </article>
    );
}
