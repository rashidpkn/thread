import * as React from "react";
const Pencil = ({selected}) => (
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
      <g stroke={selected  ? "#b68d40" :"#979797"}>
        <path
          fill=""
          strokeWidth={0.8}
          d="M24.4 18.755v22.217h2.836V18.755c-.293-.23-.76-.355-1.418-.355-.657 0-1.125.124-1.418.355zM46.218 18.755v22.217h2.837V18.755c-.293-.23-.762-.355-1.419-.355s-1.125.124-1.418.355zM35.31 18.755v22.217h2.835V18.755c-.293-.23-.76-.355-1.418-.355-.657 0-1.125.124-1.418.355zM57.127 18.755v22.217h2.837V18.755c-.293-.23-.762-.355-1.419-.355-.656 0-1.125.124-1.418.355zM29.855 18.755v22.217h2.836V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM51.673 18.755v22.217h2.836V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM40.764 18.755v22.217H43.6V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM62.582 18.755v22.217h2.836V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM68.036 18.755v22.217h2.837V18.755c-.293-.23-.762-.355-1.418-.355-.657 0-1.126.124-1.419.355z"
        />
        <path
          fill="#D8D8D8"
          strokeWidth={0.8}
          d="M27.127 18.755v22.217h2.837V18.755c-.293-.23-.762-.355-1.419-.355-.656 0-1.125.124-1.418.355zM48.945 18.755v22.217h2.837V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.126.124-1.419.355zM38.036 18.755v22.217h2.837V18.755c-.293-.23-.762-.355-1.418-.355-.657 0-1.126.124-1.419.355zM59.855 18.755v22.217h2.836V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM32.582 18.755v22.217h2.836V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM54.4 18.755v22.217h2.836V18.755c-.293-.23-.76-.355-1.418-.355-.657 0-1.125.124-1.418.355zM43.49 18.755v22.217h2.837V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355zM65.31 18.755v22.217h2.835V18.755c-.293-.23-.76-.355-1.418-.355-.657 0-1.125.124-1.418.355zM70.764 18.755v22.217H73.6V18.755c-.293-.23-.761-.355-1.418-.355-.657 0-1.125.124-1.418.355z"
        />
        <path
          fill="#D8D8D8"
          strokeWidth={0.8}
          d="M24.4 40.906h49.2v16.512H24.4z"
        />
        <path
          strokeLinecap="round"
          strokeOpacity={0.473}
          d="M34 40.939v7.357M47.636 40.939v7.357M57.636 40.939v12.335M66.727 40.939v7.357"
        />
        <path
          strokeLinecap="round"
          strokeOpacity={0.473}
          strokeWidth={0.7}
          d="M35.818 40.939v9.521M49.455 40.939V45.7M45.818 40.939V45.7"
        />
      </g>
    </g>
  </svg>
);
export default Pencil;
