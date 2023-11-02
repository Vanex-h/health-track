import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";

export function Logo(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <div className="flex items-center gap-2 w-fit">
      <svg aria-hidden="true" viewBox="0 0 45 40" {...props} className="shrink-0 h-12 w-12">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 20c0 11.046 8.954 20 20 20s20-8.954 20-20S31.046 0 20 0 0 8.954 0 20Zm20 16c-7.264 0-13.321-5.163-14.704-12.02C4.97 22.358 6.343 21 8 21h24c1.657 0 3.031 1.357 2.704 2.98C33.32 30.838 27.264 36 20 36Z"
          fill="#2563EB"
        />
      </svg>
      <p className="text-lg font-medium shrink-0">Your<span className="text-[#2563EB]">App</span></p>
    </div>
  )
}
