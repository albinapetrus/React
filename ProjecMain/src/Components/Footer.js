import React from 'react';

import styles from '../assets/Footer.module.css';

import { FaInstagram } from "react-icons/fa";

import { FaViber } from "react-icons/fa";

import { FaTelegramPlane } from "react-icons/fa";

import { FaTiktok } from "react-icons/fa";


export default function Footer() {
  return (
    <footer>
<h1>Contact and follow us:</h1>
<div className={styles.socialIcons}>
  <a href="" >
    <FaInstagram />
  </a>
  <a href="" >
    <FaViber />
  </a>
  <a href="" >
    <FaTelegramPlane />
  </a>
  <a href="">
    <FaTiktok />
  </a>
</div>
  
    </footer>
  )
}
