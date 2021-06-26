import React from 'react';

import Cards from '../Cards';

import styles from './index.module.css';
import { RecommendedItems } from '_types/index';

interface DailyDiscoverProps {
  data: RecommendedItems[];
}

const duplicateArray = (n: number, arr: RecommendedItems[]) => {
  for (let i = 1; i < n; i++) {
    arr = [...arr, ...arr];
  }
  console.log(arr);
  return arr;
};

const DailyDiscover = ({ data }: DailyDiscoverProps) => {
  return (
    <div className={styles.dailyDiscover}>
      <p>Recommended For you</p>
      <div className={styles.dailyDiscoverGrid}>
        {duplicateArray(2, data).map((item, index) => (
          <Cards
            key={item.Item_id}
            imgSrc={item.Image}
            textDesc={item.Description}
            price={item.Price}
            name={item.Name}
            likes={Math.floor(Math.random() * 50)}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyDiscover;
