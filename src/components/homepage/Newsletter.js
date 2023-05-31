export default function NewLetter() {
  return (
    <div className="bg-[#F6F6F6] h-auto py-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center my-20 px-8 sm:px-20">
      <div className="sm:w-5/12">
        <p className="text-secondary tracking-widest text-sm">
          GET FIRST UPDATE
        </p>
        <h1 className="mt-3 text-xl md:text-2xl">
          Get the news in front line by{" "}
          <span className="text-primary">subscribing</span> for latest updates
        </h1>
      </div>

      <div className="flex flex-shrink-0 items-center justify-center">
        <input
          type="text"
          className="flex-shrink-0 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Enter email address"
        />
        <button className="flex-shrink-0 px-4 py-2 bg-primary text-white rounded-r-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary-dark">
          Subscribe
        </button>
      </div>
    </div>
  );
}
