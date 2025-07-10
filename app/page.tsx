import Link from "next/link"

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Choose a Demo Option</h1>
      <div className="flex space-x-4">
        <Link href="/option-1" className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
          Option 1
        </Link>
        <Link href="/option-2" className="px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors">
          Option 2
        </Link>
      </div>
    </div>
  )
}
