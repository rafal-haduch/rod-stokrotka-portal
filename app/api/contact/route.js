import nodemailer from 'nodemailer';
//NOTE: Remove it before deploying to production.
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

export async function POST(req) {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
        return new Response(
            JSON.stringify({
                ok: false,
                error: 'Wymagane jest wypłenienie wszystkich pól formularza kontaktowego!',
            }),
            { status: 400 }
        );
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_ASSOCIATION,
            pass: process.env.MAIL_PASS,
        },
    });

    // Message to the board
    try {
        await transporter.sendMail({
            from: process.env.MAIL_ASSOCIATION,
            to: process.env.MAIL_ASSOCIATION,
            replyTo: email,
            subject: `Formularz kontaktowy - ${name}, ${subject}.`,
            text: message,
        });
    } catch (err) {
        console.error('Błąd przy wysyłce maila do zarządu:', err);
        return new Response(
            JSON.stringify({
                ok: false,
                error: 'Nie udało się wysłać wiadomości do zarządu. Spróbuj ponownie lub skontaktuj się z Administratorem strony.',
            }),
            { status: 500 }
        );
    }

    // Automatic reply to sender
    try {
        await transporter.sendMail({
            from: process.env.MAIL_ASSOCIATION,
            to: email,
            subject:
                'Potwierdzenie otrzymania wiadomości z formularza kontaktowego - ROD Stokrotka Sanok',
            html: `
                <p>Dziękujemy za kontakt z Zarządem Stowarzyszenia Ogrodowego "Stokrotka" w Sanoku.</br>
                </br>
                <p>To jest automatyczna odpowiedź potwierdzająca, że dotarła do nas Twoja wiadomość:</p>
                <p style="margin-left:15px; font-style:italic; color:#555;">
                <strong>Temat: </strong>${subject}<br/><br/>
                <strong>Treść: </strong>
                ${message}
                </p>
                <p>
                Postaramy się odpowiedzieć najszybciej, jak to możliwe.<br/>
                Pozdrawiamy,<br/>
                <strong>Zarząd Stowarzyszenia Ogrodowego "Stokrotka" Sanok</strong>
                `,
        });
    } catch (err) {
        console.error('Błąd przy wysyłce potwierdzenia do nadawcy:', err);
        return new Response(
            JSON.stringify({
                ok: false,
                error: 'Nie udało się wysłać potwierdzenia do nadawcy. Spróbuj ponownie lub skontaktuj się z Administratorem strony.',
            }),
            { status: 500 }
        );
    }

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
