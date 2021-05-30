import React, { useEffect, useState } from 'react';
import styles from './CarouselBox.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { useWindowSize } from '_hook/useWindowSize';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const segmentArray = <T,>(data: T[], itemsPerPage: number): T[][] => {
  const arr: T[][] = [];
  let temp: T[] = [];
  for (let i = 0; i < data.length; i++) {
    temp.push(data[i]);
    if (temp.length === itemsPerPage) {
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

type CarouselBoxProps<T> = {
  carouselItems: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  itemsPerPage: number;
  children?: React.ReactNode;
  renderHeader?: () => React.ReactNode;
  renderFooter?: () => React.ReactNode;
};

const CarouselBox = <T,>({
  carouselItems,
  itemsPerPage,
  renderItem,
  renderHeader,
  renderFooter
}: CarouselBoxProps<T>) => {
  const { width } = useWindowSize();
  const classes = useStyles();

  const [arr, setArr] = useState<T[][]>([]);
  const [dist, setDist] = useState(0);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    setArr(segmentArray(carouselItems, itemsPerPage));
  }, [carouselItems, itemsPerPage]);

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
      {renderHeader && renderHeader()}
      <div className={styles.overFlowHidden}>
        {arr.map((arr, index) => (
          <div
            key={`cb-${index}`}
            style={{ transform: `translateX(${dist}px)` }}
            className={styles.carouselBox__container__icon}>
            {arr.map((item, index) => {
              return (
                <div key={`cb-${index}`}>
                  {renderItem(item, index)}
                </div>
              );
            })}
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
      {renderFooter && renderFooter()}
    </div>
  );
};

export default CarouselBox;
