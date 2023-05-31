export default function Footer() {
  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 mt-20 mb-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
      <div className="">
        <h5 className="text-primary mb-1">IBX Buletin</h5>
        <span className="text-sm text-gray-500">
          Stay informed with the latest headlines and breaking news.
        </span>
      </div>

      <span className="text-gray-500 text-sm">
        copyright &copy; 2023 IBX Buletin
      </span>
    </div>
  );
}
