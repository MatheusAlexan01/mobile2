import { Link } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable,View ,Image, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function screen (){
    return(
        <SafeAreaView style={styles.containerG} >
            <StatusBar/>
            <View style={styles.container}>
                <Image style={styles.img}
                source={{uri:'https://yt3.googleusercontent.com/WFolG27Q2SweOIAEq6NJ9JIUTrCmBjKUVtHx-IyLQNjS8ZNuuBe1NkltiDEFl_9Zaeekwd34Bw=s900-c-k-c0x00ffffff-no-rj'}}/>
            </View>
            <View style={styles.titulo}>
                <Text style={styles.enuciado}>Queremos deixar seu roxinho ainda mais protegido.Por isso,sempre vamos pedir uma senha para acessar o aplicativo.</Text>
                <Text style={styles.rapido}>Saiba mais essa iniciativa.</Text>
                <Image
                style={styles.img1}
                source={require('../assets/seta.jpg')}/>
            </View>
                    <Link href='/about' asChild>
                <Pressable style={styles.PreBu}>

                    <Text style={styles.titulo3}>Usar senha do celular</Text>
                </Pressable>
                </Link>
                 <Text style={styles.titulo4}>Essa senha é a mesma forma de validação que você usa para desbloquear seu celular.</Text>
            <View style={styles.containerB}>
                <Text style={styles.text1}>Pular esta explicação da próxima vez que você
                    usa para desbloquear seu celular.
                </Text>
                
            </View>

            <View>

            </View>
            
        </SafeAreaView>
    );
}


const  styles = StyleSheet.create({
containerG: {
    flex: 1,
    backgroundColor: 'white'
},

container :{
width: '100%',
height: 100,




},img:{
width: 45,
height: 30,
marginLeft: 15,
marginTop: 10


},
titulo:{ 
width : '100%',
height: 190,


},
enuciado:{
alignItems: 'center',
padding:20,
fontSize: 18,
fontWeight: '600'

},
rapido:{

height: 20,
marginLeft: 20,
marginBottom: 10,
color: 'gray'
},
img1:{
width: 10,
height: 10,
position: 'absolute',
bottom: 47,
marginLeft: 185


},
PreBu: {
marginTop: 110, 
width: '80%', 
backgroundColor:'#8209D0',
justifyContent: 'center',
alignItems: 'center',
marginLeft: '10%',
height: 40,
borderRadius:20

},titulo3: {
color: 'white',
fontWeight: '600'
},
titulo4 :{
 color : 'gray',
 textAlign: 'center',
 marginTop: 10,
 fontSize : 13

},
containerB :{
marginTop: 25,
width: '100%',
backgroundColor : '#F7F7F7',
height: 60,
justifyContent: 'center',

},

text1:{
width: '70%',
fontSize: 11,
marginLeft: 14

}










})



