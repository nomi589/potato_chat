import RoundImageWithText from "../components/RoundImageWithText";

export default function Chat() {
  return (
    <div className="wrapper bg-slate-200 h-screen flex justify-center items-center">
      <div className="container bg-slate-50 h-[500px] border border-sky-500 divide-x-2 rounded-sm flex">
        <section
          aria-label="side bar"
          className="basis-1/3 divide-y-2 flex flex-col"
        >
          <section className="px-3 py-1 flex justify-between items-center gap-1 text-sm bg-indigo-100">
            <RoundImageWithText />
            <button type="button" aria-label="logout button">
              Log out
            </button>
          </section>
          <section className="py-1 bg-indigo-50 grow">
            User&apos;s chats
          </section>
        </section>
        <section aria-label="chat display" className="basis-2/3">
          Chat display
        </section>
      </div>
    </div>
  );
}
