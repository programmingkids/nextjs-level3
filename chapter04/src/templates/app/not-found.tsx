import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <h1 className="p-4 bg-gray-500 text-white text-xl">Not Found</h1>
          <div className="p-4">Page is not Found</div>
          <div className="p-4">Check the url and accesss again</div>
          <Link href="/" className="text-link">
            Home
          </Link>
        </div>
      </body>
    </html>
  );
}
