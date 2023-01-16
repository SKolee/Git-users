import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MainScreen = ({navigation}) => {
  const [gitUsers, setGitUsers] = useState('');
  useEffect(() => {
    getGitUsers();
  }, []);

  const getGitUsers = async () => {
    try {
      const url = `https://api.github.com/users`;
      const response = await axios.get(url);
      setGitUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View style={{flex: 1}}>
      <Text
        style={{
          fontSize: 55,
          fontFamily: 'Silkscreen-Bold',
          alignSelf: 'center',
          color: '#e6b800',
        }}>
        Git Users
      </Text>
      <FlatList
        data={gitUsers}
        keyExtractor={git => git.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.push('Details', {
                  gitImage: item.avatar_url,
                  uname: item.login,
                  uid: item.id,
                })
              }>
              <View style={styles.listFrame}>
                <View>
                  <Image
                    style={{
                      width: 70,
                      height: 80,
                      margin: 20,
                      marginTop: 20,
                      borderRadius: 40,
                    }}
                    source={{uri: `${item.avatar_url}`}}
                  />
                </View>

                <View style={styles.dataStyle}>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 5,
                        fontFamily: 'Silkscreen-Bold',
                        color: '#e6b800',
                      }}>
                      {item.login}
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 20,
                        marginTop: 5,
                        fontFamily: 'Silkscreen-Bold',
                        color: '#e6b800',
                      }}>
                      {item.id}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listFrame: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 20,
    display: 'flex',
    flexDirection: 'row',
    borderColor: '#e6b800',
  },
  dataStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default MainScreen;
