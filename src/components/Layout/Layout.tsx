import type { ReactNode } from "react";

interface LayoutProps {
  sidebar?: ReactNode;
  header?: ReactNode;
  children: ReactNode;
}

const Layout = ({ sidebar, header, children }: LayoutProps) => {
  return (
    <div className="min-h-[400px] w-full overflow-hidden rounded-xl border border-gray-200 bg-white">
      {header && (
        <header className="border-b border-gray-200 px-6 py-4">
          {header}
        </header>
      )}

      <div className="flex min-h-[320px]">
        {sidebar && (
          <aside className="w-48 shrink-0 border-r border-gray-200 bg-gray-50 p-4">
            {sidebar}
          </aside>
        )}

        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export { Layout };