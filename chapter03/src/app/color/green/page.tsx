export default function Page() {
  return (
    <div className="main">
      <h1 className="p-4 bg-green-200 text-xl">Green</h1>
      <div className="py-4 px-6">
        <div className="py-4 text-start">{'green, '.repeat(100)}</div>
      </div>
    </div>
  );
}
