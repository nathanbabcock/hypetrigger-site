import { useState } from 'react'

export default function Footer() {
  const [year] = useState(new Date().getFullYear())
  return (
    <div>
      <span>
        Copyright &copy; {year}{' '}
        <a href="" target="blank">
          Nathan Babcock
        </a>
        . All rights reserved.
      </span>
      <ul>
        <li>Terms and conditions</li>
        <li>Privacy policy</li>
        <li>Press kit</li>
      </ul>
    </div>
  )
}
