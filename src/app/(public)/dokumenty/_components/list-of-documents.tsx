import { Download, ExternalLink, FileText } from 'lucide-react';

import { Document } from '@/content/data/documents';
import NotFoundContent from '@/components/not-found-content';

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
                            <FileText size={32} color="var(--color-theme-ui-bg-dark)" />

                            {item.name}
                        </a>
                        {/* Desktop */}
                        <div className="mr-6 hidden items-center sm:flex sm:gap-2">
                            <FileText size={32} color="var(--color-theme-ui-bg-dark)" />
                            {item.name}
                        </div>
                        {/* Buttons */}
                        <div className="ml-auto flex gap-4">
                            <a
                                href={item.href}
                                target="_blank"
                                className="btn btn-md btn-theme hidden lg:flex"
                            >
                                <ExternalLink />
                                Otwórz
                            </a>
                            <a
                                href={item.href}
                                download
                                className="btn btn-md btn-theme hidden sm:flex"
                            >
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
