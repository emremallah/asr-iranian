import Image from 'next/image';

export default function Sidebar() {
    return (
        <div className="hidden lg:flex flex-col items-end bg-white p-6 w-[25%] space-y-6 shadow-md">
            <Image src="/logo.jpg" alt="لوگو" width={140} height={60} />
            <div className="text-right w-full space-y-5 text-base text-gray-800">
                <div className="font-extrabold text-lg text-[#d8a652]">🟠 روزنامه امروز</div>
                <div>🗂 آرشیو روزنامه</div>
                <div>📝 یادداشت‌ها</div>
                <div>🔍 جستجو</div>
                <div>📞 ارتباط با ما</div>
            </div>
        </div>

    );
}
