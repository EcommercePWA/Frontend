import React, { useState } from 'react';
import styles from './CarouselBox.module.css';
import { ScrollBoxProps, ScrollBoxItemProps } from '_types/index';
import Image from 'next/image';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useWindowSize } from '_hook/useWindowSize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const segmentArray = (data: ScrollBoxItemProps[]) => {
  let arr = [];
  let temp = [];
  for (let i = 0; i < data.length; i++) {
    temp.push(data[i]);
    if (temp.length === 6) {
      arr.push(temp);
      temp = [];
    }
  }
  return arr;
};

const getPercentage = (val: number) => {
  if (val < 1200) {
    return 0.85;
  } else if (val < 1400) {
    return 0.7;
  } else {
    return 0.55;
  }
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    leftArrow: {
      color: '#77787A'
    },
    rightArrow: {
      color: '#77787A'
    }
  })
);

const CarouselBox = ({ data }: ScrollBoxProps) => {
  const { width } = useWindowSize();
  const classes = useStyles();

  let arr = segmentArray(data);

  const [dist, setDist] = useState(0);
  const [idx, setIdx] = useState(0);

  const shiftLeft = () => {
    setDist(-getPercentage(width!) * (idx - 1) * width!);
    setIdx(idx - 1);
  };
  const shiftRight = () => {
    setDist(-getPercentage(width!) * (idx + 1) * width!);
    setIdx(idx + 1);
  };

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.letsShop}>
        <span>Explore LetShop</span>
      </div>
      <div className={styles.overFlowHidden}>
        {arr.map((arr, index) => (
          <div
            key={`cb-${index}`}
            style={{ transform: `translateX(${dist}px)` }}
            className={styles.carouselBox__container__icon}>
            {arr.map((item) => (
              <div className={styles.carouselBox_container__top} key={`cb-${item.name}`}>
                <div className={styles.image_circle} style={{ background: item.color }}>
                  <Image src={item.src} width="60%" height="60%" />
                </div>
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button
        style={{ display: idx === 0 ? 'none' : 'grid' }}
        onClick={shiftLeft}
        className={`${styles.carouselButton} ${styles.buttonLeft}`}>
        <NavigateBeforeIcon className={classes.leftArrow} />
      </button>
      <button
        style={{ display: idx === arr.length - 1 ? 'none' : 'grid' }}
        onClick={shiftRight}
        className={`${styles.carouselButton} ${styles.buttonRight}`}>
        <NavigateNextIcon className={classes.rightArrow} />
      </button>
    </div>
  );
};

export default CarouselBox;
