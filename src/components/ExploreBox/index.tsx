import React from 'react';
import { useWindowSize } from '_hook/useWindowSize';
import ScrollBox from '../shared/ScrollBox';
import CarouselBox from '../shared/CarouselBox';
import Image from 'next/image';
import styles from './ExploreBox.module.css';
import { IconButton } from '@material-ui/core';
import { ExploreItemType } from '_types/index';

type ExploreBoxProps = {
  data: ExploreItemType[];
};

const ExploreBox: React.FC<ExploreBoxProps> = ({ data }) => {
  const { width } = useWindowSize();

  const handleCategoryClicked = (e: React.MouseEvent<HTMLButtonElement>, categoryName: string) => {
    e.preventDefault();
    console.log(`${categoryName} clicked`);
  };

  return (
    <>
      {width <= 768 ? (
        <ScrollBox
          scrollItems={data}
          isLooping={true}
          renderItem={(item: ExploreItemType) => (
            <div className={styles.scrollBox_container__top}>
              <IconButton
                className={styles.scrollBox_image_circle}
                style={{ backgroundColor: item.color }}
                onClick={(event) => handleCategoryClicked(event, item.name)}>
                <Image src={item.src} height={item.size} width={item.size} alt={item.name} />
              </IconButton>
              <p>{item.name}</p>
            </div>
          )}
        />
      ) : (
        <div className={styles.carouselWrapper}>
          <div className={styles.letsShop}>
            <span>Explore LetShop</span>
          </div>
          <CarouselBox
            carouselItems={data}
            itemsPerPage={width < 1200 ? 6 : 8}
            renderItem={(item: ExploreItemType) => (
              <div className={styles.carouselBox_container__top}>
                <IconButton
                  className={styles.carouselBox_image_circle}
                  style={{ background: item.color }}
                  onClick={(event) => handleCategoryClicked(event, item.name)}>
                  <Image src={item.src} width={'60%'} height={'60%'} alt={item.name} />
                </IconButton>
                <p>{item.name}</p>
              </div>
            )}
            leftButtonClass={`${styles.carouselButton} ${styles.buttonLeft}`}
            rightButtonClass={`${styles.carouselButton} ${styles.buttonRight}`}
          />
        </div>
      )}
    </>
  );
};

export default ExploreBox;
