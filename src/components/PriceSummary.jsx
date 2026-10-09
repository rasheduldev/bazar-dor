
const PriceSummary = ({ markets = [] }) => {
  const allMinPrices = markets.map((market) => market.min);
  const allMaxPrices = markets.map((market) => market.max);
  const minPrice = allMinPrices.length > 0 ? Math.min(...allMinPrices) : 0;
  const maxPrice = allMaxPrices.length > 0 ? Math.max(...allMaxPrices) : 0;
  const averagePrice = markets.length > 0 ? markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) / markets.length : 0;
  const priceCards = [
    {
      title: "সর্বনিম্ন দাম",
      price: minPrice,
      description: "সবচেয়ে কম দামের বাজার",
      color: "text-green-600",
    },
    {
      title: "সর্বাধিক দাম",
      price: maxPrice,
      description: "সবচেয়ে বেশি দামের বাজার",
      color: "text-red-600",
    },
    {
      title: "গড় দাম",
      price: averagePrice,
      description: "প্রতি কেজি-এর হিসাবে",
      color: "text-green-600",
    },
  ];

  return (
    <section className="mt-5 rounded-2xl border border-[#E1E9E1] bg-white p-5 sm:p-6">
      <h2 className="mb-4 text-lg font-bold text-[#1D271F]">
        দামের সারসংক্ষেপ
      </h2>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {priceCards.map((card) => (
          <div key={card.title} className="rounded-xl border border-[#E1E9E1] p-4">
            <p className="text-sm text-gray-500">{card.title}</p>
            <p className={`mt-2 text-2xl font-bold ${card.color}`}>
              {card.price.toLocaleString("bn-BD", {
                maximumFractionDigits: 2,
              })}{" "}
              <span className="text-sm font-medium">টাকা</span>
            </p>
            <p className="mt-1 text-xs text-gray-500">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PriceSummary;

