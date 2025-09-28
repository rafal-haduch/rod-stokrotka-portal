import ImageSeparator from '@/components/ImageSeparator';
import LineSeparator from '@/components/LineSeparator';

export default function DevelopmentPlanPage() {
    return (
        <article>
            <h1>Mapa Ogrodu</h1>
            <LineSeparator />
            <h2>Podgląd zagospodarowania terenu</h2>
            <section className="flex flex-col items-center">
                <img src="/mapa-ogrodu.png" className="w-xl" />
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
                    Pobierz szczegółowy plan
                </a>
                <ImageSeparator />
            </section>
        </article>
    );
}
