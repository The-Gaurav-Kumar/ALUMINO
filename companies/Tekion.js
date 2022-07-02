import React from "react";
import {Text,View,StyleSheet,Image,ScrollView,Linking, FlatList} from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Foundation } from '@expo/vector-icons';

const Tekion = ()=>{
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/abhishek.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Mr. Abhishek Upmanyu</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/abhishekupmanyu/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:upmanyu.abhishek@yahoo.in')}/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/ayush.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Mr. Ayush Khandelwal</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/ayush-khandelwal-7100a4180/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:')}/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
                <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                />
            </View>
            <View style={styles.box}>
                <Image style={{width: 150,height: 150,alignSelf:'center',borderRadius: 150}}  resizeMode="contain" source={require('../dp/deepali.jpg')}/>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Ms. Deepali Raje Rathore</Text>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>SDE-I</Text>
                <View style={{flexDirection: 'row'}}>
                    <FontAwesome5 name={'linkedin'} size={75} onPress={()=> Linking.openURL("https://www.linkedin.com/in/deepali-raje-rathore-04618415b/")}/>
                    <Foundation name="mail" size={95} color="black" style={{marginLeft: 40}} onPress={() => Linking.openURL('mailto:deepalirathore0411@gmail.com') }/>
                </View>
                <Text style={{color: '#130f40',fontSize: 25,fontWeight: 'bold'}}>Skills</Text>
            <FlatList data={[{key: 'C++'},{key: 'Java'},{key: 'Machine Learning'},{key: 'Artificial Intelligence'},{key: 'Python'},{key: 'MySQL'},]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
            />
            </View>
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffbe76',
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center'
    },
    item: {
        alignSelf: 'center',
        color: '#fff',
        backgroundColor: '#2c2c54',
        margin: 10 ,
        padding: 10,
        fontSize: 18,
        height: 44,
        borderRadius: 20,
    },
})

export default Tekion;