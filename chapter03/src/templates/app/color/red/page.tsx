export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-red-200 text-xl">Red</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'red, '.repeat(100)}</div>
      </div>
    </div>
  );
}
