import { useState } from 'react'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <div>
      <span>
        Copyright &copy; {year} Nathan Babcock (
        <a href="https://www.linkedin.com/in/nathan-babcock/" target="blank">
          LinkedIn
        </a>
        {' / '}
        <a href="https://github.com/nathanbabcock" target="blank">
          Github
        </a>
        )
      </span>
      <ul>
        <li>Terms and conditions</li>
        <li>Privacy policy</li>
        <li>Press kit</li>
      </ul>
    </div>
  )
}
