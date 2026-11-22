import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-2 shrink-0"
    >
      <div className="bg-orange-500 text-white w-9 h-9 rounded-xl flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 2v7a4 4 0 0 0 4 4v9" />
          <path d="M7 2v7" />
          <path d="M11 2v7a4 4 0 0 1-4 4" />
          <path d="M18 2v20" />
          <path d="M18 2c-3 3-3 8 0 10" />
        </svg>
      </div>

      <span className="text-xl font-extrabold tracking-tight">
        <span className="text-gray-900">Foodie</span>
        <span className="text-orange-500">Hub</span>
      </span>
    </Link>
  );
}
