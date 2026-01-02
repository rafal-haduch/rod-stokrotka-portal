import Link from 'next/link';

import MainHeaderLineSeparator from './MainHeaderLineSeparator';

export default function DashboardPanelHeader() {
    return (
        <header className="bg-theme-ui-bg-light relative mx-auto flex w-full max-w-5xl flex-col justify-between rounded-lg p-4 shadow-md">
            {/* Top Section */}
            <div className="w-full">
                <Link href="/dashboard">
                    <h1>Panel Zarządu</h1>
                </Link>
            </div>
            <MainHeaderLineSeparator />
            {/* Bottom Section */}
            <nav>
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3">
                    <li>
                        <Link href="/dashboard/users" className="hover:underline">
                            Tabela Działkowców
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/plots" className="hover:underline">
                            Tabela działek
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/fees" className="hover:underline">
                            Tabela opłat
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/payments" className="hover:underline">
                            Płatności
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/annoucements" className="hover:underline">
                            Ogłoszenia
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/documents" className="hover:underline">
                            Dokumenty
                        </Link>
                    </li>
                    <li>
                        <Link href="/dashboard/surveys" className="hover:underline">
                            Ankiety
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
