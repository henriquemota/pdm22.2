import { useState } from 'react'
import { Dimensions, Image, Modal, Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IMAGES } from './src/data'


export default function App() {
  const [modalShow, setModalShow] = useState(false)
  const [image, setImage] = useState()

  return (
    <SafeAreaView style={styles.container}>
      <Modal
        animationType='fade'
        visible={modalShow}
      >
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
          <Pressable
            style={{ padding: 20, backgroundColor: 'rgba(0,0,200, 0.5)', borderRadius: 4, marginBottom: 8 }}
            onPress={function () {
              setModalShow(false)
              setImage()
            }}
          >
            <Text style={{ fontSize: 20, color: '#fff' }} >
              Fechar modal
            </Text>
          </Pressable>
          <Image
            source={{ uri: image }}
            style={{ width: '100%', height: Dimensions.get('window').height - 200 }}
          />
        </SafeAreaView>

      </Modal>

      <View style={{ flex: 1 }} >
        {IMAGES.map(function (el, ix) {
          return (
            <Pressable
              key={ix}
              style={{
                backgroundColor: 'red',
                borderRadius: 4,
                margin: 4,
                padding: 4,
                height: 108, width: Dimensions.get('window').width,
              }}
              onPress={function () {
                setImage(el)
                setModalShow(true)
              }}
            >
              <Image
                source={{ uri: el }}
                style={{ borderRadius: 4, height: 100, width: Dimensions.get('window').width - 8, }}
              />
            </Pressable>
          )
        }
        )}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
