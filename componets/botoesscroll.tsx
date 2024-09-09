import { SafeAreaView,StatusBar, Text, StyleSheet, Pressable,View ,Image, ScrollView} from "react-native";
import { Link } from "expo-router";

export  const  ScrollviewB = () =>  {
    return (
        <SafeAreaView>
            <StatusBar/>
                <ScrollView horizontal={true}>
        
        <View style={styles.ContainerScroll}>
        
        <View style={styles.areaVi}>
            <View style={styles.scrollv}>

            </View>
            <Text style={styles.tituloScroll}>Area Pix</Text>
        </View>
        
        <View style={styles.ViewScroll}>
            <View style={styles.scrollv}>

            </View>
            <Text style={styles.tituloScrollPagar} >Pagar</Text>
        </View>
        <View style={styles.ViewScroll}>
            
            <View style={styles.scrollv}>

            </View>
            <Text style ={styles.tituloEmpreso}>Emprestimo</Text>
        
        </View>
        
        <View style={styles.ViewScroll}>
            <View style={styles.scrollv}>

            </View >
            <Text style={styles.tituloScroll}>Transferir</Text>
        </View>
        
        <View style={styles.ViewScroll}>
            <View style={styles.scrollv}>

            </View>
            <Text style={styles.TituloCell}>Recarga de {'\n'} celular</Text>
        </View>
        <View style={styles.ViewScroll}>
            <View style={styles.scrollv}>

            </View>
            <Text style={styles.tituloScroll}>Depositar</Text>
        </View>
        
        <View style={styles.ViewScroll}>
            
            <View style={styles.scrollv}>

            </View>
                <Text style={styles.tituloScroll}>Cobrar</Text>
        </View>

        <View style={styles.scrollViewFinal}>
            
            <View style={styles.scrollv}>

            </View>
                <Text style={styles.tituloScroll}>Investir</Text>
        </View>

       
        

    </View>
    </ScrollView>




    </SafeAreaView>



    );


}


const styles = StyleSheet.create({

    ContainerScroll : {
        
        marginTop: 10,
        width: '100%',
        height: 100,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        gap: 10,
        marginLeft: 10,
       

    },
    areaVi:{
        flexDirection: 'column'
        
       
    },
    scrollv: {
        width: 50,
        height : 50,
        borderRadius: 50,
        backgroundColor: '#F7F7F7'
    },
    ViewScroll: {
      
        flexDirection: 'column'

    },
    scrollViewFinal :{
        marginRight:10,
        flexDirection: 'column'
        


    },
    tituloEmpreso: {
        
        textAlign: "left",
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10,
        zIndex: 1,
    
        
        
        
    },
    tituloScroll :{
        fontSize: 12,
        fontWeight : '600',
        marginTop: 10


    },
    TituloCell :{
        alignItems: 'center',
        textAlign : 'center',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10,

    },
    tituloScrollPagar: {
        alignItems: 'center',
        textAlign : 'center',
        fontSize: 12,
        fontWeight: '600',
        marginTop: 10


    }



});