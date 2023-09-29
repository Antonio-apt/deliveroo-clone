import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const CustomHeader = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Image style={styles.bike} source={require('@/assets/images/bike.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.titleContainer}>
          <Text> Home </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name='person-outline' size={20} color={Colors.primary}/>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: "#fff"
  },
  container: {
    height: 60,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    gap: 20,
  },
  bike: {
    width: 30,
    height: 30
  },
  titleContainer: {

  },
  profileButton: {

  }
})

export default CustomHeader