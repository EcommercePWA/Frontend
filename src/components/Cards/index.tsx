import React, { useState } from 'react';
import Image from 'next/image';

import { RiHeartLine, RiHeartFill } from 'react-icons/ri';

import styles from './index.module.css';

interface CardsProps {
  imgSrc: string;
  textDesc: string;
  price: string;
  likes: number;
  name: string;
}

const Cards = ({ imgSrc, textDesc, price, likes, name }: CardsProps) => {
  const [heartSelected, setHeartSelected] = useState(false);
  const toggleHeartSelected = () => setHeartSelected(!heartSelected);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageContainer}>
        <Image alt="" src={imgSrc} quality={100} objectFit="contain" width={180} height={180} />
      </div>
      <div className={styles.cardDescription}>
        <span>{name}</span>
        <span>{textDesc}</span>
      </div>
      <div className={styles.bottomContainer}>
        <span>{price}</span>
        <div className={styles.heartContainer} onClick={toggleHeartSelected}>
          {heartSelected ? <RiHeartFill style={{ fill: 'crimson' }} /> : <RiHeartLine />}
          <span style={{ color: heartSelected ? 'crimson' : 'inherit' }}>{`${
            heartSelected ? likes + 1 : likes
          }`}</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;
