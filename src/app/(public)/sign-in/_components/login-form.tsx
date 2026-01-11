'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff } from 'lucide-react';

import { ROUTES } from '@/constants/routes';

export default function LoginForm() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const loginResult = await signIn('credentials', {
            redirect: false,
            login: login,
            password: password,
        });
        if (loginResult?.error) {
            if (loginResult.status >= 400 && loginResult.status < 500)
                setMessage('Nieprawidłowy login lub hasło!');
            else setMessage('Błąd logowania!');
        } else if (loginResult?.ok) {
            setMessage('');
            window.location.href = ROUTES.MY_PROFILE.path;
        }
    };

    return (
        <div className="bg-theme-bg-secondary mx-auto mt-4 max-w-md rounded-xl p-8 shadow-xl">
            <h1 className="text-theme-txt text-center">Zaloguj się</h1>
            <hr className="border-theme-hr mx-auto my-8 w-3/4 border-t-4" />
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Login */}
                <div>
                    <label htmlFor="login" className="text-theme-txt block text-xl">
                        Login
                    </label>
                    <input
                        type="text"
                        id="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        required
                        className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:outline-none"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="text-theme-txt block text-xl">
                        Hasło
                    </label>
                    <div className="relative mt-1">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="border-theme-200 focus:border-theme-ui-border-dark bg-theme-bg-primary block w-full rounded-md border px-3 py-2 pr-10 shadow-sm focus:outline-none"
                        />
                        <button
                            type="button"
                            title={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-theme-txt absolute inset-y-0 right-0 flex items-center px-3 hover:cursor-pointer"
                        >
                            {showPassword ? <EyeOff /> : <Eye />}
                        </button>
                    </div>
                </div>

                <div>
                    {/* Message placeholder */}
                    <div className="flex min-h-6 items-center justify-center">
                        {message && <p className="text-center text-base text-red-500">{message}</p>}
                    </div>

                    {/* Sign-in Button */}
                    <button
                        type="submit"
                        onClick={() => setMessage('')}
                        className="btn btn-lg btn-theme mx-auto w-full"
                    >
                        Zaloguj
                    </button>
                </div>
            </form>
        </div>
    );
}
