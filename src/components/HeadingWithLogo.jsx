export default function HeadingWithLogo() {
  return (
    <section className="flex flex-col items-center">
      <img src="https://placehold.co/100" width={100} height={100} />
      <h1 className="mt-5 text-5xl">Potato Chat</h1>
      <p className="text-slate-500">A simple, minimalistic chat application.</p>
    </section>
  );
}
