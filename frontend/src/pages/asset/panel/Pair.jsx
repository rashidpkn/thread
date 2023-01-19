import * as React from "react";
const Pair = ({selected}) => (
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
      <g fill="#818387" transform="translate(29 15.404)">
        <path d="M1.021.51h37.767v1H1.021z" />
        <circle cx={0.868} cy={0.868} r={1} />
        <circle cx={38.762} cy={0.868} r={1} />
      </g>
      <path
        fill="#F6F6F5"
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeWidth={0.4}
        d="M34.814 19.814h27.16v29.201h-27.16z"
      />
      <path fill="#F3F5F7" d="M48.904 21.655h11.228v25.518H48.904z" />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeWidth={0.3}
        d="M49.054 20.785h11.949v27.26H49.054z"
      />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeWidth={0.3}
        d="M48.904 21.656h11.228v25.518M48.904 47.174h11.228"
      />
      <path fill="#F3F5F7" d="M36.655 21.655h11.228v25.518H36.655z" />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeLinecap="round"
        strokeWidth={0.7}
        d="M35.92 20.967l.735.688"
      />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeWidth={0.3}
        d="M47.884 21.656H36.656v25.518"
      />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeLinecap="round"
        strokeWidth={0.7}
        d="M36.655 47.174l-.765.765"
      />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeWidth={0.3}
        d="M36.655 47.191h11.229M35.785 20.785h11.949v27.26H35.785z"
      />
      <path
        stroke={selected ? "#B68D40" : "#9B9B9B"}
        strokeLinecap="round"
        strokeWidth={0.7}
        d="M60.927 20.887l-.794.768M60.132 47.174l.794.765"
      />
      <g stroke="#BABABA" strokeWidth={0.8}>
        <path fill="#CECECE" d="M32.909 15.444h10.428v45.948H32.909z" />
        <path
          fill="#D8D8D8"
          d="M32.909 15.233v46.269c.54.17.949.254 1.217.254.27 0 .679-.084 1.218-.254V15.233c-.25-.261-.646-.397-1.218-.397-.57 0-.967.136-1.217.397zM40.902 15.233v46.27c.53.17.94.253 1.217.253.277 0 .687-.084 1.218-.253v-46.27c-.25-.261-.647-.397-1.218-.397s-.967.136-1.217.397zM36.905 15.233v46.27c.532.17.941.253 1.218.253.276 0 .685-.084 1.217-.253v-46.27c-.25-.261-.646-.397-1.217-.397-.571 0-.968.136-1.218.397z"
        />
      </g>
      <g stroke="#BABABA" strokeWidth={0.8}>
        <path fill="#CECECE" d="M53.961 15.444H64.39v45.948H53.961z" />
        <path
          fill="#D8D8D8"
          d="M53.961 15.233v46.269c.54.17.95.254 1.218.254.269 0 .678-.084 1.218-.254V15.233c-.25-.261-.647-.397-1.218-.397s-.967.136-1.218.397zM61.954 15.233v46.27c.532.17.94.253 1.218.253.277 0 .686-.084 1.217-.253v-46.27c-.25-.261-.646-.397-1.217-.397-.571 0-.968.136-1.218.397zM57.958 15.233v46.27c.532.17.94.253 1.217.253.277 0 .686-.084 1.218-.253v-46.27c-.25-.261-.646-.397-1.218-.397-.57 0-.967.136-1.217.397z"
        />
      </g>
    </g>
  </svg>
);
export default Pair;
