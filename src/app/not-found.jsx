import Link from 'next/link';
const NotFoundPage = () => {
    return (
        <div className="container mx-auto px-4 py-20 flex flex-col justify-center items-center text-center">
            <div className="max-w-md w-full rounded-2xl border border-[#E1E9E1] bg-[#FAFCFA] p-8 shadow-sm space-y-4">
                <div className="text-6xl">🔍</div>
                <h1 className="text-2xl font-bold text-[#1D271F]">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h1>
                <p className="text-sm text-gray-500 leading-relaxed">
                    আপনি যে পেজ বা ক্যাটেগরি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা ঠিকানাটি সঠিক নয়।
                </p>
                <div className="pt-2">
                    <Link 
                        href="/" 
                        className="inline-block w-full rounded-lg bg-[#05893E] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#047331]"
                    >
                        ← হোম পেজে ফিরে যান
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;