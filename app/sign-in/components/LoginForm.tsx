'use client';

import LineSeparator from '@/components/LineSeparator';
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
        <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg">
            <h1 className=" text-center">Zaloguj się</h1>
            <hr className="my-8 border-t-3 border-green-500 w-3/4 mx-auto" />
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Login */}
                <div>
                    <label
                        htmlFor="login"
                        className="block text-xl text-gray-700"
                    >
                        Login
                    </label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    />
                </div>

                {/* Password */}
                <div>
                    <label
                        htmlFor="password"
                        className="block text-xl text-gray-700"
                    >
                        Hasło
                    </label>
                    <div className="mt-1 relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500"
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
                <div className="flex justify-end text-sm">
                    <a
                        href="/forgot-password"
                        className="text-green-500 hover:underline"
                    >
                        Zapomniałem hasła
                    </a>
                </div>

                {/* Sign-in Button*/}
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition font-medium"
                >
                    Zaloguj
                </button>
            </form>
        </div>
    );
}
