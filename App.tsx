import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View>
        <Text>TBomb</Text>
      </View>
      <Text style={styles.text1}>Hello World, Thanh Tung!</Text>
      <Text style={{ color: "violet", fontSize: 20 }}>Hello World, Thanh Tung!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text1: {
    color: "red", fontSize: 30
  }
});
