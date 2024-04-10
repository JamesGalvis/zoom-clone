import Image from "next/image";

export function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/icons/loading-circle.svg"
        alt="Loading icon"
        width={50}
        height={50}
      />
    </div>
  );
}
