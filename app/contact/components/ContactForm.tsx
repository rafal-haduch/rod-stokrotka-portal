'use client';
import Popup from '@/components/Popup';
import { associationEmail } from '@/data';
import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // add here sign-in logic, f.e. fetch into API
        console.log({ email: userEmail, title: name + ' - ' + title, content: content });
        setShowPopup(true);
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
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        //required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                    />
                </div>
                {/* Title */}
                <div>
                    <label className="block text-xl text-gray-700">Temat</label>
                    <div className="relative mt-1">
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            //required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                    </div>
                </div>
                {/* Content */}
                <div>
                    <label htmlFor="content" className="block text-xl text-gray-700">
                        Treść wiadomości
                    </label>
                    <div className="relative mt-1">
                        <textarea
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            //required
                            rows={6}
                            className="block w-full overflow-y-auto rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                    </div>
                </div>
                {/* Send Button */}
                <button type="submit" className="button-icon w-full">
                    <img src="/icons/send_green_24.svg" />
                    <span>Wyślij</span>
                </button>
            </form>
            {/* Popup function unavailable */}
            {showPopup && (
                <Popup
                    message={`Funkcja wysyłania wiadomości przez formularz kontaktowy nie jest jeszcze dostępna. Trwają prace nad jej przygotowaniem. 
                        W przypadku chęci skontaktowania się mailowo z Zarządem Stowarzyszenia prosimy we własnym zakresie napisać wiadomość na adres: ${associationEmail}`}
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}
