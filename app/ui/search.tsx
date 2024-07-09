'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Search({ placeholder }: { placeholder: string }) {
  return (
    <div className="flex w-96">
      <input
        className="block w-full rounded-md m-2 text-sm outline-2"
        placeholder={placeholder}
      />
      <div className="h-auto m-2 bg-white-600 text-white border">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="w-auto p-1" />
      </div>
    </div>
  );
}
