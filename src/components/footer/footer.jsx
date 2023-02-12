import React from 'react'
import './footer.scss'
import github from '../../img/GitHub.svg'

export const Footer = () => {
   
  return (
    <div className='footer container'>
      <div className='footer_line'></div>
      <div className='footer_box d-flex'>
        <div className='footer_img-box d_flex'><img src={github} alt="" /> <p>© 2023 GitHub, Inc.</p></div>
      <ul className='footer_list d_flex'>
        <li className='footer_item'>
          <p>Terms</p>
        </li>
        <li className='footer_item'>
          <p>Privacy</p>
        </li>
        <li className='footer_item'>
          <p>Security</p>
        </li>
        <li className='footer_item'>
          <p>Status</p>
        </li>
        <li className='footer_item'>
          <p>Docs</p>
        </li>
        <li className='footer_item'>
          <p>Contact GitHub</p>
        </li>
        <li className='footer_item'>
          <p>Pricing</p>
        </li>
        <li className='footer_item'>
          <p>API</p>
        </li>
        <li className='footer_item'>
          <p>Training</p>
        </li>
        <li className='footer_item'>
          <p>Blog</p>
        </li>
        <li className='footer_item'>
          <p>About</p>
        </li>
      </ul>
      </div>
    </div>
  )
}
