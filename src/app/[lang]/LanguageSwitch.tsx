"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function buildLocalePath(pathname: string, target: "zh" | "en") {
  if (pathname === "/") {
    return `/${target}`;
  }

  const segments = pathname.split("/");
  if (segments.length > 1 && (segments[1] === "zh" || segments[1] === "en")) {
    segments[1] = target;
    return segments.join("/");
  }

  return `/${target}${pathname}`;
}

export default function LanguageSwitch({
  lang,
  label,
  zhLabel,
  enLabel,
}: {
  lang: "zh" | "en";
  label: string;
  zhLabel: string;
  enLabel: string;
}) {
  const pathname = usePathname();
  const zhPath = buildLocalePath(pathname, "zh");
  const enPath = buildLocalePath(pathname, "en");

  return (
    <div className="hidden sm:flex items-center gap-2 text-xs text-[#92400E]">
      <span>{label}</span>
      <div className="flex items-center gap-2 rounded-full border border-[#92400E]/20 bg-white/80 px-2 py-1">
        <Link
          href={zhPath}
          className={`px-2 py-1 rounded-full ${lang === "zh" ? "bg-[#78350F] text-[#FEF3C7]" : "text-[#92400E]"}`}
        >
          {zhLabel}
        </Link>
        <Link
          href={enPath}
          className={`px-2 py-1 rounded-full ${lang === "en" ? "bg-[#78350F] text-[#FEF3C7]" : "text-[#92400E]"}`}
        >
          {enLabel}
        </Link>
      </div>
    </div>
  );
}
