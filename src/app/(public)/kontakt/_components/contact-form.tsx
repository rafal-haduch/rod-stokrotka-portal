'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronUp, SendHorizontal } from 'lucide-react';

import Popup from '@/components/popup';

export default function ContactForm() {
    const shortText = (
        <>
            Potrzebujesz skontaktować się z Zarządem ROD Stokrotka w Sanoku? <br />
        </>
    );
    const fullText = (
        <>
            {shortText}
            Wypełnij formularz poniżej – to najszybszy i najwygodniejszy sposób kontaktu. <br />
            Odpowiedź otrzymasz na podany adres e-mail.
        </>
    );

    const [isMobile, setIsMobile] = useState(true);
    const [expanded, setExpanded] = useState(false);

    const [nickname, setNickname] = useState(''); // anti-bot protection
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    // Check screen width
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 830);
        checkScreen();
        window.addEventListener('resize', checkScreen);
        return () => window.removeEventListener('resize', checkScreen);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nickname, name, email, subject, message }),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                setStatus('error');
                setErrorMsg(data.error || 'Nie udało się wysłać wiadomości.');
                return;
            }

            setStatus('success');
            setNickname('');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (err) {
            console.error(err);
            setStatus('error');
            setErrorMsg('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
            <Popup type="error" message={` ${errorMsg}`} onClose={() => setStatus('idle')} />;
        }
    };
    // TODO: group className with cn()
    return (
        <>
            <p className="text-lfet sm:text-center">
                {isMobile ? (expanded ? fullText : shortText) : fullText}
            </p>

            {isMobile && (
                <button
                    title="Czytaj więcej."
                    className="text-theme-hr mx-auto flex items-center justify-center hover:cursor-pointer"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? <ChevronUp size={64} /> : <ChevronDown size={64} />}
                </button>
            )}

            <form
                onSubmit={handleSubmit}
                className="bg-theme-bg-secondary mx-auto mb-8 max-w-3xl space-y-4 rounded-xl p-8 shadow-xl sm:mt-4"
            >
                {/* NOTE: Nickname - anti-bot protection */}
                <div className="hidden">
                    <label htmlFor="nickname" className="text-theme-txt block text-xl">
                        Nazwa działkowca
                    </label>
                    <input
                        type="text"
                        id="nickname"
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        placeholder="np. Ogrodnik"
                        className="border-theme-200 bg-theme-bg-primary focus:border-theme-ui-border-dark mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                    />
                </div>

                {/* User Name */}
                <div>
                    <label htmlFor="name" className="text-theme-txt block text-xl">
                        Imię i nazwisko (opcjonalnie numer działki)
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="np. Jan Kowalski - 123"
                        className="border-theme-200 bg-theme-bg-primary focus:border-theme-ui-border-dark mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                    />
                </div>

                {/* User E-mail */}
                <div>
                    <label htmlFor="email" className="text-theme-txt block text-xl">
                        Twój adres e-mail
                    </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="np. jankowalski@gmail.com"
                        className="border-theme-200 bg-theme-bg-primary focus:border-theme-ui-border-dark mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                    />
                </div>

                {/* Subject */}
                <div>
                    <label className="text-theme-txt block text-xl">Temat wiadomości</label>
                    <div className="relative mt-1">
                        <input
                            type="text"
                            id="title"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            required
                            placeholder="np. Pytanie w sprawie działki"
                            className="border-theme-200 bg-theme-bg-primary focus:border-theme-ui-border-dark block w-full rounded-md border px-3 py-2 pr-10 shadow-sm focus:outline-none"
                        />
                    </div>
                </div>

                {/* Message */}
                <div>
                    <label htmlFor="content" className="text-theme-txt block text-xl">
                        Treść wiadomości
                    </label>
                    <div className="relative mt-1">
                        <textarea
                            id="content"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            rows={6}
                            className="border-theme-200 bg-theme-bg-primary focus:border-theme-ui-border-dark block w-full resize-none overflow-y-auto rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                        />
                    </div>
                </div>

                {/* Send Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn btn-lg btn-theme mx-auto w-1/2"
                >
                    <span>{status === 'loading' ? 'Wysyłanie...' : 'Wyślij'}</span>
                    <SendHorizontal />
                </button>
            </form>

            <div>
                <h3 className="text-left sm:text-center">Zgoda na przetwarzanie danych:</h3>
                <p className="text-left sm:text-center">
                    Wysyłając wiadomość, wyrażam zgodę na przetwarzanie moich danych osobowych
                    podanych w formularzu kontaktowym przez Stowarzyszenie Ogrodowe „Stokrotka” w
                    Sanoku w celu udzielenia odpowiedzi na wiadomość. Znam zasady przetwarzania
                    danych opisane w{' '}
                    <Link href="/privacy-policy" className="link-context">
                        Polityce prywatności
                    </Link>
                    .
                </p>
            </div>

            {/* Popups loading */}
            {status === 'loading' && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                    <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-2xl">
                        <h2 className="mb-4 text-xl font-bold text-green-500">
                            Wysyłanie wiadomości
                        </h2>
                        <div className="flex justify-center">
                            <div className="h-10 w-10 animate-spin rounded-full border-4 border-lime-400 border-t-transparent"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* Popups success */}
            {status === 'success' && (
                <Popup
                    type="success"
                    message="Wiadomość została wysłana pomyślnie!"
                    onClose={() => setStatus('idle')}
                />
            )}

            {/* Popups failed */}
            {status === 'error' && (
                <Popup type="error" message={` ${errorMsg}`} onClose={() => setStatus('idle')} />
            )}
        </>
    );
}
