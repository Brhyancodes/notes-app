import { Text, View,StyleSheet,Image } from "react-native";
import PostItImage from '@/assets/images/post-it.png';
 const HomeScreen=()=> {
  return (
    <View style={styles.container}>
      <Image source={PostItImage} style={styles.Image} />
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#f8f9fa'
  },
  Image:{
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  }
})
export default HomeScreen;