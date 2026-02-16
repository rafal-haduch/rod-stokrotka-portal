import { prisma } from '@/lib/prisma';
import { getUserSession } from '@/lib/auth/get-user-session';
import { buildMetadata } from '@/lib/metadata';
import { ROUTES } from '@/constants/routes';

export const metadata = buildMetadata(ROUTES.MY_PAYMENTS);

export default async function PaymentsUserPage() {
    const user = await getUserSession();
    // const userPayments = await prisma.payment.findMany({
    //     where: {
    //         plot: {
    //             ownerId: user.id,
    //         },
    //     },
    //     include: {
    //         plot: true,
    //     },
    // });

    return (
        <section>
            <h2>Płatności</h2>
            <div>
                {/* {userPayments.length > 0 ? (
                    userPayments.map((payment) => (
                        <div key={payment.id}>
                            <p>Działka: {payment.plot.number}</p>
                            <p>Rok: {payment.year}</p>
                            <p>Status: {payment.paid ? 'Opłacone' : 'Nieopłacone'}</p>
                            <p>Kwota: {payment.totalAmount} zł</p>
                        </div>
                    ))
                ) : (
                    <p>Brak dostępnych płatności.</p>
                )} */}
            </div>
        </section>
    );
}
