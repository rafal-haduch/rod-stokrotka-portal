'use client';

import MainHeaderLineSeparator from '@/components/MainHeaderLineSeparator';
import { useState } from 'react';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // add here sign-in logic, f.e. fetch into API
        console.log({ login, password });
    };

    return (
        <div className="mx-auto mt-10 max-w-md rounded-xl bg-gray-50 p-8 shadow-xl">
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
                        required
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
                            required
                            className="block w-full rounded-md border border-gray-300 px-3 py-2 pr-10 shadow-sm focus:border-green-500 focus:ring-green-500 focus:outline-none"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
                        >
                            {showPassword ? (
                                <img src="/visibility-off_icon.svg" />
                            ) : (
                                <img src="/visibility-on_icon.svg" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Forgot Password */}
                <div className="flex justify-end text-lg">
                    <a href="/forgot-password" className="text-lime-500 hover:underline">
                        Zapomniałem hasła
                    </a>
                </div>

                {/* Sign-in Button*/}
                <button type="submit" className="button-text w-full">
                    Zaloguj
                </button>
            </form>
        </div>
    );
}
