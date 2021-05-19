import React from 'react';
import styles from './navbar.module.css';
import { IoCartOutline } from 'react-icons/io5';
import { OverlayTrigger } from 'react-bootstrap';
import Image from 'next/image';
import ShoppingBag from '_images/shopping-bags.svg';

const ShoppingCart = () => {
  return (
    <div className={styles.shoppingCartHolder}>
      <OverlayTrigger
        key="bottom"
        placement="bottom"
        overlay={
          <div className={styles.overLayStyling}>
            <Image src={ShoppingBag} height={120} width={120} />
            <p>There is nothing in your cart yet!</p>
          </div>
        }>
        <div>
          <IoCartOutline style={{ cursor: 'pointer' }} />
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default ShoppingCart;
