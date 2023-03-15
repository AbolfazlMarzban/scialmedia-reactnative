import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import colors from '../config/colors';

function Profile(props) {
    return (
        <SafeAreaView style={styles.profileBox}>
            <View width={'80%'}> 
              <TouchableOpacity style={styles.proTxtBox}> 
                  <Text style={styles.proTxt}>تکمیل پروفایل</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proOrdrBox}> 
                  <Text style={styles.proOrdr}>سفارشات</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proSuppBox}> 
                  <Text style={styles.proSupp}>پشتیبانی</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.proOutBox}> 
                  <Text style={styles.proOut}>خروج</Text>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  profileBox:{
    backgroundColor: colors.black,
    height: '100%',
    padding: 20,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  proTxt:{
    fontFamily: 'YekanBakh-Regular',
    fontSize: 25,
    color: colors.blue,
    textAlign: 'center',
    textShadowColor: colors.blue,
    elevation: 10,
    textShadowRadius: 20,
    textShadowOffset: {width: 1, height: 1}
  },
  proOrdr:{
    fontFamily: 'YekanBakh-Regular',
    fontSize: 25,
    color: colors.pink,
    textAlign: 'center',
    textShadowColor: colors.pink,
    elevation: 10,
    textShadowRadius: 20,
    textShadowOffset: {width: 1, height: 1}
  },
  proSupp:{
    fontFamily: 'YekanBakh-Regular',
    fontSize: 25,
    color: colors.yellow,
    textAlign: 'center',
    textShadowColor: colors.yellow,
    elevation: 10,
    textShadowRadius: 20,
    textShadowOffset: {width: 1, height: 1}
  },  
  proOut:{
    fontFamily: 'YekanBakh-Regular',
    fontSize: 25,
    color: colors.purple,
    textAlign: 'center',
    textShadowColor: colors.purple,
    elevation: 10,
    textShadowRadius: 20,
    textShadowOffset: {width: 1, height: 1}
  },
  proOutBox:{
    borderWidth: 2, 
    borderColor: colors.purple,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 20
  },
  proSuppBox:{
    borderWidth: 2, 
    borderColor: colors.yellow,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 20
  },
  proOrdrBox:{
    borderWidth: 2, 
    borderColor: colors.pink,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 20
  },
  proTxtBox: {
    borderWidth: 2, 
    borderColor: colors.blue,
    borderRadius: 20,
    paddingVertical: 20,
    marginVertical: 20
  }
})
export default Profile;