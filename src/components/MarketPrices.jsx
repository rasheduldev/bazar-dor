
import React from "react";

const MarketPrices = ({ markets = [] }) => {
  return (
    <section >
      <div className="my-4">
        <h2 className="text-lg font-bold text-[#1D271F]">
          বাজারভিত্তিক আজকের দাম
        </h2>
      </div>

      {markets.length === 0 ? (
        <p className="py-8 text-center text-gray-500">
          বাজারের কোনো তথ্য পাওয়া যায়নি।
        </p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-[#E1E9E1]">
          <table className="w-full min-w-[650px] border-collapse text-sm">
            <thead className="bg-[#F0F5F0] text-gray-600">
              <tr>
                <th className="px-4 py-3 text-left font-semibold">
                  বাজার
                </th>

                <th className="px-4 py-3 text-left font-semibold">
                  বিভাগ
                </th>

                <th className="px-4 py-3 text-right font-semibold">
                  সর্বনিম্ন
                </th>

                <th className="px-4 py-3 text-right font-semibold">
                  সর্বোচ্চ
                </th>

                <th className="px-4 py-3 text-right font-semibold">
                  গড়
                </th>
              </tr>
            </thead>

            <tbody>
              {markets.map((market, index) => {
                const averagePrice = (market.min + market.max) / 2;

                return (
                  <tr
                    key={`${market.market}-${index}`}
                    className="border-t border-[#E1E9E1] transition hover:bg-[#F7FAF7]"
                  >
                    <td className="px-4 py-3 font-medium text-[#1D271F]">
                      {market.market}
                    </td>

                    <td className="px-4 py-3 text-gray-600">
                      {market.division}
                    </td>

                    <td className="px-4 py-3 text-right text-gray-700">
                      {market.min.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-4 py-3 text-right text-gray-700">
                      {market.max.toLocaleString("bn-BD")} টাকা
                    </td>

                    <td className="px-4 py-3 text-right font-semibold text-[#1D271F]">
                      {averagePrice.toLocaleString("bn-BD", {
                        maximumFractionDigits: 2,
                      })}{" "}
                      টাকা
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default MarketPrices;

