import React from 'react';
import {FlatList, ActivityIndicator, Text} from 'react-native';
import Container from './Container';
import UserItem from './User';

interface Props {
  loading: boolean;
  data: Array<unknown> | undefined;
  scroll: React.SetStateAction<Function>;
}

const RenderList: React.FC<Props> = ({loading, data, scroll}) => {
  const renderItem = ({item}: any) => <UserItem user={item} />,
    footerLoader = () =>
      (loading && <ActivityIndicator color="black" size="small" />) || <Text />;
  return (
    <Container>
      <FlatList
        data={data}
        renderItem={renderItem}
        onEndReachedThreshold={0.1}
        keyExtractor={(item: any) => item.node_id}
        onEndReached={() => scroll((pev: Boolean) => !pev)}
        ListFooterComponent={footerLoader}
      />
    </Container>
  );
};

export default RenderList;
