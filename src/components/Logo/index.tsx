import * as React from 'react'

interface LogoProps extends React.SVGAttributes<HTMLOrSVGElement> {}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={174}
      height={199}
      viewBox="0 0 174 199"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_1_50)" fill="#81D8F7">
        <path d="M173.852 99.067c0-11.516-14.423-22.431-36.535-29.2 5.103-22.537 2.835-40.468-7.158-46.209-2.304-1.346-4.997-1.984-7.938-1.984v7.902c1.63 0 2.941.32 4.04.922 4.819 2.764 6.91 13.288 5.28 26.825-.39 3.331-1.028 6.84-1.808 10.419-6.945-1.702-14.529-3.013-22.502-3.863-4.784-6.556-9.745-12.51-14.741-17.718 11.552-10.738 22.395-16.62 29.766-16.62v-7.903c-9.745 0-22.502 6.946-35.4 18.994-12.9-11.977-25.657-18.852-35.402-18.852v7.902c7.335 0 18.214 5.848 29.767 16.514a167.379 167.379 0 00-14.636 17.683c-8.008.85-15.592 2.161-22.537 3.898A106.91 106.91 0 0142.205 57.5c-1.666-13.536.39-24.061 5.174-26.86 1.063-.639 2.445-.922 4.075-.922v-7.902c-2.977 0-5.67.637-8.009 1.984-9.957 5.74-12.19 23.636-7.052 46.103C14.352 76.707 0 87.586 0 99.067c0 11.517 14.423 22.432 36.535 29.2-5.103 22.538-2.835 40.469 7.158 46.21 2.304 1.346 4.997 1.984 7.974 1.984 9.745 0 22.502-6.946 35.4-18.994 12.9 11.978 25.657 18.852 35.402 18.852 2.977 0 5.67-.638 8.009-1.984 9.957-5.741 12.19-23.636 7.051-46.103 21.971-6.769 36.323-17.683 36.323-29.165zm-46.138-23.636c-1.312 4.572-2.942 9.285-4.784 13.998-1.453-2.835-2.977-5.67-4.643-8.505-1.63-2.835-3.366-5.6-5.102-8.292 5.032.744 9.886 1.665 14.529 2.8zm-16.23 37.74c-2.764 4.784-5.599 9.32-8.541 13.537-5.28.461-10.63.709-16.017.709-5.35 0-10.702-.248-15.947-.674a195.23 195.23 0 01-8.575-13.466 184.569 184.569 0 01-7.37-14.103c2.196-4.749 4.677-9.497 7.334-14.14 2.764-4.783 5.6-9.32 8.54-13.536 5.28-.46 10.632-.709 16.018-.709 5.35 0 10.702.248 15.946.673a195.047 195.047 0 018.576 13.466 184.832 184.832 0 017.371 14.104 198.982 198.982 0 01-7.335 14.139zm11.446-4.607a152.183 152.183 0 014.89 14.104 158.993 158.993 0 01-14.6 2.835c1.736-2.728 3.473-5.528 5.103-8.398 1.63-2.835 3.154-5.706 4.607-8.541zm-35.933 37.811c-3.296-3.402-6.591-7.193-9.852-11.339 3.19.141 6.45.248 9.746.248 3.33 0 6.626-.071 9.851-.248a138.327 138.327 0 01-9.745 11.339zm-26.365-20.872c-5.032-.744-9.887-1.665-14.529-2.799 1.311-4.572 2.941-9.285 4.784-13.998 1.453 2.835 2.977 5.67 4.642 8.505a234.419 234.419 0 005.103 8.292zM86.82 51.76c3.295 3.401 6.59 7.193 9.851 11.34-3.19-.142-6.45-.249-9.745-.249-3.331 0-6.627.071-9.851.248a138.327 138.327 0 019.745-11.34zM60.597 72.632c-1.737 2.728-3.473 5.528-5.103 8.398a200.102 200.102 0 00-4.607 8.505 151.86 151.86 0 01-4.89-14.104 172.127 172.127 0 0114.6-2.8zm-32.07 44.366c-12.545-5.351-20.66-12.367-20.66-17.93 0-5.564 8.115-12.616 20.66-17.931 3.047-1.312 6.378-2.481 9.815-3.58 2.02 6.946 4.678 14.175 7.974 21.581-3.26 7.371-5.883 14.565-7.867 21.475-3.508-1.099-6.84-2.304-9.922-3.615zm19.064 50.639c-4.819-2.764-6.91-13.288-5.28-26.825.39-3.331 1.028-6.84 1.808-10.419 6.945 1.701 14.529 3.012 22.502 3.863 4.784 6.556 9.745 12.509 14.742 17.718-11.553 10.738-22.396 16.62-29.767 16.62-1.595-.035-2.941-.354-4.005-.957zm84.056-27.002c1.666 13.536-.39 24.061-5.174 26.86-1.063.638-2.445.922-4.075.922-7.335 0-18.214-5.847-29.767-16.514a167.416 167.416 0 0014.636-17.682c8.008-.851 15.592-2.162 22.537-3.898.815 3.579 1.453 7.016 1.843 10.312zm13.643-23.637c-3.047 1.311-6.378 2.481-9.816 3.579-2.02-6.945-4.677-14.174-7.973-21.58 3.26-7.371 5.882-14.565 7.867-21.475 3.508 1.099 6.839 2.303 9.958 3.614 12.544 5.351 20.659 12.368 20.659 17.931-.035 5.564-8.15 12.616-20.695 17.931z" />
        <path d="M86.89 115.262c8.945 0 16.195-7.251 16.195-16.195 0-8.944-7.25-16.194-16.194-16.194-8.944 0-16.195 7.25-16.195 16.194 0 8.944 7.25 16.195 16.195 16.195z" />
      </g>
      <defs>
        <clipPath id="clip0_1_50">
          <path fill="#fff" d="M0 0H173.852V198.099H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}
