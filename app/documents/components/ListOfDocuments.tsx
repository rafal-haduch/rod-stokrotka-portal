export default function ListOfDocuments() {
    return (
        <ul className="flex flex-col w-2xl">
            <li className="flex justify-between py-2 w-full">
                <div className="flex items-center gap-2">
                    <img src="/file_icon.svg" />
                    <span>Regulamin.pdf</span>
                </div>
                <div className="flex gap-6">
                    <a
                        href="Regulamin_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/open_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/open_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Regulamin_ROD_Stokrotka.pdf"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/download_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/download_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Pobierz
                    </a>
                </div>
            </li>
            <li className="flex justify-between  py-2 w-full">
                <div className="flex items-center gap-2">
                    <img src="/file_icon.svg" />
                    <span>Statut.pdf</span>
                </div>
                <div className="flex gap-6">
                    <a
                        href="/Statut_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/open_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/open_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Statut_ROD_Stokrotka.pdf"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/download_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/download_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Pobierz
                    </a>
                </div>
            </li>
            <li className="flex justify-between py-2 w-full">
                <div className="flex items-center gap-2">
                    <img src="/file_icon.svg" />
                    <span>Plan_Zagospodarowania.pdf</span>
                </div>
                <div className="flex gap-6">
                    <a
                        href="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                        target="_blank"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/open_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/open_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Otwórz
                    </a>
                    <a
                        href="/#"
                        download="/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/download_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/download_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Pobierz
                    </a>
                </div>
            </li>
            <li className="flex justify-between  py-2 w-full">
                <div className="flex items-center gap-2">
                    <img src="/file_icon.svg" />
                    <span>Protokół_Zebrania_17.05.2025.pdf</span>
                </div>
                <div className="flex gap-6">
                    <a
                        href="regulamin.pdf"
                        target="_blank"
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/open_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/open_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Otwórz
                    </a>
                    <a
                        href="regulamin.pdf"
                        download
                        className="group inline-flex items-center px-6 py-3 gap-1 bg-green-500 text-white rounded-lg border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition"
                    >
                        <img
                            src="/download_icon_white.svg"
                            className="group-hover:hidden"
                        />
                        <img
                            src="/download_icon_green.svg"
                            className="hidden group-hover:block"
                        />
                        Pobierz
                    </a>
                </div>
            </li>
        </ul>
    );
}
