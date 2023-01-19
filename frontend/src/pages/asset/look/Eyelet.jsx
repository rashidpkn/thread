import * as React from "react";
const Eyelet = ({selected}) => (
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
      <g stroke={selected  ? '#B68d40' : "#979797"} transform="translate(24 19)">
        <g strokeWidth={0.8}>
          <path fill="#CECECE" d="M.4 2.095h49.2v37.336H.4z" />
          <path
            fill="#D8D8D8"
            d="M.4 2.006V39.43h13.607V2.006C12.625.944 10.358.4 7.203.4 4.05.4 1.781.944.4 2.006zM35.993 2.006V39.43H49.6V2.006C48.219.944 45.951.4 42.797.4c-3.155 0-5.422.544-6.804 1.606zM18.197 2.006V39.43h13.606V2.006C30.422.944 28.155.4 25 .4s-5.422.544-6.803 1.606z"
          />
        </g>
        <ellipse cx={11.441} cy={9.746} fill="#FFF" rx={1.271} ry={4.661} />
        <ellipse cx={29.237} cy={9.746} fill="#FFF" rx={1.271} ry={4.661} />
        <ellipse cx={20.763} cy={9.746} fill="#FFF" rx={1.271} ry={4.661} />
        <ellipse cx={38.559} cy={9.746} fill="#FFF" rx={1.271} ry={4.661} />
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
export default Eyelet;