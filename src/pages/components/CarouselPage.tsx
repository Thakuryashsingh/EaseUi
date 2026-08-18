import { Carousel } from "@/components/Carousel";
import ComponentDemo from "../ComponentsDemo";
import PropsTable from "@/components/Personal/PropsTable";

const CarouselPage = () => {
  const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  ];

  const basicUsageCode = `
import { Carousel } from "@/components/Carousel";

const images = [
  "https://example.com/image-1.jpg",
  "https://example.com/image-2.jpg",
  "https://example.com/image-3.jpg",
];

<Carousel
  images={images}
  autoPlay={true}
  interval={3000}
/>
`;

  const propsData = [
    {
      prop: "images",
      type: "string[]",
      default: "[]",
      description: "Array of image URLs used by the carousel",
    },
    {
      prop: "autoPlay",
      type: "boolean",
      default: "false",
      description: "Automatically changes the slide",
    },
    {
      prop: "interval",
      type: "number",
      default: "3000",
      description: "Time between slides in milliseconds",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl space-y-12 p-6">
      <header className="space-y-2">
        <p
          className="text-4xl font-bold tracking-tight"
          style={{ color: "var(--text-color)" }}
        >
          Carousel
        </p>

        <p className="text-lg text-gray-600">
          A responsive image carousel with navigation controls and autoplay.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Usage</h2>

        <ComponentDemo code={basicUsageCode}>
          <Carousel
            images={images}
            autoPlay={true}
            interval={3000}
          />
        </ComponentDemo>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">API Reference</h2>

        <PropsTable data={propsData} />
      </section>
    </div>
  );
};

export default CarouselPage;