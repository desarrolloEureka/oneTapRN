import {useState} from 'react';

const HomeHook = () => {
  const [tab, setTab] = useState(0);
  return {tab, setTab};
};

export default HomeHook;
