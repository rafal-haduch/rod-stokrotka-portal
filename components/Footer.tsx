export default function Footer() {
    return (
        <footer className="relative w-full">
            {/* trawa nad stopką */}
            <div className="absolute bottom-full left-0 w-full h-full bg-[url('/grass.png')] bg-repeat-x bg-bottom pointer-events-none"></div>

            {/* treść stopki */}
            <div className="relative bg-[#3a2b1d] text-white pt-16 pb-4">
                {/* nakładka ziemi */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/soil-texture.png')] bg-repeat-x bg-bottom pointer-events-none"></div>

                {/* tekst stopki */}
                <div className="relative text-center flex flex-col text-gray-200">
                    <span className="text-xl">
                        © 2025 Rodzinny Ogród Działkowy ,,Stokrotka" Sanok
                    </span>
                    <span className="">Realizacja: Rafał Haduch</span>
                </div>
            </div>
        </footer>
    );
}
