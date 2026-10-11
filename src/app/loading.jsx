
const LoadingPage = () => {
    return (
        <main className="container mx-auto px-4 py-6 space-y-6">
            <div className="flex items-center gap-3 rounded-xl bg-white px-6 py-8 border border-[#E1E9E1] animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                <div className="space-y-2 flex-1">
                    <div className="h-5 bg-gray-200 rounded w-48"></div>
                    <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
            </div>

            <div className="flex items-center justify-end rounded-xl border border-[#E2EAE3] bg-[#F8FBF8] px-5 py-3 animate-pulse">
                <div className="h-8 w-36 bg-gray-200 rounded-lg"></div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div 
                        key={item} 
                        className="rounded-xl border border-[#E1E9E1] bg-white p-4 space-y-4 shadow-sm animate-pulse"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-xl bg-gray-200"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                                </div>
                            </div>
                            <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="pt-2 border-t border-gray-100 flex justify-between items-center">
                            <div className="h-4 bg-gray-200 rounded w-20"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default LoadingPage;