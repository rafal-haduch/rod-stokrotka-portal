export default function PreFooter() {
    return (
        <section
            aria-hidden="true"
            className="mx-auto max-w-7xl overflow-hidden bg-cover bg-fixed bg-center"
            style={{ backgroundImage: "url('/assets/pre-footer-bg.jpg')" }}
        >
            <div className="flex w-full items-center justify-center bg-black/30 py-52">
                <p className="text-stroke font-heading text-center text-9xl text-gray-50">
                    Miłego dnia!
                </p>
            </div>
        </section>
    );
}
