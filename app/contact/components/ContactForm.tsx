'use client';
import Popup from '@/components/Popup';
import { associationEmail } from '@/data';
import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const data = await res.json();

            if (!res.ok || !data.ok) {
                setStatus('error');
                setErrorMsg(data.error || 'Nie udało się wysłać wiadomości.');
                return;
            }

            // success
            setStatus('success');
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

    return (
        <div className="mx-auto mt-10 max-w-3xl rounded-xl bg-gray-50 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* User Name */}
                <div>
                    <label htmlFor="name" className="block text-xl text-gray-700">
                        Imię i nazwisko (opcjonalnie numer działki)
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        //required
                        placeholder="np. Jan Kowalski - 123"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                    />
                </div>
                {/* User E-mail */}
                <div>
                    <label htmlFor="email" className="block text-xl text-gray-700">
                        Twój adres e-mail
                    </label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        //required
                        placeholder="np. jankowalski@gmail.com"
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                    />
                </div>
                {/* Subject */}
                <div>
                    <label className="block text-xl text-gray-700">Temat wiadomości</label>
                    <div className="relative mt-1">
                        <input
                            type="text"
                            id="title"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            //required
                            placeholder="np. Pytanie w sprawie działki"
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                    </div>
                </div>
                {/* Message */}
                <div>
                    <label htmlFor="content" className="block text-xl text-gray-700">
                        Treść wiadomości
                    </label>
                    <div className="relative mt-1">
                        <textarea
                            id="content"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            //required
                            rows={6}
                            className="block w-full resize-none overflow-y-auto rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                    </div>
                </div>
                {/* Send Button */}
                <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="button-icon w-full"
                >
                    <img src="/icons/send_green_24.svg" />
                    <span>{status === 'loading' ? 'Wysyłanie...' : 'Wyślij'}</span>
                </button>
            </form>
            {/* Popups */}
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
            {status === 'success' && (
                <Popup
                    type="success"
                    message="Wiadomość została wysłana pomyślnie!"
                    onClose={() => setStatus('idle')}
                />
            )}
            {status === 'error' && (
                <Popup type="error" message={` ${errorMsg}`} onClose={() => setStatus('idle')} />
            )}
            {/* Popup function unavailable */}
            {showPopup && (
                <Popup
                    type="info"
                    message={`Funkcja wysyłania wiadomości przez formularz kontaktowy nie jest jeszcze dostępna. Trwają prace nad jej przygotowaniem. 
                        W przypadku chęci skontaktowania się mailowo z Zarządem Stowarzyszenia prosimy we własnym zakresie napisać wiadomość na adres: ${associationEmail}`}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}
