import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();
  return (
    <div className="relative h-[80vh]">
      <Image
        src="/images/boys-hostel-banner.jpg"
        alt="Mukunda Boys Hostel"
        fill
        className="object-cover brightness-75"
        priority
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-sky-300 drop-shadow-lg">
          Mukunda Boys Hostel
        </h1>

        <p className="text-lg md:text-2xl max-w-2xl mb-8 text-gray-200">
          Comfortable, secure, and homely accommodation designed for students
          and professionals.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button
            size="lg"
            className="bg-sky-400 text-blue-950 font-semibold hover:bg-sky-300 hover:text-blue-900 transition-colors shadow-md"
            onClick={() => router.push("/rooms")}
          >
            View Rooms
          </Button>

          <Button
            size="lg"
            className="bg-sky-400 text-blue-950 font-semibold hover:bg-sky-300 hover:text-blue-900 transition-colors shadow-md"
            onClick={() => router.push("/contact")}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
}