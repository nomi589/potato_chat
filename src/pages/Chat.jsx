import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "../helpers/firebase";
import ChatCard from "../components/ChatCard";
import RoundImageWithText from "../components/RoundImageWithText";

export default function Chat() {
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut(auth).catch((error) => console.error(error));
    navigate("/");
  }
  return (
    <div className="wrapper bg-slate-200 h-screen flex justify-center items-center">
      <div className="container bg-slate-50 h-[720px] border border-indigo-700 rounded-sm flex drop-shadow-md">
        <section aria-label="side bar" className="basis-1/3 flex flex-col">
          <section className="h-16 px-3 py-1 flex justify-between items-center gap-1 text-sm bg-indigo-200">
            <RoundImageWithText />
            <button
              type="button"
              aria-label="logout button"
              onClick={handleLogout}
            >
              Log out
            </button>
          </section>
          <section className="py-3 bg-indigo-50 grow">
            <ChatCard
              username="nomi589"
              userImg="https://placehold.co/50"
              latestMsg="hello, world"
              selected
            />
            <ChatCard
              username="john.doe"
              userImg="https://placehold.co/50"
              latestMsg="sure"
            />
            <ChatCard
              username="Abdul Sattar Memon"
              userImg="https://placehold.co/50"
              latestMsg="ho jaye ga insha'Allah"
            />
          </section>
        </section>
        <section aria-label="chat display" className="basis-2/3 flex flex-col">
          <section className="h-16 px-3 py-1 bg-indigo-100 flex items-center">
            nomi589
          </section>
          <section className="grow px-3 py-1">Messages</section>
          <section className="h-12 px-3 pt-1 pb-3 flex items-center gap-2">
            <input
              type="text"
              className="h-full border border-slate-200 grow"
            />
            <button
              type="button"
              className="h-full px-3 border border-slate-200 text-sm"
            >
              Send
            </button>
          </section>
        </section>
      </div>
    </div>
  );
}
