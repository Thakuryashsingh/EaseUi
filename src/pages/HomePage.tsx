import { ArrowRight, Code2, Layers3, Sparkles, Zap } from "lucide-react";
import { Link } from "react-router";

const HomePage = () => {
  const features = [
    {
      icon: <Layers3 size={22} />,
      title: "Reusable Components",
      description:
        "Build interfaces faster with simple and reusable React components.",
    },
    {
      icon: <Code2 size={22} />,
      title: "Developer Friendly",
      description:
        "Clean TypeScript components with clear props and easy customization.",
    },
    {
      icon: <Zap size={22} />,
      title: "Fast & Flexible",
      description:
        "Designed to help you create modern interfaces without unnecessary complexity.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-gray-100">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.08),_transparent_30%)]" />

        <div className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
          <div className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
            <Sparkles size={16} />
            Modern React UI Components
          </div>

          <h1 className="mx-auto max-w-4xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Build beautiful interfaces
            <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              with EaseUI.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-500 sm:text-xl">
            A collection of reusable, customizable and developer-friendly
            React components designed to make UI development easier.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/components/button"
              className="group flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
            >
              Explore Components
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <a
              href="https://github.com/Devendradhote001/Easeui-project"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Component Preview */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Everything you need
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Simple components. Better interfaces.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Explore ready-to-use components and see exactly how they work
            before adding them to your project.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-gray-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-gray-100"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition group-hover:bg-indigo-600 group-hover:text-white">
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold">{feature.title}</h3>

              <p className="mt-3 leading-7 text-gray-500">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Components showcase */}
      <section className="border-y border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Built for developers
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                See the code.
                <br />
                Understand the component.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-gray-500">
                Every component comes with a live preview and its usage code.
                No guessing. No unnecessary abstraction. Just clear,
                reusable React components.
              </p>

              <Link
                to="/components/button"
                className="mt-7 inline-flex items-center gap-2 font-medium text-indigo-600 transition hover:text-indigo-700"
              >
                Browse components
                <ArrowRight size={17} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-[#111827] shadow-2xl">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-3 text-xs text-gray-400">
                  Button.tsx
                </span>
              </div>

              <pre className="overflow-x-auto p-6 text-sm leading-7 text-gray-300">
                <code>{`import { Button } from "@/components/Button";

<Button
  variant="primary"
  size="lg"
>
  Get Started
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Ready to build something great?
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-gray-500">
          Start exploring the EaseUI component collection and build your next
          interface faster.
        </p>

        <Link
          to="/components/button"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gray-900 px-6 py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Start Exploring
          <ArrowRight size={18} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 EaseUI. Built for modern React development.</p>

          <a
            href="https://github.com/Devendradhote001/Easeui-project"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-gray-900"
          >
            GitHub
          </a>
        </div>
      </footer>
    </main>
  );
};

export default HomePage;