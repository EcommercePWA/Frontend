import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '_redux/actions/users';
import { useAppSelector } from '_hook/redux';

import Layout from '../components/layout';
import ExploreBox from '../components/ExploreBox';
import ImageCarousel from '../components/ImageCarousel';
import DailyDiscover from '../components/DailyDiscover';

import { Button, Input } from '@material-ui/core';

import { categoriesData, imageCarouselData } from '_constant/data';
import WorkingProductsData from '../shared/jsons/workingProducts.json';

import utilStyles from '_style/utils.module.css';

export default function Home(): ReactElement {
  const dispatch = useDispatch();
  const reduxState = useAppSelector((state) => state);
  const [name, setName] = useState(reduxState.user.name);

  const updateName = () => {
    dispatch(setUser({ name: name }));
    setName('');
  };

  return (
    <Layout>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ImageCarousel data={imageCarouselData} />
        <ExploreBox data={categoriesData} />
        <DailyDiscover data={WorkingProductsData.data} />
        <h2 className={utilStyles.headingLg}>Current redux state</h2>
        <pre
          style={{
            background: '#ebebeb',
            width: 400,
            padding: 10,
            border: '1px solid grey',
            marginBottom: 10
          }}>
          <code>{JSON.stringify(reduxState, null, 4)}</code>
        </pre>
        <p>Modify the user name:</p>
        <Input value={name} onChange={(event) => setName(event.target.value)} />
        <p />
        <Button variant={'outlined'} color={'primary'} onClick={updateName}>
          Submit
        </Button>
      </section>
    </Layout>
  );
}
