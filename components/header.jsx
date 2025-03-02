import Logo from './logo';

export default function Header(){
    return (
         <header
      className="fixed inset-y-0 left-0 z-40 contents w-72 overflow-y-auto border-r border-zinc-900/10 px-6 pb-8 pt-4 dark:border-white/10 lg:block xl:w-80">
      {/* <!-- Logo  --> */}
        <Logo/>
      {/* <!-- Logo Ends --> */}
      {/* <!-- Header --> */}
      
      <!-- Header Ends -->

      <!-- sidebar nav -->
      <nav className="hidden lg:mt-10 lg:block">
        <ul role="list" className="border-l border-transparent">
          <li className="relative">
            <a aria-current="page"
              className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-900 transition dark:text-white"
              href="/docs"><span className="truncate">Introduction</span></a>
            <ul role="list" style="opacity: 1">
              <li>
                <a className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  href="/docs#guides"><span className="truncate">Guides</span></a>
              </li>
              <li>
                <a className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  href="/docs#resources"><span className="truncate">Resources</span></a>
              </li>
              <li>
                <a className="flex justify-between gap-2 py-1 pl-7 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                  href="/docs#test"><span className="truncate">Test</span></a>
              </li>
            </ul>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/quickstart"><span className="truncate">Quickstart</span></a>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/sdks"><span className="truncate">SDKs</span></a>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/authentication"><span className="truncate">Authentication</span></a>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/pagination">
              <span className="truncate">Pagination</span></a>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/errors"><span className="truncate">Errors</span></a>
          </li>
          <li className="relative">
            <a className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
              href="/docs/webhooks"><span className="truncate">Webhooks</span></a>
          </li>
        </ul>
      </nav>
      <!-- Sidebar nav ends -->
    </header>
    );
}