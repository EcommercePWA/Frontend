import Electronics from '_images/icons/electronics.svg';
import SportsAndOutdoor from '_images/icons/sportsandoutdoor.svg';
import BeautyAndSkincare from '_images/icons/beautyandskincare.svg';
import ToysAndGames from '_images/icons/toysandgames.svg';
import MensClothing from '_images/icons/mensclothing.svg';
import WomensClothing from '_images/icons/womensclothing.svg';
import BabyProducts from '_images/icons/babyproducts.svg';
import Jewelery from '_images/icons/jewelery.svg';
import HomeAndKitchen from '_images/icons/homeandkitchen.svg';
import OfficeProducts from '_images/icons/officeproducts.svg';
import ArtsAndCraftAndSewing from '_images/icons/artsandcraftandsewing.svg';
import Others from '_images/icons/others.svg';
import { ExploreItemType, ImageSlideType } from '_types/index';

export const categoriesData: ExploreItemType[] = [
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

export const imageCarouselData: ImageSlideType[] = [
  {
    url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e',
    description: "UX Work: Woman's hands drawing a wireframe"
  },
  {
    url: 'https://images.unsplash.com/photo-1622222297609-c964f8fb14bd',
    description:
      'man in gray shirt and blue denim jeans standing beside black car near brown rocky mountain'
  },
  {
    url: 'https://images.unsplash.com/photo-1622218286192-95f6a20083c7',
    description: 'Urban hipster kids fashion clothing'
  },
  {
    url: 'https://images.unsplash.com/photo-1621862194864-9363167fc586',
    description: 'brown monkey sitting on rock during daytime photo'
  },
  {
    url: 'https://images.unsplash.com/photo-1622214679140-cb2d89800222',
    description: 'Cozy day for a doggy'
  },
  {
    url: 'https://images.unsplash.com/photo-1622241944067-9d059ec85a9d',
    description: 'person in white shirt raising his right hand photo'
  }
];
