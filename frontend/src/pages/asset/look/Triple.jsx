import * as React from "react";
const Triple = ({selected}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={98}
    height={98}
    viewBox="0 0 98 98"
  >
    <defs>
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
      <rect id="b" width={90} height={90} rx={6} />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path
        fill="#D8D8D8"
        stroke={selected ? "#b68d40" : "#979797"}
        strokeWidth={0.8}
        d="M24.4 21.4h49.2v37.336H24.4z"
      />
      <g strokeWidth={0.8}>
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M33.32 37.986c-2.17 6.02-3.254 10.395-3.254 13.1v7.345h6.524v-7.346c0-2.416-1.09-6.794-3.27-13.1z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M32.33 50.746c.101-2.444.21-4.277.327-5.5.116-1.223.356-3.057.72-5.5.343 2.438.568 4.272.674 5.5.106 1.228.198 3.061.276 5.5"
        />
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M29.552 20.066c-.21 2.169-.203 4.888.026 8.155.222 3.185 1.448 6.212 3.682 9.082l.138.174.12-.145c2.24-2.743 3.468-5.704 3.691-8.893.23-3.29.272-6.095.127-8.414-.725-.387-1.406-.485-2.063-.306l-.39.1-.134-.069a2.946 2.946 0 0 0-1.356-.35c-.414 0-.83.1-1.252.301l-.219.037a4.547 4.547 0 0 0-.526-.031c-.593 0-1.207.119-1.844.359zm3.891 17.468.094.118v.277h-.007l-.296-.247v-.01l.116-.138h.093z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M31.873 20.57c.15 3.25.31 5.766.48 7.545.171 1.78.524 4.564 1.057 8.355.504-3.784.834-6.569.99-8.355.156-1.786.299-4.302.43-7.546"
        />
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M49.083 37.986c-2.17 6.02-3.254 10.395-3.254 13.1v7.345h6.524v-7.346c0-2.416-1.09-6.794-3.27-13.1z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M48.092 50.746c.102-2.444.21-4.277.327-5.5.117-1.223.357-3.057.72-5.5.344 2.438.569 4.272.675 5.5.106 1.228.198 3.061.276 5.5"
        />
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M45.315 20.066c-.211 2.169-.203 4.888.025 8.155.223 3.185 1.449 6.212 3.682 9.082l.138.174.122-.145c2.24-2.743 3.467-5.704 3.69-8.893.23-3.29.272-6.095.126-8.414-.724-.387-1.405-.485-2.062-.306l-.39.1-.135-.069a2.946 2.946 0 0 0-1.355-.35c-.414 0-.83.1-1.252.301l-.219.037a4.547 4.547 0 0 0-.526-.031c-.594 0-1.208.119-1.844.359zm3.89 17.468.095.118v.277h-.007l-.296-.247v-.01l.116-.138h.093z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M47.635 20.57c.15 3.25.31 5.766.481 7.545.17 1.78.523 4.564 1.057 8.355.504-3.784.834-6.569.99-8.355.155-1.786.299-4.302.43-7.546"
        />
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M65.083 37.986c-2.17 6.02-3.254 10.395-3.254 13.1v7.345h6.524v-7.346c0-2.416-1.09-6.794-3.27-13.1z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M64.092 50.746c.102-2.444.21-4.277.327-5.5.117-1.223.357-3.057.72-5.5.344 2.438.569 4.272.675 5.5.106 1.228.198 3.061.276 5.5"
        />
        <path
          fill="#D8D8D8"
          stroke={selected ? "#b68d40" : "#979797"}
          d="M61.315 20.066c-.211 2.169-.203 4.888.025 8.155.223 3.185 1.449 6.212 3.682 9.082l.138.174.122-.145c2.24-2.743 3.467-5.704 3.69-8.893.23-3.29.272-6.095.126-8.414-.724-.387-1.405-.485-2.062-.306l-.39.1-.135-.069a2.946 2.946 0 0 0-1.355-.35c-.414 0-.83.1-1.252.301l-.219.037a4.547 4.547 0 0 0-.526-.031c-.594 0-1.208.119-1.844.359zm3.89 17.468.095.118v.277h-.007l-.296-.247v-.01l.116-.138h.093z"
        />
        <path
          stroke="#BBB"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M63.635 20.57c.15 3.25.31 5.766.481 7.545.17 1.78.523 4.564 1.057 8.355.504-3.784.834-6.569.99-8.355.155-1.786.299-4.302.43-7.546"
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
export default Triple;
