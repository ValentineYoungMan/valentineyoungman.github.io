import React, { useEffect, useState } from 'react';
import s from './FullDish.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const FullDish = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  //console.log(params);

  useEffect(() => {
    async function fetchDish() {
      try {
        const { data } = await axios.get('https://641f346cf228f1a83eb2a028.mockapi.io/items/' + id);
        setData(data);
      } catch (error) {
        console.log(error);
        navigate('/');
      }
    }

    fetchDish();
  }, []);

  if (!data) {
    return 'Loading...';
  }

  return (
    <div className={s.container}>
      <img src={data.imageUrl} />
      <h2>{data.name}</h2>
      <h4>{data.price} ₴</h4>
    </div>
  );
};

export default FullDish;
