import React, { useState } from 'react'
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ImageViewer from 'react-native-image-zoom-viewer'

const DetailsScreen = ({ route }) => {
    const [visible, setVisible] = useState(false)
    const { gitImage, uname, uid } = route.params
    const images = [{
        url: `${gitImage}`

    }]
    return (
        <View style={styles.ImageStyle}>
            <TouchableOpacity onPress={() => setVisible(true)}>
                <Image style={{ width: 360, height: 340 }} source={{ uri: `${gitImage}` }} />
                <Modal visible={visible} transparent={true}>
                    <View style={styles.modalBackground}>
                        <View style={styles.modalView}>
                            <View style={{ paddingRight: 4, paddingTop: 4 }}>
                                <Pressable onPress={() => setVisible(false)}>
                                    <Text style={{fontFamily:'Silkscreen-Bold',color:'white',fontSize:20}}>X</Text>
                                </Pressable>
                            </View>
                            <View style={{ width: '100%', height: '100%' }}>
                                <ImageViewer imageUrls={images} />
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={styles.textStyle}>
                    <Text style={{ fontSize: 30, fontFamily: 'Silkscreen-Bold', paddingTop: 20,color:'#e6b800'}}>{uname}</Text>
                    <Text style={{ fontSize: 30, fontFamily: 'Silkscreen-Bold', paddingTop: 20,color:'#e6b800'}}>{uid}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    ImageStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 135
    },
    modalBackground: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        backgroundColor: 'black',
        width: '97%',
        height: '87%',

    },
    textStyle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    }

})

export default DetailsScreen
