import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <h1 className="p-4 text-8xl text-center font-bold text-primary mt-20 mb-10">
          Drew Katz
        </h1>
        <p className="text-sm text-center text-primary">
          Welcome to my website!
        </p>
        <a
          className="flex items-center justify-center text-primary"
          href="https://www.linkedin.com/in/drew-katz-9882a019a/"
          target="_blank"
        >
          LinkedIn
        </a>
      </div>
    </>
  );
}
