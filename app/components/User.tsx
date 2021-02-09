import React from 'react';
import {View, Text, StyleSheet, Image, Linking} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation, useRoute} from '@react-navigation/native';

interface Props {
  user: any;
}

const UserItem: React.FC<Props> = ({user: {avatar_url, html_url, login}}) => {
  const navigation = useNavigation(),
    route = useRoute();
  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={{uri: avatar_url}} />
      <View style={styles.info}>
        <Text style={styles.nickName}>{login}</Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Followers', {
              name: login,
            })
          }>
          {route.name === 'Home' && <Text style={styles.link}>Followers</Text>}
        </TouchableOpacity>
        <TouchableOpacity onPress={async () => await Linking.openURL(html_url)}>
          <Text style={styles.link}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignSelf: 'center',
    borderBottomWidth: 3,
    borderBottomColor: 'whitesmoke',
    justifyContent: 'space-between',
  },
  info: {
    width: '60%',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  nickName: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
export default UserItem;
