import { Download, ExternalLink, FileText } from 'lucide-react';

import { DownloadableDocument } from '@/content/documents';
import { NotFoundContent } from '@/components/layout/not-found-content';
import { CustomButton } from '@/components/ui/custom-button';

interface ListOfDocumentsProps {
    documents: ReadonlyArray<DownloadableDocument>;
}

export default function ListOfDocuments({ documents }: ListOfDocumentsProps) {
    if (documents.length === 0) return <NotFoundContent />;

    return (
        <div className="mx-auto flex w-fit justify-center">
            <ul className="space-y-6 text-lg sm:space-y-1 sm:text-xl">
                {documents.map((item, i) => (
                    <li key={i} className="flex w-full py-2">
                        {/* Mobile View */}
                        <a
                            href={item.href}
                            download
                            className="flex w-fit items-center hover:underline sm:hidden"
                        >
                            <FileText size={32} color="var(--color-theme-divider)" />
                            {item.title}
                        </a>
                        {/* Desktop View */}
                        <div className="hidden w-full gap-4 sm:flex sm:justify-between">
                            <div className="flex items-center gap-1">
                                <FileText size={32} color="var(--color-theme-divider)" />
                                {item.title}
                            </div>
                            <div className="flex gap-4">
                                <CustomButton
                                    href={item.href}
                                    external
                                    target="_blank"
                                    variant="outline"
                                    size="md"
                                    className="hidden lg:flex"
                                >
                                    <ExternalLink />
                                    Otwórz
                                </CustomButton>
                                <CustomButton
                                    href={item.href}
                                    external
                                    download
                                    variant="outline"
                                    size="md"
                                    className="hidden sm:flex"
                                >
                                    <Download />
                                    Pobierz
                                </CustomButton>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
