import React from 'react';
import { useWindowSize } from '_hook/useWindowSize';
import ScrollBox from '../shared/ScrollBox';
import CarouselBox from '../shared/CarouselBox';
import Image from 'next/image';
import ArtsAndCraftAndSewing from '_images/artsandcraftandsewing.svg';
import BabyProducts from '_images/babyproducts.svg';
import BeautyAndSkincare from '_images/beautyandskincare.svg';
import Electronics from '_images/electronics.svg';
import HomeAndKitchen from '_images/homeandkitchen.svg';
import Jewelery from '_images/jewelery.svg';
import MensClothing from '_images/mensclothing.svg';
import OfficeProducts from '_images/officeproducts.svg';
import SportsAndOutdoor from '_images/sportsandoutdoor.svg';
import ToysAndGames from '_images/toysandgames.svg';
import WomensClothing from '_images/womensclothing.svg';
import Others from '_images/others.svg';
import styles from './ExploreBox.module.css';

export interface ExploreItemType {
  name: string;
  src: string;
  color: string;
  size: number;
}

const categoriesData: ExploreItemType[] = [
  {
    name: 'Electronics',
    src: Electronics,
    color: '#ebf9ff',
    size: 33
  },
  {
    name: 'Sports',
    src: SportsAndOutdoor,
    color: '#ffe8e3',
    size: 35
  },
  {
    name: 'Beauty',
    src: BeautyAndSkincare,
    color: '#fff8e0',
    size: 35
  },
  {
    name: 'Toy & Games',
    src: ToysAndGames,
    color: '#f5e6ff',
    size: 45
  },
  {
    name: "Men's Clothing",
    src: MensClothing,
    color: '#e6f7ff',
    size: 33
  },
  {
    name: "Women's Clothing",
    src: WomensClothing,
    color: '#fff1f0',
    size: 35
  },
  {
    name: 'Baby Products',
    src: BabyProducts,
    color: '#edfffb',
    size: 35
  },
  {
    name: 'Jewelery',
    src: Jewelery,
    color: '#e6f7ff',
    size: 37
  },
  {
    name: 'Home & Kitchen',
    src: HomeAndKitchen,
    color: '#ffeeeb',
    size: 35
  },
  {
    name: 'Office Products',
    src: OfficeProducts,
    color: '#f5f5f5',
    size: 35
  },
  {
    name: 'Crafts',
    src: ArtsAndCraftAndSewing,
    color: '#ebfff6',
    size: 30
  },
  {
    name: 'Others',
    src: Others,
    color: '#f5f5f5',
    size: 33
  }
];

const ExploreBox = () => {
  const { width } = useWindowSize();

  const handleCategoryClicked = (e: React.MouseEvent<HTMLButtonElement>, categoryName: string) => {
    e.preventDefault();
    console.log(`${categoryName} clicked`);
  };

  return (
    <>
      {width! <= 768 ? (
        <ScrollBox
          scrollItems={categoriesData}
          isLooping={true}
          renderItem={(item: ExploreItemType) => (
            <div className={styles.scrollBox_container__top}>
              <div
                className={styles.scrollBox_image_circle}
                style={{ backgroundColor: item.color }}
                onClick={(event) => handleCategoryClicked(event, item.name)}>
                <Image src={item.src} height={item.size} width={item.size} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </div>
          )}
        />
      ) : (
        <CarouselBox
          carouselItems={categoriesData}
          itemsPerPage={6}
          renderHeader={() => (
            <div className={styles.letsShop}>
              <span>Explore LetShop</span>
            </div>
          )}
          renderItem={(item: ExploreItemType) => (
            <div className={styles.carouselBox_container__top}>
              <div
                className={styles.carouselBox_image_circle}
                style={{ background: item.color }}
                onClick={(event) => handleCategoryClicked(event, item.name)}>
                <Image src={item.src} width={'60%'} height={'60%'} alt={item.name} />
              </div>
              <p>{item.name}</p>
            </div>
          )}
        />
      )}
    </>
  );
};

export default ExploreBox;
