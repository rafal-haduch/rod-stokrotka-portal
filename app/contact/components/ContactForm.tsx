'use client';

import LineSeparator from '@/components/LineSeparator';
import { useState } from 'react';

export default function ContactForm() {
    const [userEmail, setUserEmail] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // add here sign-in logic, f.e. fetch into API
        console.log({ email: userEmail, title: title, content: content });
    };

    return (
        <div className="mx-auto mt-10 max-w-3xl min-w-sm rounded-xl bg-gray-50 p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-4">
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
                        required
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
                            required
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
                        <input
                            type="text"
                            id="content"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                            className="block h-30 w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Send Button*/}
                <button
                    type="submit"
                    className="w-full rounded-lg border-2 border-green-500 bg-green-500 px-4 py-2 font-medium text-white transition hover:cursor-pointer hover:bg-transparent hover:text-green-500"
                >
                    Wyślij
                </button>
            </form>
        </div>
    );
}
