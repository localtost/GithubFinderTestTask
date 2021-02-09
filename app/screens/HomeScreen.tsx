import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {getUserData} from '../state/user/actionCreators';
import {useSelector} from '../utils/declaration';
import Container from '../components/Container';
import RenderList from '../components/RenderList';
const HomeScreen: React.FC = () => {
  const dispatch = useDispatch(),
    {loading, users} = useSelector((state) => state.userState),
    [scroll, setScroll] = useState<Boolean>(false);
  useEffect(() => {
    dispatch(getUserData());
  }, [scroll, dispatch]);

  return (
    <Container>
      <RenderList data={users} loading={loading} scroll={setScroll} />
    </Container>
  );
};

export default HomeScreen;
