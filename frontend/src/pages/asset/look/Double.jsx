import * as React from "react";
const Double = ({selected}) => (
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
        fill={"#D8D8D8"}
        stroke={selected ? '#B68D40': "#979797"}
        strokeWidth={0.8}
        d="M24.4 20.269h49.2v38.314H24.4z"
      />
      <path
        fill={"#D8D8D8"}
        stroke={selected ? '#B68D40': "#979797"}
        strokeWidth={0.8}
        d="M29.403 19.752c-.202 2.439-.196 5.325.02 8.657.207 3.193 1.223 6.114 3.052 8.772 1.829-2.659 2.845-5.58 3.051-8.772.216-3.332.222-6.218.02-8.657a3.445 3.445 0 0 0-1.527-.352c-.465 0-.932.089-1.402.267l-.142.054-.142-.054a3.924 3.924 0 0 0-1.403-.267c-.534 0-1.042.117-1.527.352zm3.072 18.118h-.004l-.28-.205v-.082l.08-.11h.204v.397z"
      />
      <path
        fill={"#D8D8D8"}
        stroke={selected ? '#B68D40': "#979797"}
        strokeWidth={0.8}
        d="M32.466 37.689c-1.988 6.127-2.981 10.584-2.981 13.35v7.544h5.98V51.04c0-2.472-1-6.932-2.999-13.35z"
      />
      <path
        stroke="#9B9B9B"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity={0.469}
        d="M32.474 19.869v26.276"
      />
      <g>
        <path
          fill={"#D8D8D8"}
          stroke={selected ? '#B68D40': "#979797"}
          strokeWidth={0.8}
          d="M46.353 19.752c-.203 2.439-.197 5.325.019 8.657.207 3.193 1.223 6.114 3.052 8.772 1.829-2.659 2.845-5.58 3.051-8.772.216-3.332.223-6.218.02-8.657a3.445 3.445 0 0 0-1.527-.352c-.465 0-.932.089-1.402.267l-.142.054-.142-.054a3.924 3.924 0 0 0-1.403-.267c-.534 0-1.042.117-1.526.352zm3.07 18.118h-.003l-.28-.205v-.082l.08-.11h.204v.397z"
        />
        <path
          fill={"#D8D8D8"}
          stroke={selected ? '#B68D40': "#979797"}
          strokeWidth={0.8}
          d="M49.415 37.689c-1.988 6.127-2.981 10.584-2.981 13.35v7.544h5.98V51.04c0-2.472-1-6.932-2.999-13.35z"
        />
        <path
          stroke="#9B9B9B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.469}
          d="M49.423 19.869v26.276"
        />
      </g>
      <g>
        <path
          fill={"#D8D8D8"}
          stroke={selected ? '#B68D40': "#979797"}
          strokeWidth={0.8}
          d="M62.454 19.752c-.202 2.439-.196 5.325.02 8.657.207 3.193 1.223 6.114 3.052 8.772 1.828-2.659 2.844-5.58 3.051-8.772.216-3.332.222-6.218.02-8.657a3.445 3.445 0 0 0-1.527-.352c-.466 0-.932.089-1.403.267l-.142.054-.142-.054a3.924 3.924 0 0 0-1.402-.267c-.535 0-1.042.117-1.527.352zm3.071 18.118h-.003l-.28-.205v-.082l.08-.11h.203v.397z"
        />
        <path
          fill={"#D8D8D8"}
          stroke={selected ? '#B68D40': "#979797"}
          strokeWidth={0.8}
          d="M65.517 37.689c-1.988 6.127-2.981 10.584-2.981 13.35v7.544h5.98V51.04c0-2.472-1-6.932-2.999-13.35z"
        />
        <path
          stroke="#9B9B9B"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeOpacity={0.469}
          d="M65.525 19.869v26.276"
        />
      </g>
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
export default Double;