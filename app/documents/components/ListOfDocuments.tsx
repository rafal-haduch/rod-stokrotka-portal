export default function ListOfDocuments() {
    return (
        <ul className="flex max-w-4xl flex-col text-lg sm:text-xl">
            {/* Regulations */}
            <li className="flex w-full py-2">
                {/* Link for mobile, text for larger ones */}
                <a
                    href="/Regulamin_ROD_Stokrotka.pdf"
                    download
                    className="flex w-fit items-center hover:underline sm:hidden"
                >
                    <img src="/file_icon.svg" />
                    <span>Regulamin.pdf</span>
                </a>
                <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                    <img src="/file_icon.svg" />
                    <span>Regulamin.pdf</span>
                </div>
                {/* Buttons */}
                <div className="ml-auto flex gap-4">
                    <a
                        href="Regulamin_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="button-icon hidden lg:flex"
                    >
                        <img src="/open_green_24.svg" />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Regulamin_ROD_Stokrotka.pdf"
                        className="button-icon hidden sm:flex"
                    >
                        <img src="/download_green_24.svg" />
                        Pobierz
                    </a>
                </div>
            </li>
            {/* Statute */}
            <li className="flex w-full py-2">
                {/* Link for mobile, text for larger ones */}
                <a
                    href="/Statut_ROD_Stokrotka.pdf"
                    download
                    className="flex w-fit items-center hover:underline sm:hidden"
                >
                    <img src="/file_icon.svg" />
                    <span>Statut.pdf</span>
                </a>
                <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                    <img src="/file_icon.svg" />
                    <span>Statut.pdf</span>
                </div>
                {/* Buttons */}
                <div className="ml-auto flex gap-4">
                    <a
                        href="/Statut_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="button-icon hidden lg:flex"
                    >
                        <img src="/open_green_24.svg" />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Statut_ROD_Stokrotka.pdf"
                        className="button-icon hidden sm:flex"
                    >
                        <img src="/download_green_24.svg" />
                        Pobierz
                    </a>
                </div>
            </li>
            {/* Gardening Guide */}
            <li className="flex w-full py-2">
                {/* Link for mobile, text for larger ones */}
                <a
                    href="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    download
                    className="flex w-fit items-center hover:underline sm:hidden"
                >
                    <img src="/file_icon.svg" />
                    <span>Plan_Zagospodarowania.pdf</span>
                </a>
                <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                    <img src="/file_icon.svg" />
                    <span>Plan_Zagospodarowania.pdf</span>
                </div>
                {/* Buttons */}
                <div className="ml-auto flex gap-4">
                    <a
                        href="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="button-icon hidden lg:flex"
                    >
                        <img src="/open_green_24.svg" />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                        className="button-icon hidden sm:flex"
                    >
                        <img src="/download_green_24.svg" />
                        Pobierz
                    </a>
                </div>
            </li>
            {/* Minutes of the 2025 Meeting */}
            <li className="flex w-full py-2">
                {/* Link for mobile, text for larger ones */}
                <a
                    href="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                    download
                    className="flex w-fit items-center hover:underline sm:hidden"
                >
                    <img src="/file_icon.svg" />
                    <span>Protokół_Zebrania_17.05.2025.pdf</span>
                </a>
                <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                    <img src="/file_icon.svg" />
                    <span>Protokół_Zebrania_17.05.2025.pdf</span>
                </div>
                {/* Buttons */}
                <div className="ml-auto flex gap-4">
                    <a href="/regulamin.pdf" target="_blank" className="button-icon hidden lg:flex">
                        <img src="/open_green_24.svg" />
                        Otwórz
                    </a>
                    <a href="regulamin.pdf" className="button-icon hidden sm:flex">
                        <img src="/download_green_24.svg" />
                        Pobierz
                    </a>
                </div>
            </li>
        </ul>
    );
}
