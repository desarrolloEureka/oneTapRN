import {useState} from 'react';

const HomeHook = () => {
  const [tab, setTab] = useState('social');
  return {tab, setTab};
};

export default HomeHook;
