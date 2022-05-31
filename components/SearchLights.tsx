import styles from '../styles/SearchLights.module.scss'

export default function SearchLights() {
  return (
    <svg
      viewBox="0 0 1920 376"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
      className={styles.searchlights}
    >
      <g clipPath="url(#clip0)" id="clipGroup">
        <rect width="1920" height="377" fill="#6C26FF" />
        <path
          d="M947 910L-83.5699 -305L1977.57 -305L947 910Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.backlight}
        />
        <path
          d="M781 1084L599.135 -498.5L962.865 -498.5L781 1084Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.searchlightMed1}
        />
        <path
          d="M1139 1084L957.135 -498.5L1320.87 -498.5L1139 1084Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.searchlightMed2}
        />
        <path
          d="M781 1084L735.101 -498.5L826.899 -498.5L781 1084Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.searchlightThin1}
        />
        <path
          d="M960 1084L914.101 -498.5L1005.9 -498.5L960 1084Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.searchlightThin2}
        />
        <path
          d="M1139 1084L1093.1 -498.5L1184.9 -498.5L1139 1084Z"
          fill="white"
          fillOpacity="0.1"
          className={styles.searchlightThin3}
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="1920" height="376" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
