import React from "react";
import BannerImg from "@/assets/bazar-hero.png";
import CurrentDate from "./CurrentDate";
import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="mt-4 rounded-2xl bg-[#FAFCFA] px-5 py-6 sm:px-8 sm:py-7">
      <div className="flex flex-col-reverse items-center justify-between gap-5 sm:flex-row sm:gap-8">
        <div className="w-full sm:w-2/3">
          <p className="mb-3 inline-block rounded-full bg-[#E2F3E8] px-3 py-2 text-xs font-medium text-[#05893E]">
            <CurrentDate />
          </p>

          <h1 className="text-2xl font-bold leading-tight text-[#1D271F] sm:text-3xl">
            আজকের বাজারের দাম এক নজরে
          </h1>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
            বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
          </p>

          <Link
            href={"/"}
            className="mt-5 inline-flex items-center justify-center rounded-md bg-[#05893E] px-4 py-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#047331]"
          >
            সব পণ্য দেখুন
          </Link>
        </div>
        <div className="flex w-full justify-center sm:w-1/3 ">
          <Image
            src={BannerImg}
            alt="banner image"
            priority
            className="h-auto w-32 object-contain sm:w-48 md:w-80"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;