import baseUrl from "@/services/baseUrl";
import MarqueeText from "react-marquee-text";

const Marquee = async () => {
  const res = await fetch(`${baseUrl}/products`);
  const products = await res.json();

  return (
    <MarqueeText direction="right" duration={10}>
        <div className="overflow-hidden border-y border-gray-200 bg-[#FAFCFA]">
      <div className="marquee-track flex w-max">
        {products?.map((product, index) => (
          <div
            key={index}
            className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 py-2 text-sm"
          >
            <span>{product?.categoryIcon}</span>

            <span className="whitespace-nowrap font-medium">
              {product?.nameBn}
            </span>

            <span className="whitespace-nowrap">
              {product?.today.toLocaleString("bn-BD")} টাকা/
              {product?.unit === "kg"
                ? "কেজি"
                : product?.unit === "litre"
                  ? "লিটার"
                  : product?.unit === "dozen"
                    ? "ডজন"
                    : product?.unit === "piece"
                      ? "পিস"
                      : product?.unit}
            </span>

            <span
              className={`whitespace-nowrap font-bold ${
                product?.change?.dir === "up" ? "text-red-500" : "text-green-600"
              }`}
            >
              {product?.change?.dir === "up" ? "▲" : "▼"}{" "}
              {product?.change?.pct.toLocaleString("bn-BD")}%
            </span>
          </div>
        ))}
      </div>
    </div>
    </MarqueeText>
  );
};

export default Marquee;
