import Logo from "./logo";
import Search from "./search";
import Sidebar from "./sidebar";

export default function Header({docs}) {
  return (
    <header className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      {/* <!-- Logo  --> */}
      <Logo />

      <Search />
      {/* <!-- sidebar nav --> */}
      <Sidebar docs={docs} />
      {/* <!-- Sidebar nav ends --> */}
    </header>
  );
}
