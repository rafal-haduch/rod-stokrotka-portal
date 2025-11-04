import { Download, ExternalLink, FileText } from 'lucide-react';

import { Document } from '@/data/documents';
import NotFoundContent from '@/components/NotFoundContent';

export default function ListOfDocuments({ documents }: { documents: Document[] }) {
    if (documents.length === 0) return <NotFoundContent />;

    return (
        <div className="flex justify-center">
            <ul className="flex max-w-4xl flex-col space-y-6 text-lg sm:space-y-1 sm:text-xl">
                {documents.map((item, i) => (
                    <li key={i} className="flex w-full py-2">
                        {/* Mobile */}
                        <a
                            href={item.href}
                            download
                            className="flex w-fit items-center hover:underline sm:hidden"
                        >
                            <FileText size={32} color="lightgreen" />
                            {item.name}
                        </a>
                        {/* Desktop */}
                        <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                            <FileText size={32} color="lightgreen" />
                            {item.name}
                        </div>
                        {/* Buttons */}
                        <div className="ml-auto flex gap-4">
                            <a
                                href={item.href}
                                target="_blank"
                                className="button-icon hidden lg:flex"
                            >
                                <ExternalLink />
                                Otwórz
                            </a>
                            <a href={item.href} download className="button-icon hidden sm:flex">
                                <Download />
                                Pobierz
                            </a>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
