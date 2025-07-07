import Image from 'next/image';

export default function Header({ pdfUrl }) {
    return (
        <div className="flex justify-between w-full max-w-5xl items-center">
            <Image src="/logo.jpg" alt="لوگو" width={60} height={60} />
            <a
                href={pdfUrl}
                download
                className="bg-[#f3f3f3] text-sm text-black px-4 py-2 rounded shadow hover:bg-gray-300"
            >
                📥 دانلود نسخه الکترونیکی
            </a>
        </div>
    );
}
