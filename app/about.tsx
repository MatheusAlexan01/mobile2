import { Link } from "expo-router";
import { StatusBar, Text, StyleSheet, Pressable,View ,Image, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {ScrollviewB} from "../componets/botoesscroll";




export default function screen (){
    return(
        <SafeAreaView style={styles.cabecario}>
                <StatusBar/>

    <View style={styles.area}>
            <View>

            </View>


        <View style={styles.tituloArea}>
            
            <Text style={styles.titulo}>Olá, Matheus</Text>

        </View>
    
    </View>
    <View style={styles.conta}>
        <View style={styles.conta1}>
        <Text style={styles.titulo1}>Conta</Text>
        <Text style={styles.titulo1}>R$ 12,45</Text>
        </View>
        
        <Image style={styles.img}
                source={{uri:'https://cdn-icons-png.flaticon.com/512/43/43478.png'}}/>
    </View>

        <ScrollviewB/>

    <View style={styles.areaC}>
        <View style={styles.areacartoes}>
            <Image/>
            <Text style={styles.titulocartao}> Meus Cartões</Text>
        </View>
    </View>
        
        
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    cabecario :{
        backgroundColor: 'white',
        flex: 1,
        


    },
    area:{
        backgroundColor: '#8209D0',
        width: '100%',
        height: 100

    },
    tituloArea:{
        width: 200,
        height: 40,
        justifyContent: 'center',
        marginTop: 60,
        paddingLeft: 10

    
    },
    titulo:{
        color: 'white',
        fontSize: 18,
        fontWeight: '500'

    },
    conta:{
        marginTop: 25,
        width: '100%',
        height: 50,
        marginLeft: 20,
        flexDirection: 'row'

    },
    conta1: {
        flexDirection : 'column'

    },
    titulo1:{
        color: 'black',
        fontSize: 16,
        fontWeight: '500'


    },
    img: {
        width: 10,
        height: 10,
        marginLeft: 150
        

    },
    areacartoes :{
        width: 250,
        height: 35,
        backgroundColor: '#F7F7F7',
        marginTop: 30, 
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    areaC:{
        width: '100%',
        alignItems: 'center'
    },
    
    titulocartao:{
        color: 'black',
        fontSize: 12,
       


    }
    



})