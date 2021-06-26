import React, { useState } from 'react';
import Image from 'next/image';

import CarouselBox from '../shared/CarouselBox';
import { ImageSlideType } from '_types/index';

import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

import styles from './ImageCarousel.module.css';

type ImageCarouselProps = {
  data: ImageSlideType[];
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ data }) => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleImageClicked = (imageLink: string) => {
    console.log(`${imageLink}`);
  };

  const handleChangePicture = (currIndex: number) => {
    setCurrIndex(currIndex);
  };

  return (
    <div className={styles.imageCarousel_container__top}>
      <CarouselBox
        carouselItems={data}
        itemsPerPage={1}
        spacing={10}
        renderItem={({ url, description }: ImageSlideType) => (
          <div className={styles.imageCarousel_image_container}>
            <Image
              onClick={() => handleImageClicked(description || url)}
              src={url}
              alt={description}
              layout={'fill'}
              objectFit={'contain'}
              quality={75}
            />
          </div>
        )}
        onPageChange={handleChangePicture}
        leftButtonClass={`${styles.carouselButton}`}
        leftButtonIcon={<ArrowRightIcon className={styles.carouselIcon} fontSize={'inherit'} />}
        rightButtonClass={`${styles.carouselButton}`}
        rightButtonIcon={<ArrowLeftIcon className={styles.carouselIcon} fontSize={'inherit'} />}
      />
      <div className={styles.carouselIndicators}>
        <ul>
          {data.map((_, index) => {
            return (
              <li
                key={`image-indicator-${index}`}
                className={index === currIndex ? styles.active : undefined}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ImageCarousel;
