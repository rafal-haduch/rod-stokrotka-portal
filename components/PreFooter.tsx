export default function PreFooter() {
    return (
        <section className="mx-auto max-w-7xl">
            {/* Background Image and Text */}
            <div
                className="flex w-full items-center justify-center py-45 text-gray-100"
                style={{
                    backgroundImage: "url('/pre-footer-bg.jpg')",
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <h1 className="text-center text-9xl">Miłego dnia!</h1>
            </div>
        </section>
    );
}
