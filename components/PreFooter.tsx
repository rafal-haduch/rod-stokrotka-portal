export default function PreFooter() {
    return (
        <section className="max-w-7xl mx-auto">
            {/* Background Image and Text */}
            <div
                className="w-full py-30 flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('/pre-footer-bg.jpg')",
                    backgroundAttachment: 'fixed',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                <h1 className="text-center text-9xl">Miłego dnia!</h1>
            </div>

            {/* Bottom Space */}
            <div className="w-full bg-sky-200 h-35"></div>
        </section>
    );
}
