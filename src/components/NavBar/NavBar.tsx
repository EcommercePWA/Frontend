import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './navbar.module.css';
import { NavMenuApp } from '../../types';
import Image from 'next/image';
import ShopSvg from '../../images/shop.svg';
import ShoppingBag from '_images/shopping-bags.svg';
import { useWindowSize } from '_hook/useWindowSize';
import Search from '../Search/Search';
import { IoCartOutline } from 'react-icons/io5';
import { OverlayTrigger } from 'react-bootstrap';

const navBarLeftMenu: NavMenuApp[] = [
  { href: '/Fashion', name: 'Fashion' },
  { href: '/HomeNLiving', name: 'Home & Living' },
  { href: '/MobileNElectronics', name: 'Mobile & Electronics' },
  { href: '/Games', name: 'Games' },
  { href: '/Others', name: 'Others' }
];

const navBarRightMenu: NavMenuApp[] = [
  { href: '/Register', name: 'Register' },
  { href: '/Login', name: 'Login' }
];

const NavBar = () => {
  const router = useRouter();
  const { width } = useWindowSize();

  const [click, setClick] = useState(false);
  const handleClick = (href?: string) => {
    setClick(!click);
    // this extra duration is just to allow the animation to end!
    if (href) {
      setTimeout(() => router.push(href), 550);
    }
  };

  const setValuesBasedOnWidth = () => {
    if (window.innerWidth >= 960) {
      setClick(false);
    }
  };

  // this is to prevent multiple event listeners.
  useEffect(() => {
    setValuesBasedOnWidth();
    window.addEventListener('resize', setValuesBasedOnWidth);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.navBar}>
          {width! < 960 ? (
            <>
              <div className={styles.brand}>
                <Image src={ShopSvg} height={40} width={40} layout="fixed" />
                <span>ShopNow</span>
              </div>
              <div className={styles.navList}>
                <div className={styles.hamburger} onClick={() => handleClick()}>
                  {!click ? (
                    <div className={styles.bar} />
                  ) : (
                    <div className={`${styles.bar} ${styles.active}`} />
                  )}
                </div>
                <ul className={!click ? '' : styles.active}>
                  {navBarLeftMenu.concat(navBarRightMenu).map((item) => (
                    <li key={item.name}>
                      <a onClick={() => handleClick(item.href)}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          ) : (
            <>
              <div className={styles.navBarUpper}>
                <ul className={styles.navBarLeftMenu}>
                  {navBarLeftMenu.map((item) => (
                    <li key={item.name}>
                      <a onClick={() => handleClick(item.href)}>{item.name}</a>
                    </li>
                  ))}
                </ul>
                <ul className={styles.navBarRightMenu}>
                  {navBarRightMenu.map((item) => (
                    <li key={item.name}>
                      <a onClick={() => handleClick(item.href)}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={styles.navBarLower}>
                <div className={styles.brand}>
                  <Image src={ShopSvg} height={40} width={40} layout="fixed" />
                  <span>ShopNow</span>
                </div>
                <Search />
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
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
