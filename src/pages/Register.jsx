import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import HeadingWithLogo from "../components/HeadingWithLogo";
import { auth } from "../helpers/firebase";

export default function Register() {
  async function handleSubmit(e) {
    e.preventDefault();
    const displayName = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).catch((error) => console.error(error));
    console.log(userCredential.user);
  }

  return (
    <div className="container w-1/2 mx-auto mt-20">
      <HeadingWithLogo />
      <section className="mt-5">
        <h2 className="text-3xl text-slate-700 text-center">
          Create an account
        </h2>
        <form onSubmit={handleSubmit}>
          <section className="mt-3">
            <label htmlFor="name" className="text-slate-500 text-xs">
              Display name
            </label>
            <input
              id="name"
              type="text"
              className="border w-full h-10 rounded-sm px-3 py-1"
            />
          </section>
          <section className="mt-3">
            <label htmlFor="email" className="text-slate-500 text-xs">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border w-full h-10 rounded-sm px-3 py-1"
            />
          </section>
          <section className="mt-3">
            <label htmlFor="password" className="text-slate-500 text-xs">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="border w-full h-10 rounded-sm px-3 py-1"
            />
          </section>
          <section className="mt-3">
            <button
              type="submit"
              className="px-5 py-2 border border-slate-500 rounded-sm hover:bg-slate-700 hover:text-slate-300"
            >
              Sign up
            </button>
          </section>
        </form>
        <section className="mt-3">
          <p className="text-sm text-slate-500">
            Already have an account?{" "}
            <Link to="/" className="underline text-sky-700">
              Log in
            </Link>
          </p>
        </section>
      </section>
    </div>
  );
}
