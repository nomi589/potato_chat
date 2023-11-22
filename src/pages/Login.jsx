export default function Login() {
  return (
    <section className="mt-5">
      <h2 className="text-3xl text-slate-700 text-center">Log in</h2>
      <form>
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
            Log in
          </button>
        </section>
      </form>
      <section className="mt-3">
        <p className="text-sm text-slate-500">
          Don&apos;t have an account? Sign up!
        </p>
      </section>
    </section>
  );
}
