import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 900 600"
      {...props}
    >
      <rect width="300" height="600" fill="#00853f"/>
      <rect x="300" width="300" height="600" fill="#fdef42"/>
      <rect x="600" width="300" height="600" fill="#e31b23"/>
      <g transform="translate(450,300)">
        <path d="M0-90L27.8-18.7L94.7 11.2L42.9 66.8L58.4 108L0 90L-58.4 108L-42.9 66.8L-94.7 11.2L-27.8-18.7Z" fill="#00853f"/>
      </g>
    </svg>
  );
}
