'use client';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="main p-4 bg-white text-red-500 text-xl">
      <h1>{error.message}</h1>
      <button
        className="py-2 px-4 m-2 bg-red-500 text-white rounded-md"
        onClick={() => reset()}
      >
        Try again
      </button>
    </div>
  );
}
