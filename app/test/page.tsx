import Link from "next/link"

const NavItems = {
  Links: [
    { name: "Idea", path: "/" },
    { name: "Plan", path: "/plan" },
    { name: "Review", path: "/review" },
    { name: "Build", path: "/build" },
    { name: "Test", path: "/test" },
    { name: "Deploy", path: "/deploy" },
  ],
}

const TestPage = () => {
  return (
    <div className="flex h-full flex-col gap-2 bg-primary-foreground">
      <nav className="flex flex-row justify-between gap-4 bg-slate-600 p-2">
        <section className="flex items-start gap-x-2">
          <div>Logo</div>
          <div className="flex gap-x-1">
            {NavItems.Links.map((item) => (
              <Link
                className="text-primary-foreground hover:underline"
                href={item.path}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </section>
        <section className="self-end"> right nav </section>
      </nav>

      <section className="flex h-full flex-row">
        <aside className="items-start bg-slate-600 p-6">left side bar</aside>
        <main className="flex flex-1 bg-slate-800 p-6">Main</main>
        <aside className="items-right bg-slate-600 p-6">right side bar</aside>
      </section>
    </div>
  )
}

export default TestPage
