import React, { useRef } from 'react';
import useScrollBox from '_hook/useScrollBox';
import styles from './ScrollBox.module.css';
import { ScrollBoxProps } from '_types/index';
import Image from 'next/image';

const ScrollBox = ({ data }: ScrollBoxProps) => {
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const { isDragging } = useScrollBox(scrollWrapperRef);

  return (
    <div className={styles.scrollBox}>
      <div className={styles.scrollBox__wrapper} ref={scrollWrapperRef}>
        <div
          className={styles.scrollBox__container}
          role="list"
          style={{ pointerEvents: isDragging ? 'none' : undefined }}>
          {data.map((item) => (
            <div key={`sb-${item.name}`} className={styles.scrollBox__container__icon}>
              <div className={styles.scrollBox_container__top}>
                <div className={styles.image_circle} style={{ backgroundColor: item.color }}>
                  <Image src={item.src} height={item.size} width={item.size} alt="" />
                </div>
              </div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollBox;
