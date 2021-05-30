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
        trigger={["click", "hover"]}
        overlay={
          <div className={styles.overLayStyling}>
            <div className={styles.overLayImageHolder}>
              <Image src={ShoppingBag} height={100} width={100} className={styles.overLayImage} />
            </div>
            <p>There is nothing in your cart yet!</p>
          </div>
        }>
        <div>
          <IoCartOutline style={{ cursor: 'pointer', transform: 'translateY(5px)' }} />
        </div>
      </OverlayTrigger>
    </div>
  );
};

export default ShoppingCart;
