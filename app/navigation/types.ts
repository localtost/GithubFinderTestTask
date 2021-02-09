import {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  Home: undefined;
  Followers: {name: string};
};
export type FollowersScreenRouteProp = RouteProp<
  MainStackParamList,
  'Followers'
>;
