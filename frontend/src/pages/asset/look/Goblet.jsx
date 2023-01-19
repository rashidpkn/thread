import * as React from "react";
const Goblet = ({selected}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={98}
    height={98}
    viewBox="0 0 98 98"
    
  >
    <defs>
      <rect id="b" width={90} height={90} rx={6} />
      <filter
        id="a"
        width="115.6%"
        height="115.6%"
        x="-7.8%"
        y="-5.6%"
        filterUnits="objectBoundingBox"
      >
        <feOffset dy={2} in="SourceAlpha" result="shadowOffsetOuter1" />
        <feMorphology in="SourceAlpha" radius={1} result="shadowInner" />
        <feOffset dy={2} in="shadowInner" result="shadowInner" />
        <feComposite
          in="shadowOffsetOuter1"
          in2="shadowInner"
          operator="out"
          result="shadowOffsetOuter1"
        />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation={2}
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          values="0 0 0 0 0.901960784 0 0 0 0 0.925490196 0 0 0 0 0.952941176 0 0 0 0.472792832 0"
        />
      </filter>
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#D8D8D8"
        stroke={selected ? '#b68d40' : "#979797"}
        strokeWidth={0.8}
        d="M24.4 21.095h49.2v37.336H24.4z"
      />
      <g fill="#D8D8D8" stroke={selected ? '#b68d40' : "#979797"} strokeWidth={0.8}>
        <path d="M34.162 31.734c-2.555 4.877-3.83 8.41-3.83 10.561v16.136h7.675V42.295c0-1.917-1.281-5.455-3.845-10.56z" />
        <path d="M30.332 20.176v10.217l2.418 4.309h2.866l2.39-4.356v-10.17a20.491 20.491 0 0 0-3.837-.365c-1.278 0-2.557.122-3.837.365z" />
      </g>
      <g fill="#D8D8D8" stroke={selected ? '#b68d40' : "#979797"} strokeWidth={0.8}>
        <path d="M49.416 31.734c-2.555 4.877-3.83 8.41-3.83 10.561v16.136h7.675V42.295c0-1.917-1.281-5.455-3.845-10.56z" />
        <path d="M45.586 20.176v10.217l2.418 4.309h2.866l2.391-4.356v-10.17a20.463 20.463 0 0 0-3.837-.365c-1.281 0-2.56.122-3.838.365z" />
      </g>
      <g fill="#D8D8D8" stroke={selected ? '#b68d40' : "#979797"} strokeWidth={0.8}>
        <path d="M64.67 31.734c-2.555 4.877-3.83 8.41-3.83 10.561v16.136h7.675V42.295c0-1.917-1.281-5.455-3.845-10.56z" />
        <path d="M60.84 20.176v10.217l2.419 4.309h2.866l2.39-4.356v-10.17a20.491 20.491 0 0 0-3.837-.365c-1.279 0-2.558.122-3.837.365z" />
      </g>
      <path
        stroke="#BBB"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        strokeWidth={0.8}
        d="M32.777 50.356c.13-3.389.269-5.931.417-7.627.148-1.696.454-4.239.916-7.627.438 3.381.724 5.924.859 7.627.135 1.703.252 4.245.35 7.627M48.031 50.356c.13-3.389.269-5.931.417-7.627.148-1.696.454-4.239.917-7.627.437 3.381.723 5.924.858 7.627.135 1.703.252 4.245.35 7.627M63.286 50.356c.13-3.389.268-5.931.416-7.627.149-1.696.454-4.239.917-7.627.437 3.381.723 5.924.858 7.627.135 1.703.252 4.245.351 7.627"
      />
      <path
        stroke="#BBB"
        strokeLinecap="round"
        strokeLinejoin="bevel"
        d="M32.475 30.335c.172.942.357 1.648.555 2.12.198.47.605 1.176 1.222 2.118.583-.94.965-1.646 1.145-2.119.18-.473.336-1.18.467-2.119M47.729 30.335c.173.942.358 1.648.555 2.12.198.47.605 1.176 1.222 2.118.584-.94.965-1.646 1.145-2.119.18-.473.336-1.18.468-2.119M62.983 30.335c.173.942.358 1.648.556 2.12.197.47.605 1.176 1.222 2.118.583-.94.964-1.646 1.144-2.119.18-.473.336-1.18.468-2.119"
      />
      <g transform="translate(4 2)">
        <use fill="#000" filter="url(#a)" xlinkHref="#b" />
        <rect
          width={89}
          height={89}
          x={0.5}
          y={0.5}
          stroke="#C6CBCC"
          strokeLinejoin="square"
          rx={6}
        />
      </g>
    </g>
  </svg>
);
export default Goblet;
