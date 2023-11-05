import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Aldo Robles | Developer" },
    { name: "description", content: "Aldo Robles Developer Website" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="font-bold text-2xl">Working...</h1>
    </div>
  );
}
