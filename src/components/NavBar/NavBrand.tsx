import React from 'react';
import Image from 'next/image';
import ShopSvg from '../../images/icons/shop.svg';
import styles from './navbar.module.css';

const NavBrand = () => {
  return (
    <div className={styles.brand}>
      <Image src={ShopSvg} height={40} width={40} layout="fixed" />
      <span>LetShop</span>
    </div>
  );
};

export default NavBrand;
