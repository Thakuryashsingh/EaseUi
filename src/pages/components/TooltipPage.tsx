import { Tooltip } from "@/components/Tooltip";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const TooltipPage = () => {
  const basicUsageCode = `
import { Tooltip } from "@/components/Tooltip";

<Tooltip text="This is a tooltip" position="top">
  <button>Hover me</button>
</Tooltip>`;

  const propsData = [
    {
      prop: "children",
      type: "ReactNode",
      default: "-",
      description: "The element that triggers the tooltip",
    },
    {
      prop: "text",
      type: "string",
      default: "-",
      description: "The information displayed inside the tooltip",
    },
    {
      prop: "position",
      type: '"top" | "right" | "bottom" | "left"',
      default: '"top"',
      description: "Controls the position of the tooltip",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Tooltip
        </p>

        <p className="text-lg text-gray-600">
          Displays additional information when the user hovers over an element.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <div className="flex items-center justify-center gap-12 py-16">
            <Tooltip text="Tooltip on top" position="top">
              <button className="rounded-md bg-indigo-600 px-5 py-2 text-white">
                Top
              </button>
            </Tooltip>

            <Tooltip text="Tooltip on right" position="right">
              <button className="rounded-md bg-indigo-600 px-5 py-2 text-white">
                Right
              </button>
            </Tooltip>

            <Tooltip text="Tooltip on bottom" position="bottom">
              <button className="rounded-md bg-indigo-600 px-5 py-2 text-white">
                Bottom
              </button>
            </Tooltip>

            <Tooltip text="Tooltip on left" position="left">
              <button className="rounded-md bg-indigo-600 px-5 py-2 text-white">
                Left
              </button>
            </Tooltip>
          </div>
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default TooltipPage;