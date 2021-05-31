import React, { useEffect, useRef, useState } from 'react';
import styles from './CarouselBox.module.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useWindowSize } from '_hook/useWindowSize';

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
  if (temp.length > 0) {
    arr.push(temp);
  }
  return arr;
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
  spacing?: number;
  transitionSpeed?: number;
  leftButtonClass?: string;
  leftButtonIcon?: React.ReactNode;
  rightButtonClass?: string;
  rightButtonIcon?: React.ReactNode;
  // onPageChange takes in index of first element from the left
  onPageChange?: (currIdx: number) => void;
  children?: React.ReactNode;
};

const CarouselBox = <T,>({
  carouselItems,
  itemsPerPage,
  renderItem,
  spacing = 0,
  transitionSpeed = 0.5,
  leftButtonClass,
  rightButtonClass,
  leftButtonIcon,
  rightButtonIcon,
  onPageChange = (noop: number) => noop
}: CarouselBoxProps<T>) => {
  const { width } = useWindowSize();
  const prevWidth = useRef<number>();
  const boxRef = useRef<HTMLDivElement>(null);
  const classes = useStyles();

  const [arr, setArr] = useState<T[][]>([]);
  const [leftBound, setLeftBound] = useState(0);
  const [rightBound, setRightBound] = useState(0);
  const [dist, setDist] = useState(0);

  useEffect(() => {
    if (!boxRef.current) {
      return;
    }
    const { clientWidth } = boxRef.current;
    setLeftBound(0);
    setRightBound(-(clientWidth / itemsPerPage) * (carouselItems.length - itemsPerPage));
    prevWidth.current = width;
    setDist(snapToGrid)
  }, [itemsPerPage, carouselItems, width]);

  // useEffect(() => {
  //   if (prevWidth.current && width !== prevWidth.current && prevWidth.current !== 0) {
  //     setDist((dist) => snapToGrid((width / prevWidth.current!) * dist));
  //   }
  //   prevWidth.current = width;
  // }, [width]);

  useEffect(() => {
    setArr(segmentArray(carouselItems, itemsPerPage));
  }, [itemsPerPage, carouselItems]);

  const shiftLeft = () => {
    if (!boxRef.current) {
      return;
    }

    const { clientWidth } = boxRef.current;
    setDist((dist) => {
      if (dist + clientWidth > leftBound) {
        return leftBound;
      }

      return snapToGrid(dist + clientWidth);
    });
  };

  const shiftRight = () => {
    if (!boxRef.current) {
      return;
    }
    const { clientWidth } = boxRef.current;
    setDist((dist) => {
      if (dist - clientWidth < rightBound) {
        return rightBound;
      }
      return snapToGrid(dist - clientWidth);
    });
  };

  const snapToGrid = (value: number) => {
    if (!boxRef.current) {
      return value;
    }
    const { clientWidth } = boxRef.current;
    const itemWidth = clientWidth / itemsPerPage;
    const ratio = -value / itemWidth;
    let idx = ratio % 1 > 0.5 ? Math.ceil(ratio) : Math.floor(ratio);
    idx = idx >= carouselItems.length ? carouselItems.length - 1 : idx < 0 ? 0 : idx;
    return idx * -itemWidth;
  };

  useEffect(() => {
    if (boxRef.current) {
      const { clientWidth } = boxRef.current;
      onPageChange(-dist / (clientWidth / itemsPerPage));
    }
  }, [dist]);

  return (
    <>
      <div className={styles.overFlowHidden} ref={boxRef}>
        {arr.map((arr, index) => (
          <div
            key={`cb-${index}`}
            style={{
              transform: `translateX(${dist}px)`,
              gridTemplateColumns: `repeat(${itemsPerPage},1fr)`,
              transitionDuration: `${transitionSpeed}s`,
              padding: `0 ${spacing}px`,
            }}
            className={styles.carouselBox__container__icon}>
            {arr.map((item, index) => {
              return <div key={`cb-${index}`}>{renderItem(item, index)}</div>;
            })}
          </div>
        ))}
      </div>
      <button
        style={{ display: dist >= leftBound ? 'none' : 'grid' }}
        onClick={shiftLeft}
        className={`${leftButtonClass} ${styles.buttonLeft}`}>
        {rightButtonIcon || <NavigateBeforeIcon className={classes.leftArrow} />}
      </button>
      <button
        style={{ display: dist <= rightBound ? 'none' : 'grid' }}
        onClick={shiftRight}
        className={`${rightButtonClass} ${styles.buttonRight}`}>
        {leftButtonIcon || <NavigateNextIcon className={classes.rightArrow} />}
      </button>
    </>
  );
};

export default CarouselBox;
