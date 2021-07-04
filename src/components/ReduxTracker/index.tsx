import React, { useState } from 'react';
import { Button, Input } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '_hook/redux';
import { setUser } from '_redux/actions/users';
import utilStyles from '_style/utils.module.css';

const ReduxTracker = () => {
  const dispatch = useDispatch();
  const reduxState = useAppSelector((state) => state);
  const [name, setName] = useState(reduxState.user.name);

  const updateName = () => {
    dispatch(setUser({ name: name }));
    setName('');
  };

  return (
    <>
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
    </>
  );
};

export default ReduxTracker;
