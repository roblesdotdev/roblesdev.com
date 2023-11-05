import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [
    { title: 'Aldo Robles | Developer' },
    { name: 'description', content: 'Aldo Robles Developer Website' },
  ]
}

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col items-center gap-4 bg-[#15161E] px-6 py-12">
      <h1 className="text-2xl font-bold text-[#F3F4FE]">Working...</h1>
      <p className="text-[#AAAEC6]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  )
}
