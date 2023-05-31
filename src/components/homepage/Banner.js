export default function Banner() {
  return (
    <div className="bg-[#F6F6F6] h-auto py-10 flex flex-col items-center justify-center mt-4 px-4 mb-5">
      <p className="text-secondary tracking-widest text-sm">
        WELCOME TO IBX BULETIN
      </p>
      <h1 className="mt-3 text-xl  md:text-2xl sm:w-6/12 text-center">
        Unleash your <span className="text-primary">curiosity</span>, delve into{" "}
        <span className="text-primary">captivating</span> stories, and stay
        <span className="text-primary"> informed</span> with the latest news.
      </h1>
    </div>
  );
}
