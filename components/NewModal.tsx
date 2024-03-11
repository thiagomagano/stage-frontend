"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NewModal() {
  const searchParams = useSearchParams();
  const modal = searchParams.get("modal");
  const pathname = usePathname();

  return (
    <>
      {modal && (
        <dialog className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <div className="bg-white m-auto p-8">
            <div className="flex flex-col items-center">
              <p>Modal content</p>
              <br />

              <Link href={pathname}>
                <button type="button" className="bg-red-500 text-white p-2">
                  Close Modal
                </button>
              </Link>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
