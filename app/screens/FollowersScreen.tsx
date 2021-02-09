import React, {useCallback, useEffect, useState} from 'react';
import RenderList from '../components/RenderList';
import {FollowersScreenRouteProp} from '../navigation/types';
import {
  clearFollowersData,
  getFollowersData,
} from '../state/user/actionCreators';
import {useDispatch, useSelector} from '../utils/declaration';

interface Props {
  route: FollowersScreenRouteProp;
}

const FollowersScreen: React.FC<Props> = ({route}) => {
  const {followers, loading} = useSelector((state) => state.userState),
    dispatch = useDispatch(),
    action = useCallback(dispatch, []),
    [scroll, setScroll] = useState<Boolean>(false),
    {name} = route.params;
  useEffect(() => {
    action(getFollowersData(name));
  }, [scroll, action, name]);

  useEffect(() => {
    return () => action(clearFollowersData());
  }, [action]);
  return <RenderList data={followers} loading={loading} scroll={setScroll} />;
};

export default FollowersScreen;
