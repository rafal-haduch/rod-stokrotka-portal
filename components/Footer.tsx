export default function Footer() {
    return (
        <div className="relative w-full">
            {/* trawa nad stopką */}
            <div className="absolute -top-full left-0 w-full h-full bg-[url('/grass.png')] bg-repeat-x bg-bottom pointer-events-none"></div>

            {/* treść stopki */}
            <div className="relative bg-[#3a2b1d] text-white pt-16 pb-8">
                {/* nakładka ziemi */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/soil-texture.png')] bg-repeat-x bg-bottom pointer-events-none z-0"></div>

                {/* tekst stopki */}
                <div className="relative z-10">
                    <p className="text-center text-sm">
                        © 2025 Ogrody Działkowe Stokrotka Sanok
                    </p>
                    <p className="text-center text-sm">
                        Realizacja: Rafał Haduch
                    </p>
                </div>
            </div>
        </div>
    );
}
