'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { Eye, EyeOff } from 'lucide-react';

import { ROUTES } from '@/config/routes';
import { CustomButton } from '@/components/custom-button';

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
                    className="input-form"
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
                        className="input-form"
                    />
                    <button
                        type="button"
                        title={showPassword ? 'Ukryj hasło' : 'Pokaż hasło'}
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-theme-ui-foreground-primary absolute inset-y-0 right-0 flex items-center px-3 hover:cursor-pointer"
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
                <CustomButton
                    type="submit"
                    size="lg"
                    variant="primary"
                    className="mx-auto w-full"
                    onClick={() => setMessage('')}
                >
                    Zaloguj
                </CustomButton>
            </div>
        </form>
    );
}
