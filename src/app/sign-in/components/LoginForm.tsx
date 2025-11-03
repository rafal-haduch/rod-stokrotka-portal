'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import Popup from '@/components/Popup';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowPopup(true);
    };

    return (
        <div className="mx-auto mt-4 max-w-md rounded-xl bg-gray-50 p-8 pb-4 shadow-xl">
            <h1 className="text-center">Zaloguj się</h1>
            <hr className="mx-auto my-8 w-3/4 border-t-4 border-lime-400" />
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Login */}
                <div>
                    <label htmlFor="login" className="block text-xl">
                        Login
                    </label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        //required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-xl">
                        Hasło
                    </label>
                    <div className="relative mt-1">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            //required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                        <button
                            type="button"
                            title={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-lime-500 hover:cursor-pointer"
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                </div>

                {/* Forgot Password */}
                <div className="text-lg">
                    <a href="/forgot-password" className="text-lime-500 hover:underline">
                        Zapomniałem hasła
                    </a>
                </div>
                {/* Sign-in Button */}
                <button type="submit" className="button-text m-0 mb-4 w-full">
                    Zaloguj
                </button>

                {/* Message placeholder */}
                <div className="flex min-h-[2rem] items-center justify-center">
                    {message && <p className="text-md text-center text-red-500">{message}</p>}
                </div>
            </form>
            {/* Popup function unavailable */}
            {showPopup && (
                <Popup
                    type="info"
                    message="Funkcja logowania nie jest jeszcze dostępna. Trwają prace nad jej przygotowaniem."
                    onClose={() => setShowPopup(false)}
                />
            )}
        </div>
    );
}
