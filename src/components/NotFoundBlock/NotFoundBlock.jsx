import React from 'react';
import styles from './NotFoundBlock.module.scss';

const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1>
        <span>{`${':]'}`}</span>
        <br />
        <br />
        <br />
        <b>Nothing found</b>
        <br />
        <br />
        <br />
      </h1>
      <p className={styles.description}>
        Unfortunately, this page is not available in our online store
      </p>
    </div>
  );
};

export default NotFoundBlock;
