import { Download, ExternalLink, FileText } from 'lucide-react';

import { Document } from '@/content/data/documents';
import { NotFoundContent } from '@/components/not-found-content';

export default function ListOfDocuments({ documents }: { documents: Document[] }) {
    if (documents.length === 0) return <NotFoundContent />;

    return (
        <div className="mx-auto flex w-fit max-w-7xl justify-center px-4">
            <ul className="space-y-6 text-lg sm:space-y-1 sm:text-xl">
                {documents.map((item, i) => (
                    <li key={i} className="flex w-full py-2">
                        {/* Mobile view */}
                        <a
                            href={item.href}
                            download
                            className="flex w-fit items-center hover:underline sm:hidden"
                        >
                            <FileText size={32} color="var(--color-theme-divider)" />
                            {item.name}
                        </a>
                        {/* Desktop view */}
                        <div className="hidden w-full gap-4 sm:flex sm:justify-between">
                            <div className="flex items-center gap-1">
                                <FileText size={32} color="var(--color-theme-divider)" />
                                {item.name}
                            </div>
                            <div className="flex gap-4">
                                <a
                                    href={item.href}
                                    target="_blank"
                                    className="btn btn-md btn-theme-outline hidden lg:flex"
                                >
                                    <ExternalLink />
                                    Otwórz
                                </a>
                                <a
                                    href={item.href}
                                    download
                                    className="btn btn-md btn-theme-outline hidden sm:flex"
                                >
                                    <Download />
                                    Pobierz
                                </a>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
