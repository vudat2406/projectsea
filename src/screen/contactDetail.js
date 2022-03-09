import React,{useState} from 'react'
import { Button, View, Text ,FlatList,Switch, StyleSheet,TouchableOpacity,Image,TextInput,ScrollView} from 'react-native';
export default function ContactDetail( { navigation, route }) {
  const { data } = route.params;
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
  return (
    
    <View style={{ flex:1}}>
      <ScrollView style={{ flex:1,marginBottom:90}  }>
      <View style={{flexDirection:'row'}} >
        <Text style={{color:'#85132B',fontSize:20,fontWeight:"bold",fontFamily:'Raleway',textDecorationLine:'underline',margin:16}}>Contact Infomation</Text>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Contact')}
          style={{position:'absolute',top:22,right:16}}>
          <Text style={{fontSize:14}}>CANCEL</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop:68,marginLeft:16,marginBottom:16,marginRight:16,height:108,backgroundColor:'rgba(192,209,125,0.2)',borderRadius:5,alignItems:'center'}}>
        <View>
          <Image 
            source={data.image}
            style={{width:74,height:74,top:-39}}
          />
          <Image style={{top:-59,left:56}} source={require('../../assets/icon/1x/Asset32.png')}/>
        </View>
        <Text style={{fontWeight:'bold',bottom:45,fontSize:17,left:7}}>{data.name} <Image source={require('../../assets/icon/80ppi/Asses1.png')}/></Text>
        <Text style={{fontSize:14,bottom:35,left:7}}> On Sport Company <Image source={require('../../assets/icon/80ppi/Asses1.png')}/></Text>
      </View>
      <View style={{marginLeft:16,marginBottom:16,marginRight:16,backgroundColor:'rgba(192,209,125,0.2)',borderRadius:5,alignItems:'center'}}>
        <View style={{width:'100%',margin:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Phone Number:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Home Phone</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Mobile Phone</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> Work Phone</TextInput>
        </View>
        <View style={{width:'100%',marginLeft:16,marginRight:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Email Address:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Primary Email</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:16,color:'#B1B1B1'}}> Alternative Email</TextInput>
        </View>
      </View>
      <View  style={{marginLeft:16,marginBottom:16,marginRight:16,backgroundColor:'rgba(192,209,125,0.2)',borderRadius:5,alignItems:'center'}}>
        <View style={{width:'100%',margin:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Address:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Address Line 1</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Address Line 2</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Street</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Ward</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> City/ Region</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:8,color:'#B1B1B1'}}> Country</TextInput>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,marginBottom:0,color:'#B1B1B1'}}> Postal Code</TextInput>
        </View>
      </View>
      <View style={{marginLeft:16,marginBottom:16,marginRight:16,backgroundColor:'rgba(192,209,125,0.2)',borderRadius:5,alignItems:'center'}}>
        <View style={{width:'100%',margin:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Tax Region:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> Tax Region</TextInput>
        </View>
        <View style={{width:'100%',marginLeft:16,marginRight:16,marginBottom:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Tax Refference:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> Tax Refference</TextInput>
        </View>
        <View style={{width:'100%',marginLeft:16,marginRight:16,marginBottom:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Invoice Terms:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> Invoice Terms</TextInput>
        </View>
        <View style={{width:'100%',marginLeft:16,marginRight:16,marginBottom:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Invoice Note:</Text>
          <TextInput style={{backgroundColor:'white',height:35,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> Invoice Note</TextInput>
        </View>
      </View>
      <View style={{marginLeft:16,marginBottom:16,marginRight:16,backgroundColor:'rgba(192,209,125,0.2)',borderRadius:5,alignItems:'center'}} >
        <View style={{width:'100%',margin:16}}>
          <Text style={{marginLeft:16,marginBottom:8}}>Searcg Tags:</Text>
          <TextInput
          style={{backgroundColor:'white',height:70,borderRadius:5,marginLeft:16,marginRight:16,color:'#B1B1B1'}}> e.g. Company Name, Trade Service, Product Name</TextInput>
        </View>
      </View>
      <View style={{flexDirection:'row',flexWrap:'wrap',marginLeft:-25,marginBottom:32}}>
        <Switch
          trackColor={{ false: "#B1B1B1", true: "#B1B1B1" }}
          thumbColor={isEnabled1 ? "#C0D17D" : "#515054"}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
          style={{width:'20%'}}
        />
        <Text style={{width:'25%',fontSize:14,marginTop:2}}>CUSTOMER</Text>
        <Switch
          trackColor={{ false: "#B1B1B1", true: "#B1B1B1" }}
          thumbColor={isEnabled2 ? "#C0D17D" : "#515054"}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
          style={{width:'20%'}}
        />
        <Text style={{width:'25%',fontSize:14,marginTop:2}}>ACTIVE</Text>
        <Switch
          trackColor={{ false: "#B1B1B1", true: "#B1B1B1" }}
          thumbColor={isEnabled3 ? "#C0D17D" : "#515054"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
          style={{width:'20%'}}
        />
        <Text style={{width:'25%',fontSize:14,marginTop:2}}>SUPPLIER</Text>
        <Switch
          trackColor={{ false: "#B1B1B1", true: "#B1B1B1" }}
          thumbColor={isEnabled4 ? "#C0D17D" : "#515054"}
          onValueChange={toggleSwitch4}
          value={isEnabled4}
          style={{width:'20%'}}
        />
        <Text style={{width:'25%',fontSize:14,marginTop:2}}>LOCK ACCOUNT</Text>
      </View>
      </ScrollView>
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
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:16}}>
          <Image
            source={require('../../assets/icon/Asset1u.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>Estimates</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:16}}>
          <Image
            source={require('../../assets/icon/Asset2u.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>Project</Text>
        </View>
        <Image
            source={require('../../assets/icon/Asset6u.png')}
            resizeMode='contain'
            style={{
              width:45,
              height:45,
              margin:16,top:-25
            }}        
          />
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:16}}>
          <Image
            source={require('../../assets/icon/Asset3u.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>CashSale</Text>
        </View>
        <View style={{alignItems:'center', justifyContent:'center',top:-10,margin:16}}>
          <Image
            source={require('../../assets/icon/Asset28.png')}
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor:'#515054'
            }}
          />
          <Text style={{color:'#515054', fontSize:10, fontWeight:'bold',fontFamily:'raleway'}}>More</Text>
        </View>
      </View>
     
    </View>
    
  )
}
