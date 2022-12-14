import Link from 'next/link';
import { FiPlus } from "react-icons/fi";
import { useModal } from "../../hooks/useModal";

interface TableActionsProps {
  setSearch?: any;
  search?: any
}

export function TableActions({setSearch, search}: TableActionsProps) {
  const {openModal} = useModal();

  return (
    <div className="flex items-center justify-between pb-3 lg:border-b lg:border-gray-500">
      <div className="flex items-center p-2 rounded-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="outline-none bg-transparent ml-1 w-full block "
          type="text"
          placeholder="search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="lg:ml-40 space-x-8">
        <Link href="/create">
          <button  className="hidden lg:inline-block bg-blue-500 text-sm px-4 py-3 rounded-md text-white font-semibold tracking-wide cursor-pointer">
            New Appointment
          </button>
        </Link>
        <Link href="/create">
          <button className="inline-block lg:hidden bg-blue-500 text-sm px-3 py-3 rounded-full text-white font-semibold tracking-wide cursor-pointer">
            <FiPlus size={22} className="text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
}
