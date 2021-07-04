import React, { ReactElement } from 'react'

import Layout from '../components/layout';
import ExploreBox from '../components/ExploreBox';
import ImageCarousel from '../components/ImageCarousel';
import DailyDiscover from '../components/DailyDiscover';

import { categoriesData, imageCarouselData } from '_constant/data';
import WorkingProductsData from '../shared/jsons/workingProducts.json';

import utilStyles from '_style/utils.module.css';

export default function Home(): ReactElement {
  return (
    <Layout>
      <div className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ImageCarousel data={imageCarouselData} />
        <ExploreBox data={categoriesData} />
        <DailyDiscover data={WorkingProductsData.data} />
      </div>
    </Layout>
  );
}
