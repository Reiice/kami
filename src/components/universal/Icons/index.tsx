import type { FC, SVGProps } from 'react'
import { memo } from 'react'

export const EmptyIcon: FC = memo(() => {
  return (
    <svg
      version="1.1"
      x="0px"
      y="0px"
      width="59.227px"
      height="59.227px"
      viewBox="0 0 59.227 59.227"
      className="fill-current"
    >
      <g>
        <g>
          <path
            d="M51.586,10.029c-0.333-0.475-0.897-0.689-1.449-0.607c-0.021-0.005-0.042-0.014-0.063-0.017L27.469,6.087
			c-0.247-0.037-0.499-0.01-0.734,0.076L8.63,12.799c-0.008,0.003-0.015,0.008-0.023,0.011c-0.019,0.008-0.037,0.02-0.057,0.027
			c-0.099,0.044-0.191,0.096-0.276,0.157c-0.026,0.019-0.051,0.038-0.077,0.059c-0.093,0.076-0.178,0.159-0.249,0.254
			c-0.004,0.006-0.01,0.009-0.014,0.015L0.289,23.78c-0.293,0.401-0.369,0.923-0.202,1.391c0.167,0.469,0.556,0.823,1.038,0.947
			l6.634,1.713v16.401c0,0.659,0.431,1.242,1.062,1.435l24.29,7.422c0.008,0.004,0.017,0.001,0.025,0.005
			c0.13,0.036,0.266,0.059,0.402,0.06c0.003,0,0.007,0.002,0.011,0.002l0,0h0.001c0.143,0,0.283-0.026,0.423-0.067
			c0.044-0.014,0.085-0.033,0.13-0.052c0.059-0.022,0.117-0.038,0.175-0.068l17.43-9.673c0.477-0.265,0.772-0.767,0.772-1.312
			V25.586l5.896-2.83c0.397-0.19,0.69-0.547,0.802-0.973c0.111-0.427,0.03-0.88-0.223-1.241L51.586,10.029z M27.41,9.111
			l17.644,2.59L33.35,17.143l-18.534-3.415L27.41,9.111z M9.801,15.854l21.237,3.914l-6.242,9.364l-20.78-5.365L9.801,15.854z
			 M10.759,43.122V28.605l14.318,3.697c0.125,0.031,0.25,0.048,0.375,0.048c0.493,0,0.965-0.244,1.248-0.668l5.349-8.023v25.968
			L10.759,43.122z M49.479,41.1l-14.431,8.007V25.414l2.635,5.599c0.171,0.361,0.479,0.641,0.854,0.773
			c0.163,0.06,0.333,0.087,0.502,0.087c0.223,0,0.444-0.05,0.649-0.146l9.789-4.698L49.479,41.1L49.479,41.1z M39.755,28.368
			l-4.207-8.938L49.85,12.78l5.634,8.037L39.755,28.368z"
          />
        </g>
      </g>
    </svg>
  )
})

export function MusicIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 48 48" {...props}>
      <g fill="#E91E63">
        <circle cx="19" cy="33" r="9"></circle>
        <path d="M24 6v27h4V14l11 3v-7z"></path>
      </g>
    </svg>
  )
}

export function PauseIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        d="M22 12c0-5.54-4.46-10-10-10c-1.17 0-2.3.19-3.38.56l.7 1.94c.85-.34 1.74-.53 2.68-.53c4.41 0 8.03 3.62 8.03 8.03c0 4.41-3.62 8.03-8.03 8.03c-4.41 0-8.03-3.62-8.03-8.03c0-.94.19-1.88.53-2.72l-1.94-.66C2.19 9.7 2 10.83 2 12c0 5.54 4.46 10 10 10s10-4.46 10-10M5.47 7c-.79 0-1.5-.68-1.5-1.53c0-.79.71-1.5 1.5-1.5c.85 0 1.53.71 1.53 1.5C7 6.32 6.32 7 5.47 7M9 9h2v6H9m4-6h2v6h-2"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function PhUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M231.9 212a120.7 120.7 0 0 0-67.1-54.2a72 72 0 1 0-73.6 0A120.7 120.7 0 0 0 24.1 212a8 8 0 1 0 13.8 8a104.1 104.1 0 0 1 180.2 0a8 8 0 1 0 13.8-8ZM72 96a56 56 0 1 1 56 56a56 56 0 0 1-56-56Z"
      ></path>
    </svg>
  )
}

export function MdiFountainPenTip(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m15.54 3.5l4.96 4.97l-1.43 1.41l-4.95-4.95l1.42-1.43M3.5 19.78l6.5-6.47c-.1-.31-.03-.7.23-.96c.39-.39 1.03-.39 1.42 0c.39.4.39 1.03 0 1.42c-.26.26-.65.33-.96.23l-6.47 6.5l10.61-3.55l3.53-6.36l-4.94-4.95l-6.37 3.53L3.5 19.78Z"
      ></path>
    </svg>
  )
}

export function SiGlyphGlobal(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <g fill="currentColor" fillRule="evenodd">
        <path d="M8.048 0a8 8 0 1 0 .001 16.001A8 8 0 0 0 8.048 0zM8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"></path>
        <path d="M2.959 2.684c-.27 1.344.735 3.399 2.872 3.899c2.136.5 1.218.084.886-.583c-.334-.667-.035-1.167.482-1.333c.518-.167.387.293 1.155-.667c.194-2-1.472-.027-1.638-.86C8.366 1.223 5.95.5 5.249.75c-.701.25-2.02.589-2.29 1.934zm3.914 5.01c-.124.055-.702.416-.901.666c-.199.25-.286.778 0 1c.286.223-.016 1.279.755 1.473c.771.194 1.543.307 1.572.917c.027.61-.072 2.027-.443 2.167c.5.277 1.717-1.195 2.145-1.973c.429-.777.572-1.889.543-2.167c-.029-.277.171-.86.257-1.61c.085-.75-.57-.8-.655-1.133c-.087-.334-.203-.701-3.273.66zM13.125 4s-2.012.861-.644 2.14c1.366 1.277 2.062 2.49 1.995 2.768c-.062.276-1.38 1.706-.623 1.594c.761-.111 1.322-1.611 1.443-2.501c.119-.89-.924-2.639-.967-2.777c-.036-.141-.722-1.209-1.204-1.224z"></path>
      </g>
    </svg>
  )
}

export function RadixIconsAvatar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 15 15" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M.877 7.5a6.623 6.623 0 1 1 13.246 0a6.623 6.623 0 0 1-13.246 0ZM7.5 1.827a5.673 5.673 0 0 0-4.193 9.494A4.971 4.971 0 0 1 7.5 9.025a4.97 4.97 0 0 1 4.193 2.296A5.673 5.673 0 0 0 7.5 1.827Zm3.482 10.152A4.023 4.023 0 0 0 7.5 9.975a4.023 4.023 0 0 0-3.482 2.004A5.648 5.648 0 0 0 7.5 13.173c1.312 0 2.52-.446 3.482-1.194ZM5.15 6.505a2.35 2.35 0 1 1 4.7 0a2.35 2.35 0 0 1-4.7 0Zm2.35-1.4a1.4 1.4 0 1 0 0 2.8a1.4 1.4 0 0 0 0-2.8Z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function MdiEmailFastOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M22 5.5H9c-1.1 0-2 .9-2 2v9a2 2 0 0 0 2 2h13c1.11 0 2-.89 2-2v-9a2 2 0 0 0-2-2m0 11H9V9.17l6.5 3.33L22 9.17v7.33m-6.5-5.69L9 7.5h13l-6.5 3.31M5 16.5c0 .17.03.33.05.5H1c-.552 0-1-.45-1-1s.448-1 1-1h4v1.5M3 7h2.05c-.02.17-.05.33-.05.5V9H3c-.55 0-1-.45-1-1s.45-1 1-1m-2 5c0-.55.45-1 1-1h3v2H2c-.55 0-1-.45-1-1Z"
      ></path>
    </svg>
  )
}

export function PhBookOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 256 256" {...props}>
      <path
        fill="currentColor"
        d="M224 48h-64a40 40 0 0 0-32 16a40 40 0 0 0-32-16H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h64a24.1 24.1 0 0 1 24 24a8 8 0 0 0 16 0a24.1 24.1 0 0 1 24-24h64a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16ZM96 192H32V64h64a24.1 24.1 0 0 1 24 24v112a40 40 0 0 0-24-8Zm128 0h-64a40 40 0 0 0-24 8V88a24.1 24.1 0 0 1 24-24h64Z"
      ></path>
    </svg>
  )
}

export function JamTags(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 -3 24 24" {...props}>
      <path
        fill="currentColor"
        d="M11.586 15.071L13 13.657l1.414 1.414l6.165-6.165l1.09-3.552l-2.484-2.483l-1.079.336l-1.598-1.598L18.591.96a2 2 0 0 1 2.008.496l2.483 2.483a2 2 0 0 1 .498 2L22.345 9.97l-7.93 7.93l-2.83-2.828zM14.236.75l2.482 2.483a2 2 0 0 1 .498 2l-1.235 4.028l-7.93 7.931l-7.78-7.778L8.17 1.516L12.227.254a2 2 0 0 1 2.008.496zM3.1 9.414l4.95 4.95l6.164-6.165l1.09-3.552l-2.484-2.483l-3.585 1.115L3.1 9.414zm7.424-2.475a1.5 1.5 0 1 1 2.121-2.121a1.5 1.5 0 0 1-2.12 2.121zm6.886 1.022l.782-2.878c.45.152.755.325.917.518a1.5 1.5 0 0 1-.185 2.113c-.29.244-.795.326-1.514.247z"
      ></path>
    </svg>
  )
}

export function IonSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0 0 34.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 0 0 327.3 362.6l94.09 94.09a25 25 0 0 0 35.3-35.3ZM97.92 222.72a124.8 124.8 0 1 1 124.8 124.8a124.95 124.95 0 0 1-124.8-124.8Z"
      ></path>
    </svg>
  )
}

export function SolidBookmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.78 13.918a.5.5 0 0 1-.778-.416V4.01a2 2 0 0 1 1.996-2l6-.011a2 2 0 0 1 2.004 1.996v9.506a.5.5 0 0 1-.778.416l-4.222-2.82l-4.222 2.82Z"
      ></path>
    </svg>
  )
}

export function RegularBookmark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M3.78 13.918a.5.5 0 0 1-.778-.416V4.01a2 2 0 0 1 1.996-2l6-.011a2 2 0 0 1 2.004 1.996v9.506a.5.5 0 0 1-.778.416l-4.222-2.82l-4.222 2.82ZM12.002 4l-.007-.118A1 1 0 0 0 11 3l-6 .01a1 1 0 0 0-.998 1v8.557l3.722-2.486a.5.5 0 0 1 .556 0l3.722 2.486V4Z"
      ></path>
    </svg>
  )
}

export function IcBaselineMenuOpen(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12L21 8.41L19.59 7l-5 5l5 5L21 15.59z"
      ></path>
    </svg>
  )
}

export function MdiTagHeartOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M4 2a2 2 0 0 0-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58c.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41c0-.55-.23-1.06-.59-1.42l-9-9C12.05 2.22 11.55 2 11 2H4m7 2l9 9l-7 7l-9-9V4h7M6.5 5A1.5 1.5 0 0 0 5 6.5A1.5 1.5 0 0 0 6.5 8A1.5 1.5 0 0 0 8 6.5A1.5 1.5 0 0 0 6.5 5m4.45 5.5c-1.13 0-2.05.92-2.05 2.05c0 .57.23 1.07.6 1.45l3.5 3.5l3.5-3.5c.37-.37.6-.89.6-1.45a2.05 2.05 0 0 0-2.05-2.05c-.55 0-1.08.23-1.45.6l-.6.6l-.6-.59c-.37-.38-.9-.61-1.45-.61Z"
      ></path>
    </svg>
  )
}

export function BxBxPaperPlane(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.563 3.34a1.002 1.002 0 0 0-.989-.079l-17 8a1 1 0 0 0 .026 1.821L8 15.445v6.722l5.836-4.168l4.764 2.084a1 1 0 0 0 1.399-.85l1-15a1.005 1.005 0 0 0-.436-.893zm-2.466 14.34l-5.269-2.306L16 9.167l-7.649 4.25l-2.932-1.283l13.471-6.34l-.793 11.886z"
      ></path>
    </svg>
  )
}

export function MdiLanguageMarkdown(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M20.56 18H3.44C2.65 18 2 17.37 2 16.59V7.41C2 6.63 2.65 6 3.44 6h17.12c.79 0 1.44.63 1.44 1.41v9.18c0 .78-.65 1.41-1.44 1.41M6.81 15.19v-3.66l1.92 2.35l1.92-2.35v3.66h1.93V8.81h-1.93l-1.92 2.35l-1.92-2.35H4.89v6.38h1.92M19.69 12h-1.92V8.81h-1.92V12h-1.93l2.89 3.28L19.69 12Z"
      ></path>
    </svg>
  )
}

export function EntypoCreativeCommons(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <path
        fill="currentColor"
        d="M7.651 11.628c-.406 0-.713-.149-.92-.445c-.209-.295-.312-.69-.312-1.182c0-1.084.41-1.627 1.232-1.627c.164 0 .342.055.534.164s.353.3.484.574l1.232-.64c-.492-.887-1.308-1.33-2.447-1.33c-.778 0-1.422.257-1.93.771c-.51.516-.765 1.211-.765 2.088c0 .898.253 1.6.756 2.103c.504.504 1.168.754 1.988.754a2.697 2.697 0 0 0 2.416-1.445l-1.135-.574c-.219.525-.597.789-1.133.789zm5.307 0c-.406 0-.713-.149-.92-.445c-.209-.295-.312-.69-.312-1.182c0-1.084.41-1.627 1.232-1.627c.174 0 .357.055.549.164c.192.11.353.3.486.574l1.215-.64c-.482-.887-1.293-1.33-2.432-1.33c-.777 0-1.42.257-1.93.771c-.509.516-.763 1.211-.763 2.088c0 .898.248 1.6.747 2.103c.498.504 1.163.754 1.996.754c.503 0 .97-.129 1.396-.384a2.831 2.831 0 0 0 1.02-1.06l-1.151-.575c-.219.525-.598.789-1.133.789zm3.855-8.444C14.954 1.328 12.679.4 9.987.4c-2.659 0-4.91.928-6.752 2.784C1.345 5.104.4 7.375.4 10c0 2.624.945 4.88 2.835 6.768c1.89 1.888 4.142 2.832 6.752 2.832c2.644 0 4.935-.952 6.874-2.856C18.687 14.936 19.6 12.688 19.6 10c0-2.688-.93-4.96-2.787-6.816zM15.61 15.496c-1.586 1.568-3.452 2.352-5.6 2.352c-2.146 0-3.996-.776-5.55-2.329c-1.554-1.551-2.33-3.391-2.33-5.52c0-2.127.784-3.983 2.354-5.567C5.99 2.896 7.832 2.127 10.01 2.127c2.18 0 4.03.769 5.552 2.305C17.101 5.952 17.87 7.807 17.87 10c0 2.208-.753 4.04-2.259 5.496z"
      ></path>
    </svg>
  )
}

export function GgCoffee(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <g fill="currentColor">
        <path d="M6 2.5a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1Z"></path>
        <path
          fillRule="evenodd"
          d="M13 21.5a6.002 6.002 0 0 0 5.917-5H19a4 4 0 0 0 0-8v-1H1v8a6 6 0 0 0 6 6h6ZM3 9.5v6a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-6H3Zm18 3a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2Z"
          clipRule="evenodd"
        ></path>
        <path d="M9 3.5a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0v-2Zm5-1a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0v-2a1 1 0 0 0-1-1Z"></path>
      </g>
    </svg>
  )
}

export function IonThumbsup(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path
        d="M424.2 259.3c13.8-4.5 23.8-17.5 23.8-32.8 0-19-15.4-34.5-34.5-34.5H310.9c2-25 10-53.6 1.1-87.3-7.5-28.4-39.4-49.7-52.4-36.8-5 4.9-3.5 15.2-3.5 33.8 0 42.8-17.8 86.1-39.8 108.7-9.4 9.7-25.2 13-40.2 13.6v-16H64v240h112v-32c20.6-.5 52.6 5.2 75.8 6.6 52 3.1 102-2.4 126.3-8.1 24.3-5.7 35-13 35-30.6 0-6.4-1.9-12.3-5.1-17.3 11.8-4.7 20.1-16.2 20.1-29.7 0-7.2-2.4-13.8-6.4-19.2 11.9-4.6 20.4-16.2 20.4-29.8-.1-12.5-7.4-23.4-17.9-28.6zM112 415.7c-8.8 0-16-7.1-16-16 0-8.8 7.2-16 16-16s16 7.1 16 16c0 8.8-7.2 16-16 16z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export function FeHash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 15h4V9h-4v6Zm0 2v3a1 1 0 0 1-2 0v-3H5a1 1 0 0 1 0-2h3V9H5a1 1 0 1 1 0-2h3V4a1 1 0 1 1 2 0v3h4V4a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2h-3v6h3a1 1 0 0 1 0 2h-3v3a1 1 0 0 1-2 0v-3h-4Z"
      ></path>
    </svg>
  )
}

export function MdiCalendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5v-5Z"
      ></path>
    </svg>
  )
}

export function JamTrash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="-3 -2 24 24" {...props}>
      <path
        fill="currentColor"
        d="M6 2V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h4a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-.133l-.68 10.2a3 3 0 0 1-2.993 2.8H5.826a3 3 0 0 1-2.993-2.796L2.137 7H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4zm10 2H2v1h14V4zM4.141 7l.687 10.068a1 1 0 0 0 .998.932h6.368a1 1 0 0 0 .998-.934L13.862 7h-9.72zM7 8a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1zm4 0a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V9a1 1 0 0 1 1-1z"
      ></path>
    </svg>
  )
}

export function CodiconGithubInverted(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.976 0A7.977 7.977 0 0 0 0 7.976c0 3.522 2.3 6.507 5.431 7.584c.392.049.538-.196.538-.392v-1.37c-2.201.49-2.69-1.076-2.69-1.076c-.343-.93-.881-1.175-.881-1.175c-.734-.489.048-.489.048-.489c.783.049 1.224.832 1.224.832c.734 1.223 1.859.88 2.3.685c.048-.538.293-.88.489-1.076c-1.762-.196-3.621-.881-3.621-3.964c0-.88.293-1.566.832-2.153c-.05-.147-.343-.978.098-2.055c0 0 .685-.196 2.201.832c.636-.196 1.322-.245 2.007-.245s1.37.098 2.006.245c1.517-1.027 2.202-.832 2.202-.832c.44 1.077.146 1.908.097 2.104a3.16 3.16 0 0 1 .832 2.153c0 3.083-1.86 3.719-3.62 3.915c.293.244.538.733.538 1.467v2.202c0 .196.146.44.538.392A7.984 7.984 0 0 0 16 7.976C15.951 3.572 12.38 0 7.976 0z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export function CarbonPassword(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2Zm0 16a7.013 7.013 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18Z"
      ></path>
      <circle cx="22" cy="10" r="2" fill="currentColor"></circle>
    </svg>
  )
}

export function RiSunCloudyFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M9.984 5.06a6.5 6.5 0 1 1 11.286 6.436A5.5 5.5 0 0 1 17.5 21L9 20.999a8 8 0 1 1 .984-15.94zm2.071.544a8.026 8.026 0 0 1 4.403 4.495a5.529 5.529 0 0 1 3.12.307a4.5 4.5 0 0 0-7.522-4.802z"
      ></path>
    </svg>
  )
}

export function MdiCloud(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M19.35 10.03A7.49 7.49 0 0 0 12 4C9.11 4 6.6 5.64 5.35 8.03A6.004 6.004 0 0 0 0 14a6 6 0 0 0 6 6h13a5 5 0 0 0 5-5c0-2.64-2.05-4.78-4.65-4.97Z"
      ></path>
    </svg>
  )
}

export function MdiSnowflake(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m20.79 13.95l-2.33.62l-2-1.13v-2.88l2-1.13l2.33.62l.52-1.93l-1.77-.47l.46-1.77l-1.93-.52l-.62 2.33l-2 1.13L13 7.38V5.12l1.71-1.71L13.29 2L12 3.29L10.71 2L9.29 3.41L11 5.12v2.26L8.5 8.82l-2-1.13l-.58-2.33L4 5.88l.47 1.77l-1.77.47l.52 1.93l2.33-.62l2 1.13v2.89l-2 1.13l-2.33-.62l-.52 1.93l1.77.47L4 18.12l1.93.52l.62-2.33l2-1.13L11 16.62v2.26l-1.71 1.71L10.71 22L12 20.71L13.29 22l1.41-1.41l-1.7-1.71v-2.26l2.5-1.45l2 1.13l.62 2.33l1.88-.51l-.47-1.77l1.77-.47l-.51-1.93M9.5 10.56L12 9.11l2.5 1.45v2.88L12 14.89l-2.5-1.45v-2.88Z"
      ></path>
    </svg>
  )
}

export function BiCloudRainFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M4.158 12.025a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.317zm3 0a.5.5 0 0 1 .316.633l-1 3a.5.5 0 1 1-.948-.316l1-3a.5.5 0 0 1 .632-.317zm.247-6.998a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 11H13a3 3 0 0 0 .405-5.973z"
      ></path>
    </svg>
  )
}

export function BiCloudLightningRainFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 16" {...props}>
      <path
        fill="currentColor"
        d="M2.658 11.026a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.5 1.5a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 1 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm9.5 0a.5.5 0 0 1 .316.632l-.5 1.5a.5.5 0 0 1-.948-.316l.5-1.5a.5.5 0 0 1 .632-.316zm-7.105-1.25A.5.5 0 0 1 7.5 11h1a.5.5 0 0 1 .474.658l-.28.842H9.5a.5.5 0 0 1 .39.812l-2 2.5a.5.5 0 0 1-.875-.433L7.36 14H6.5a.5.5 0 0 1-.447-.724l1-2zm6.352-7.249a5.001 5.001 0 0 0-9.499-1.004A3.5 3.5 0 1 0 3.5 10H13a3 3 0 0 0 .405-5.973z"
      ></path>
    </svg>
  )
}

export function MdiClockTimeThreeOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5H17Z"
      ></path>
    </svg>
  )
}

export function MdiShare(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m21 12l-7-7v4C7 10 4 15 3 20c2.5-3.5 6-5.1 11-5.1V19l7-7Z"
      ></path>
    </svg>
  )
}

export function RiNeteaseCloudMusicFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="#CB2B29"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-1.086-10.432c.24-.84 1.075-1.541 1.99-1.648c.187.694.388 1.373.545 2.063c.053.23.037.495-.018.727c-.213.892-1.248 1.242-1.978.685c-.53-.405-.742-1.12-.539-1.827zm3.817-.197c-.125-.465-.256-.927-.393-1.42c.5.13.908.36 1.255.698c1.257 1.221 1.385 3.3.294 4.731c-1.135 1.49-3.155 2.134-5.028 1.605c-2.302-.65-3.808-2.952-3.441-5.316c.274-1.768 1.27-3.004 2.9-3.733c.407-.182.58-.56.42-.93c-.157-.364-.54-.504-.944-.343c-2.721 1.089-4.32 4.134-3.67 6.987c.713 3.118 3.495 5.163 6.675 4.859c1.732-.165 3.164-.948 4.216-2.347c1.506-2.002 1.297-4.783-.463-6.499c-.666-.65-1.471-1.018-2.39-1.153c-.083-.013-.217-.052-.232-.106c-.087-.313-.18-.632-.206-.954c-.029-.357.29-.64.65-.645c.253-.003.434.13.603.3c.303.3.704.322.988.062c.29-.264.296-.678.018-1.008c-.566-.672-1.586-.891-2.43-.523c-.847.37-1.321 1.187-1.2 2.093c.038.28.11.557.167.842l-.26.072a3.863 3.863 0 0 0-2.098 1.414c-.921 1.22-.936 2.828-.041 3.947c1.274 1.594 3.747 1.284 4.523-.568c.284-.676.275-1.368.087-2.065z"
      ></path>
    </svg>
  )
}

export function MdiClockOutline(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8a8 8 0 0 0-8 8a8 8 0 0 0 8 8m0-18a10 10 0 0 1 10 10a10 10 0 0 1-10 10C6.47 22 2 17.5 2 12A10 10 0 0 1 12 2m.5 5v5.25l4.5 2.67l-.75 1.23L11 13V7h1.5Z"
      ></path>
    </svg>
  )
}

export function FluentEyeHide20Regular(props: SVGProps<SVGSVGElement>) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 20 20" {...props}>
      <g fill="none">
        <path
          d="M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.097 8.097 0 0 0-3.366 5.046a.5.5 0 1 0 .98.204a7.09 7.09 0 0 1 3.107-4.528L7.953 8.66a3.5 3.5 0 1 0 4.886 4.886l4.307 4.308a.5.5 0 0 0 .708-.708l-15-15zm9.265 10.68A2.5 2.5 0 1 1 8.673 9.38l3.446 3.447z"
          fill="currentColor"
        ></path>
        <path
          d="M10.123 8.002l3.375 3.374a3.5 3.5 0 0 0-3.374-3.374z"
          fill="currentColor"
        ></path>
        <path
          d="M10 6c-.57 0-1.129.074-1.666.213l-.803-.803A7.648 7.648 0 0 1 10 5c3.693 0 6.942 2.673 7.72 6.398a.5.5 0 0 1-.98.204C16.058 8.327 13.207 6 10 6z"
          fill="currentColor"
        ></path>
      </g>
    </svg>
  )
}

export function PhPushPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M236.7 96a15.9 15.9 0 0 0-4.7-11.3L171.3 24a16.1 16.1 0 0 0-22.6 0L90 82.7c-10.7-3.3-35-7.4-60.4 13.1a15.9 15.9 0 0 0-1.3 23.8L76.7 168l-34.4 34.3a8.1 8.1 0 0 0 0 11.4a8.2 8.2 0 0 0 11.4 0L88 179.3l48.2 48.2a16.1 16.1 0 0 0 11.3 4.7h1.1a16.3 16.3 0 0 0 11.7-6.4c19.6-26.1 17.7-47.3 13.2-60l58.5-58.5a15.9 15.9 0 0 0 4.7-11.3Zm-78.4 62.3a8.2 8.2 0 0 0-1.5 9.3c9.5 18.9-1.8 38.6-9.3 48.6L39.6 108.3C51.7 98.5 63.3 96 72.1 96s15.9 2.9 16.3 3.2a8.2 8.2 0 0 0 9.3-1.5L160 35.3L220.7 96Z"
      ></path>
    </svg>
  )
}

export function PhPushPinFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="m232 107.3l-58.5 58.5c4.5 12.7 6.4 33.9-13.2 60a16.3 16.3 0 0 1-11.7 6.4h-1.1a16.1 16.1 0 0 1-11.3-4.7L88 179.3l-34.3 34.4a8.2 8.2 0 0 1-11.4 0a8.1 8.1 0 0 1 0-11.4L76.7 168l-48.4-48.4a15.9 15.9 0 0 1 1.3-23.8C55 75.3 79.3 79.4 90 82.7L148.7 24a16.1 16.1 0 0 1 22.6 0L232 84.7a15.9 15.9 0 0 1 0 22.6Z"
      ></path>
    </svg>
  )
}

export function PhLinkFill(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      {...props}
    >
      <path
        fill="currentColor"
        d="M225.3 82.7a51.8 51.8 0 0 1-15.3 36.8l-28.3 28.3a52 52 0 0 1-73.5 0a8 8 0 1 1 11.3-11.3a36.1 36.1 0 0 0 50.9 0l28.3-28.3a36 36 0 1 0-50.9-50.9L128 77.1a8 8 0 0 1-11.3-11.3L136.5 46a52.1 52.1 0 0 1 88.8 36.7ZM128 178.9l-19.8 19.8a36 36 0 0 1-50.9-50.9l28.3-28.3a36.1 36.1 0 0 1 50.9 0a8 8 0 0 0 11.3-11.3a52 52 0 0 0-73.5 0L46 136.5a52 52 0 1 0 73.5 73.5l19.8-19.8a8 8 0 0 0-11.3-11.3Z"
      ></path>
    </svg>
  )
}

export function MaterialSymbolsArrowCircleRightOutlineRounded(
  props: SVGProps<SVGSVGElement>,
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="m12.7 15.3l2.6-2.6q.3-.3.3-.7q0-.4-.3-.7l-2.625-2.625q-.275-.275-.687-.263q-.413.013-.688.288q-.275.275-.275.7q0 .425.275.7l.9.9H8.975q-.425 0-.7.287Q8 11.575 8 12t.288.712Q8.575 13 9 13h3.2l-.925.925q-.275.275-.263.688q.013.412.288.687q.275.275.7.275q.425 0 .7-.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2q3.325 0 5.663-2.337Q20 15.325 20 12t-2.337-5.663Q15.325 4 12 4T6.338 6.337Q4 8.675 4 12t2.338 5.663Q8.675 20 12 20Zm0-8Z"
      ></path>
    </svg>
  )
}
