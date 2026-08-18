import { Layout } from "@/components/Layout";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const LayoutPage = () => {
  const basicUsageCode = `
import { Layout } from "@/components/Layout";

<Layout
  header={<div>My Application</div>}
  sidebar={
    <nav>
      <p>Dashboard</p>
      <p>Settings</p>
      <p>Profile</p>
    </nav>
  }
>
  <h2>Welcome</h2>
  <p>This is the main content area.</p>
</Layout>
`;

  const propsData = [
    {
      prop: "header",
      type: "ReactNode",
      default: "-",
      description: "Content displayed in the top header section",
    },
    {
      prop: "sidebar",
      type: "ReactNode",
      default: "-",
      description: "Content displayed in the left sidebar",
    },
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "Main content displayed inside the layout",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Layout
        </p>

        <p className="text-lg text-gray-600">
          Provides a reusable structure for organizing a header, sidebar, and
          main content.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <Layout
            header={
              <div className="font-semibold">
                My Application
              </div>
            }
            sidebar={
              <nav className="space-y-3 text-sm">
                <p className="font-medium">Dashboard</p>
                <p>Settings</p>
                <p>Profile</p>
              </nav>
            }
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">
                Welcome
              </h2>

              <p className="text-gray-600">
                This is the main content area of the layout.
              </p>
            </div>
          </Layout>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default LayoutPage;