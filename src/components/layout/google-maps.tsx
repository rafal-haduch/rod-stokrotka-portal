export default function GoogleMaps() {
    return (
        <div className="flex w-full items-center justify-center">
            <div className="relative h-112.5 w-full max-w-4xl overflow-hidden rounded-2xl shadow-xl">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3168.6842718911707!2d22.19450198259789!3d49.54717032647384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDnCsDMyJzUzLjgiTiAyMsKwMTEnNTUuMSJF!5e0!3m2!1spl!2spl!4v1759698640663!5m2!1spl!2spl"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute top-0 left-0 h-full w-full border-0"
                ></iframe>
            </div>
        </div>
    );
}
