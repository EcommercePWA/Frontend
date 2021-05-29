import React from 'react';
import { useWindowSize } from '_hook/useWindowSize';
import ScrollBox from './ScrollBox';
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
import { ScrollBoxItemProps } from '_types/index';
import CarouselBox from './CarouselBox';

const categoriesData: ScrollBoxItemProps[] = [
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

const ExploreLetsShop = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width! <= 768 ? <ScrollBox data={categoriesData} /> : <CarouselBox data={categoriesData} />}
    </>
  );
};

export default ExploreLetsShop;
