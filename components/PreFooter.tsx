export default function PreFooter() {
    return (
        <section className="max-w-7xl mx-auto">
            {/* Sekcja z tłem i tekstem */}
            <div
                className="w-full py-40 flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/pre-footer-bg.jpg')",
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <h1 className="text-center">Miłego dnia!</h1>
            </div>

            {/* Bottom blue space */}
            <div className="w-full bg-blue-300 h-35"></div>
        </section>
    );
}
