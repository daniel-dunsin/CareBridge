import Link from "next/link";

const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="md:text-9xl text-7xl font-extrabold text-primary">404</p>
        <div className="space-y-1">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-center max-w-md leading-[1.7] text-gray-500">
            Uh-oh, it looks like this page is feeling a bit under the weather. Let&lsquo;s get you back to a healthier
            place!
          </p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </Link>
          {/* <Link href="#" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link> */}
        </div>
      </div>
    </main>
  );
};

export default NotFound;
