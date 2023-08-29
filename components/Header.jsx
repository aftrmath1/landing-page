import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: Squares2X2Icon,
  },
];

const links = [
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Contact",
    href: "/contact-us",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  return (
    <>
      <nav className="absolute justify-between max-w-7xl mx-auto top-0 px-10 left-0 right-0 z-10 flex items-center py-4">
        <div className="space-x-8 flex items-center">
          <Link href="/">
            <img src="/logo2.png" height={48} width={48} />
          </Link>

          {links.map((link) => (
            <Link
              href={link.href}
              className="text-white md:block hidden"
              key={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex-none space-x-8 md:block hidden">
          <Link
            href="https://app.buildpipeline.ai"
            className="text-white"
          >
            Sign In
          </Link>
          <Link
            className="btn bg-white text-primary hover:bg-gray-200 border-none px-8 capitalize"
            href="/pricing"
          >
            Get Started
          </Link>
        </div>
        <label className="swap swap-rotate p-1 rounded-xl hover:bg-gray-100 transition hover:scale-105 text-gray-500 md:hidden inline-grid flex-none">
          <input
            type="checkbox"
            className="hidden"
            onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
          />
          <XMarkIcon className="h-12 w-12 swap-on" />
          <Bars3Icon className="h-12 w-12 swap-off" />
        </label>
      </nav>
      {mobileDropdownOpen && (
        <ul className="flex flex-col px-16 py-8 bg-gray-100 absolute z-50 w-full transition space-y-8 h-72">
          {links.map((link, index) => (
            <li key={link.name} className="w-full flex flex-col">
              <Link
                href={link.href}
                className="text-white mb-2"
              >
                {link.name}
              </Link>
              {index !== links.length - 1 && (
                <span className="h-1 border-t border-gray-300 w-full"></span>
              )}
            </li>
          ))}
          <span className="text-gray-400 text-center">
            Existing customer?{" "}
            <Link href="https://app.buildpipeline.ai" className="text-white">
              Sign In
            </Link>
          </span>
          <Link href="/pricing" className="btn btn-primary text-white mt-auto">
            Get Started
          </Link>
        </ul>
      )}
    </>
  );
}
