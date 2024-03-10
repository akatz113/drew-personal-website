import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div id="name">
        <h1 className="text-8xl text-center font-bold text-primary p-12">
          Drew Katz
        </h1>
        <p className="text-sm text-center text-primary py-10">
          Welcome to my website!
        </p>
        <div className="flex items-center justify-center">
          <a
            className="text-primary"
            href="https://www.linkedin.com/in/drew-katz-9882a019a/"
            target="_blank"
          >
            LinkedIn
          </a>
          <p className="text-secondary"> | </p>
          <a
            className="flex items-center justify-center text-primary"
            href="https://github.com/akatz113"
            target="_blank"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
