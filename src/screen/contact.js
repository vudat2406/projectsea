import React,{ useState } from 'react'
import { Button, View, Text ,FlatList, StyleSheet,TouchableOpacity,Image} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Lorem Ipsum Dolor',
    phone:'0234434401',
    email:'ty.nguyen@sea-solutions.com',
    image:require('../../assets/icon/Asset1.png')
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Sit Amet Consectetur',
    phone:'445616731447',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset2.png')
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Adipiscing Elit',
    phone:'0234434401',
    email:'ty.nguyen@sea-solutions.com',
    image:require('../../assets/icon/Asset3.png')
  },
  {
    id: '5694a0f-3da1-471e29d72',
    name: 'Lectus Ac Malesuada',
    phone:'445616731447',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset4.png')
  },
  {
    id: '58694a0f-3da1-471-bd96-1459d72',
    name: 'Lectus Ac Malesuada',
    phone:'445616731447',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset5.png')
  },
  {
    id: '58694a0f-3da1-471f-d96571e29d72',
    name: 'Morbi In Sodales Nisi',
    phone:'0234434401',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset6.png')
  },
  {
    id: '58694a0f-3da1-471f-d96-71e29d72',
    name: 'Lorem Ipsum Dolor',
    phone:'445616731447',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset7.png')
  },
  {
    id: '58694a0fb396-145571e29d72',
    name: 'Sit Amet Consectetur',
    phone:'0234434401',
    email:'ty.nguyen@gmailcom',
    image:require('../../assets/icon/Asset8.png')
  },
];

const Item = ({ item, onPress,onPress1, backgroundColor, textColor }) => (
  <TouchableOpacity 
    onPress={onPress}
    style={[styles.item, backgroundColor]}
  >
    <Image
      source={item.image}
      resizeMode='contain'
      style={{
        position:'absolute',
        left:10,
        top:15,
        width:40,
        height:40,
      }} 
    />
    <View style={{marginLeft:60,justifyContent:'center',width:245}}>
      <Text style={{fontFamily:'Raleway',fontSize:14,fontWeight:'bold',color:'#515054'}}>{item.name}</Text>
      <Text style={{fontFamily:'Raleway',fontSize:12,color:'#515054'}}>{item.phone} | {item.email}</Text>
    </View>
    <TouchableOpacity onPress={onPress1} style={{justifyContent:'center'}}>
      <Image
        source={require('../../assets/icon/Asset28.png')}
        resizeMode='contain'
        style={{
          marginLeft:30,
          width:13,
          height:31
        }}
      />
    </TouchableOpacity>
  </TouchableOpacity>
);
export default function Contact({ navigation }) {
  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
    const backgroundColor = item.id === selectedId ? "#F2F9CD":"#ffffff";
    const color =  'black';

    return (
      <Item
        item={item}
        onPress1={() => setSelectedId(item.id)}
        onPress={() => navigation.navigate('ContactDetail',{data:item})}
        backgroundColor={{ backgroundColor }}
        textColor={{ color }}
      />
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{color:'#85132B',fontSize:20,fontWeight:"bold",fontFamily:'Raleway',textDecorationLine:'underline',margin:16}}>Contact</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        style={{marginBottom:90}}
      />
      <View style={{
        position:"absolute",
        bottom: 0,
        left:16,
        right:16,
        elevation:0,
        backgroundColor:'#C0D17D',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        flexDirection:'row',
        height:90}}
      >
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:14.5}}>
          <Image
            source={require('../../assets/icon/Asset24.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>Help</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:14.5}}>
          <Image
            source={require('../../assets/icon/Asset25.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>Quick Report</Text>
        </View>
        <Image
            source={require('../../assets/icon/Asset27.png')}
            resizeMode='contain'
            style={{
              width:45,
              height:45,
              margin:14.5,top:-25
            }}        
          />
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:14.5}}>
          <Image
            source={require('../../assets/icon/Asset26.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>Excel Report</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center',top:-15,margin:14.5}}>
          <Image
            source={require('../../assets/icon/Asset28.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  item: {
    marginVertical: 15/2,
    marginHorizontal: 15,
    height:65,
    flexDirection:'row',
    shadowColor:'#eee',
    shadowOffset:{
      width:0,
      height:10,
    },
    shadowOpacity:1,
    elevation:5
  },
  title: {
    fontSize: 32,
  },
});
