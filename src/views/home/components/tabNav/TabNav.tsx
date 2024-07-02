import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
// Iconos
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const TabNav = ({ handleTabPress, numberNav }: { handleTabPress: any; numberNav: number }) => {

    return (
        <View style={{
            flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#E9E9E9', height: 80, position: 'absolute', bottom: 0, width: '100%'
        }}>

            <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center', borderTopWidth: numberNav === 1 ? 3.5 : 0, borderColor: numberNav === 1 ? '#396593' : 'auto' }} onPress={() => handleTabPress('Home')}>
                <Icon name="home" size={25} color="black" />
                <Text style={{ color: 'black' }}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center', borderTopWidth: numberNav === 2 ? 3.5 : 0, borderColor: numberNav === 2 ? '#396593' : 'auto' }} onPress={() => handleTabPress('Social')}>
                <FontAwesome5Icon name="users" size={25} color="black" />
                <Text style={{ color: 'black' }}>Social</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center', borderTopWidth: numberNav === 3 ? 3.5 : 0, borderColor: numberNav === 3 ? '#396593' : 'auto' }} onPress={() => handleTabPress('Professional')}>
                <Ionicons name="newspaper-sharp" size={28} color="black" />
                <Text style={{ color: 'black' }}>PRO</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ height: "100%", width: "25%", alignItems: 'center', justifyContent: 'center', borderTopWidth: numberNav === 4 ? 3.5 : 0, borderColor: numberNav === 4 ? '#396593' : 'auto' }} onPress={() => handleTabPress('ShareQR')}>
                <Ionicons name="share" size={28} color="black" />
                <Text style={{ color: 'black' }}>Compartir</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TabNav