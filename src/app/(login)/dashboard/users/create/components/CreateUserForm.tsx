'use client';

import { createUser } from '@/actions/user/create';
import { useState } from 'react';

export default function CreateUserForm() {
    const [result, setResult] = useState<null | {
        name: string;
        login: string;
        password: string;
    }>(null);

    async function action(formData: FormData) {
        const res = await createUser(formData);
        setResult(res);
    }

    return (
        <>
            <form action={action}>
                <label>Imię</label>
                <input name="name" required />

                <button type="submit" className="button-text">
                    Dodaj
                </button>
            </form>

            {result && (
                <div>
                    <p>
                        Użytkownik <strong>{result.name}</strong> został dodany
                    </p>
                    <p>
                        Login: <strong>{result.login}</strong>
                    </p>
                    <p>
                        Hasło: <strong>{result.password}</strong>
                    </p>
                </div>
            )}
        </>
    );
}
