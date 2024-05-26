import { View, StyleSheet, Image } from 'react-native';
// import Constants from 'expo-constants';
import Text from './Text';
const styles = StyleSheet.create({
  container: {
    // margin: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  up_part: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
    width: '100%',
  },
  up_part_detail: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  down_part: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: "flex-start",
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  name_container: {
    // margin: 10,
    backgroundColor: '#0366d6',
    // radius: 12,
    padding: 5,
    borderRadius: 6,
    alignItems: 'flex-start'
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  counter_column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

  }

});

const transNumber = (num) => {
  if (num > 1000) {
    return (num / 1000).toFixed(1) + 'k';
  }
  return num;
}

const RepositoryItem = ({ item }) => {
  return (<View key={item.id} style={styles.container}>

    {/* show avatar here */}
    <View style={styles.up_part}>
      <Image style={{
        width: 50,
        height: 50,
        borderRadius: 12,
        // marginRight: 10,
        marginHorizontal: 20,
        alignSelf: 'center',
      }} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.up_part_detail}>
        <Text color='Primary' fontWeight='bold'>{item.fullName}</Text>
        <View style={{
          width: '100%',
          paddingRight: 5,
        }}>
        <Text
          style={
            {
              width: 330,
              flexShrink: 1,
              marginVertical: 5,
              // paddingRight: 10,
              numberOfLines: 1,
              ellipseMode: 'tail',
            }
          }
          color='textSecondary'

        >{item.description}</Text>
      </View>
        <View style={styles.name_container}>
          <Text color='white' >{item.language}</Text>
        </View>

      </View>
    </View>

    <View style={styles.down_part}>
      <View style={styles.counter_column}>
        <Text style={{
          marginBottom: 5,
        }} color='Primary' fontWeight='bold'>{transNumber(item.stargazersCount)}</Text>
        <Text color='textSecondary'>Stars</Text>
      </View>
      <View style={styles.counter_column}>
        <Text style={{
          marginBottom: 5,
        }} color='Primary' fontWeight='bold'>{transNumber(item.forksCount)}</Text>
        <Text color='textSecondary'>Forks</Text>
      </View>
      <View style={styles.counter_column}>
        <Text style={{
          marginBottom: 5,
        }} color='Primary' fontWeight='bold'> {transNumber(item.reviewCount)}</Text>
        <Text color='textSecondary'>Reviews</Text>
      </View>

      <View style={styles.counter_column}>
        <Text style={{
          marginBottom: 5,
        }} color='Primary' fontWeight='bold'>{transNumber(item.ratingAverage)}</Text>
        <Text color='textSecondary'>Rating</Text>
      </View>
    </View>
  </View>)
};

export default RepositoryItem;