export default function Chat() {
  return (
    <div className="wrapper bg-slate-50 h-screen flex justify-center items-center">
      <div className="container h-[500px] border border-slate-700 divide-x-2 rounded-sm flex">
        <section aria-label="side bar" className="basis-1/3">
          <section className="px-3 py-1 flex items-center gap-1">
            <img
              src="https://placeholder.co/100"
              width={50}
              height={50}
              className="rounded-full"
            />
            <p>Username</p>
            <button type="button" aria-label="logout button">
              Log out
            </button>
          </section>
          <section className="px-3 py-1">User&apos;s chats</section>
        </section>
        <section aria-label="chat display" className="basis-2/3">
          Chat display
        </section>
      </div>
    </div>
  );
}
