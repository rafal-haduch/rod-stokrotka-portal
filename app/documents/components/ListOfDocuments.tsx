import { Download, ExternalLink, FileText } from 'lucide-react';

// TODO: change to map, and semantic tags
export default function ListOfDocuments() {
    return (
        <div className="flex justify-center">
            <ul className="flex max-w-4xl flex-col space-y-6 text-lg sm:space-y-1 sm:text-xl">
                {/* Regulations */}
                <li className="flex w-full py-2">
                    {/* Link for mobile, text for larger ones */}
                    <a
                        href="/documents/Regulamin_ROD_Stokrotka.pdf"
                        download
                        className="flex w-fit items-center hover:underline sm:hidden"
                    >
                        <FileText size={32} color="lightgreen" />
                        Regulamin.pdf
                    </a>
                    <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                        <FileText size={32} color="lightgreen" />
                        Regulamin.pdf
                    </div>
                    {/* Buttons */}
                    <div className="ml-auto flex gap-4">
                        <a
                            href="/documents/Regulamin_ROD_Stokrotka.pdf"
                            target="_blank"
                            className="button-icon hidden lg:flex"
                        >
                            <ExternalLink />
                            Otwórz
                        </a>
                        <a
                            href="/#"
                            download="/documents/Regulamin_ROD_Stokrotka.pdf"
                            className="button-icon hidden sm:flex"
                        >
                            <Download />
                            Pobierz
                        </a>
                    </div>
                </li>
                {/* Statute */}
                <li className="flex w-full py-2">
                    {/* Link for mobile, text for larger ones */}
                    <a
                        href="/documents/Statut_ROD_Stokrotka.pdf"
                        download
                        className="flex w-fit items-center hover:underline sm:hidden"
                    >
                        <FileText size={32} color="lightgreen" />
                        <span>Statut.pdf</span>
                    </a>
                    <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                        <FileText size={32} color="lightgreen" />
                        <span>Statut.pdf</span>
                    </div>
                    {/* Buttons */}
                    <div className="ml-auto flex gap-4">
                        <a
                            href="/documents/Statut_ROD_Stokrotka.pdf"
                            target="_blank"
                            className="button-icon hidden lg:flex"
                        >
                            <ExternalLink />
                            Otwórz
                        </a>
                        <a
                            href="/#"
                            download="/documents/Statut_ROD_Stokrotka.pdf"
                            className="button-icon hidden sm:flex"
                        >
                            <Download />
                            Pobierz
                        </a>
                    </div>
                </li>
                {/* Gardening Guide */}
                <li className="flex w-full py-2">
                    {/* Link for mobile, text for larger ones */}
                    <a
                        href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                        download
                        className="flex w-fit items-center hover:underline sm:hidden"
                    >
                        <FileText size={32} color="lightgreen" />
                        <span>Plan_Zagospodarowania.pdf</span>
                    </a>
                    <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                        <FileText size={32} color="lightgreen" />
                        <span>Plan_Zagospodarowania.pdf</span>
                    </div>
                    {/* Buttons */}
                    <div className="ml-auto flex gap-4">
                        <a
                            href="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                            target="_blank"
                            className="button-icon hidden lg:flex"
                        >
                            <ExternalLink />
                            Otwórz
                        </a>
                        <a
                            href="/#"
                            download="/documents/Plan_Zagospodarowania_ROD_Stokrotka.pdf"
                            className="button-icon hidden sm:flex"
                        >
                            <Download />
                            Pobierz
                        </a>
                    </div>
                </li>
                {/* Minutes of the 2025 Meeting */}
                <li className="flex w-full py-2">
                    {/* Link for mobile, text for larger ones */}
                    <a
                        href="/documents/Protokół_Zebrania_17.05.2025.pdf"
                        download
                        className="flex w-fit items-center hover:underline sm:hidden"
                    >
                        <FileText size={32} color="lightgreen" />
                        <span>Protokół_Zebrania_17.05.2025.pdf</span>
                    </a>
                    <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                        <FileText size={32} color="lightgreen" />
                        <span>Protokół_Zebrania_17.05.2025.pdf</span>
                    </div>
                    {/* Buttons */}
                    <div className="ml-auto flex gap-4">
                        <a
                            href="/documents/Protokol_Zebrania_17.05.2025.pdf"
                            target="_blank"
                            className="button-icon hidden lg:flex"
                        >
                            <ExternalLink />
                            Otwórz
                        </a>
                        <a
                            href="/#"
                            download="/documents/Protokol_Zebrania_17.05.2025"
                            className="button-icon hidden sm:flex"
                        >
                            <Download />
                            Pobierz
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    );
}
