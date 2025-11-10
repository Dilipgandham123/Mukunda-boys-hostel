import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-blue-100 bg-gradient-to-r from-blue-900 to-sky-700 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo / Name */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-sky-300 to-blue-100 bg-clip-text text-transparent">
              Mukunda Boys Hostel
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {[
              ["Home", "/"],
              ["Services", "/services"],
              ["Rooms", "/rooms"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["Login", "/login"],
            ].map(([label, link]) => (
              <a
                key={label}
                href={link}
                className="text-sm font-medium text-blue-100 hover:text-sky-300 transition-colors"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Mobile Nav */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-white hover:bg-blue-800"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-gradient-to-b from-blue-900 to-sky-800 text-white px-6"
            >
              <nav className="flex flex-col justify-center items-center space-y-6 mt-10">
                {[
                  ["Home", "/"],
                  ["Services", "/services"],
                  ["Rooms", "/rooms"],
                  ["About", "/about"],
                  ["Contact", "/contact"],
                  ["Login", "/login"],
                ].map(([label, link]) => (
                  <a
                    key={label}
                    href={link}
                    className="text-lg font-medium hover:text-sky-300 transition-colors"
                  >
                    {label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
