import Link from '../node_modules/next/link';


export default function Sidebar({ docs }) {
  const roots = docs.filter((doc) => !doc.parent);
  const nonRoot = Object.groupBy(docs.filter((doc) => doc.parent),({ parent }) => parent);

  console.log("nonRoot",nonRoot)

  return (
    <nav className="hidden lg:mt-10 lg:block">
      <ul role="list" className="border-l border-transparent">

      {
        roots.map((rootNode)=>(
          <li key={rootNode.id} className="relative">
          <Link
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/quickstart"
          >
            <span className="truncate">{rootNode.title}</span>
          </Link>
        </li>
        ))
      }

       
        {/* <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/quickstart"
          >
            <span className="truncate">Quickstart</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/sdks"
          >
            <span className="truncate">SDKs</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/authentication"
          >
            <span className="truncate">Authentication</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/pagination"
          >
            <span className="truncate">Pagination</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/errors"
          >
            <span className="truncate">Errors</span>
          </a>
        </li>
        <li className="relative">
          <a
            className="flex justify-between gap-2 py-1 pl-4 pr-3 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            href="/docs/webhooks"
          >
            <span className="truncate">Webhooks</span>
          </a>
        </li> */}
      </ul>
    </nav>
  );
}
