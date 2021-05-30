import React, { useLayoutEffect, useRef, useState } from 'react';
import useScrollBox from '_hook/useScrollBox';
import styles from './ScrollBox.module.css';

type ScrollBoxProps<T> = {
  scrollItems: T[];
  renderItem: (item: T, index?: number) => React.ReactNode;
  isLooping?: boolean;
  children?: React.ReactNode;
};

const ScrollBox = <T,>({ scrollItems, renderItem, isLooping = false }: ScrollBoxProps<T>) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState(0);
  const { momentum, isDragging } = useScrollBox(scrollWrapperRef);

  const handleScroll = React.useCallback(() => {
    const ref = scrollWrapperRef.current;
    const leftPos = scrollPos;
    const rightPos = ref!.scrollWidth - (leftPos + ref!.clientWidth);
    const contentWidth = ref!.scrollWidth / 2;

    // reach left boundary
    if (leftPos <= momentum) {
      ref!.scrollLeft = contentWidth;
      return;
    }
    // reach right boundary
    if (rightPos <= momentum) {
      ref!.scrollLeft = contentWidth - ref!.clientWidth;
      return;
    }
  }, [scrollPos]);

  useLayoutEffect(() => {
    setScrollPos(scrollWrapperRef.current!.scrollLeft);
  });

  return (
    <div className={styles.scrollBox}>
      <div
        className={styles.scrollBox__wrapper}
        ref={scrollWrapperRef}
        onScroll={isLooping ? handleScroll : undefined}>
        <div
          className={styles.scrollBox__container}
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}>
          {scrollItems.map((item, index) => {
            return (
              <div className={styles.scrollBox__container__icon} key={`sb-${index}`}>
                {renderItem(item, index)}
              </div>
            );
          })}
          {/*additional list to allow continuous scroll*/}
          {isLooping &&
            scrollItems.map((item, index) => {
              return (
                <div className={styles.scrollBox__container__icon} key={`sb-spare-${index}`}>
                  {renderItem(item, index)}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
