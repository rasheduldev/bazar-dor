import Link from "next/link";

const Breadcrumb = ({ categoryName, categorySlug, productName }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-5 flex flex-wrap items-center gap-2 text-sm text-gray-500"
    >
      <Link href="/" className="transition hover:text-[#05893E]">
        হোম
      </Link>

      <span>›</span>

      <Link
        href={`/category/${categorySlug}`}
        className="transition hover:text-[#05893E]"
      >
        {categoryName}
      </Link>

      <span>›</span>

      <span className="font-medium text-[#1D271F]">
        {productName}
      </span>
    </nav>
  );
};

export default Breadcrumb;