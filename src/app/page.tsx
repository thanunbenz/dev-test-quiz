/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";

export default function Home() {
  return (
      <div className="container mx-auto h-96 flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-6xl font-bold mb-4">HOME</h1>
        <div className="space-x-4">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/store"
            className="bg-white text-gray-700 hover:text-white border border-white hover:border-orange-500 hover:bg-orange-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Get Started
          </Link>
        </div>
      </div>
  );
}
