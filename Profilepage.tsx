import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import NotificationButton from './NotificationButton';
import LanguageButton from './LanguageButton';

const userData = {
  name: 'John Doe',
  age: 30,
  gender: 'Male',
  location: 'New York, NY',
  contact: '+1234567890',
  emergencyContact: {
    name: 'Jane Doe',
    contact: '+1987654321',
  },
  profilePicture: 'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp', // Add a valid image URL here
};

const IPhone1314 = () => {
    const navigation = useNavigation();
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <View style={styles.iphone13143}>
           <TouchableOpacity
                  style={styles.sosButton}
                  onPress={() => navigation.navigate('SOS')}
                >
                  <Text style={styles.sosButtonText}>SOS</Text>
                </TouchableOpacity>
          <Image
            style={[styles.user1Icon, styles.iconLayout]}
            resizeMode="cover"
            source={{ uri: userData.profilePicture }}
          />
          <Text style={[styles.name, styles.nameTypo]}>Name</Text>
          <Text style={[styles.gender, styles.nameTypo]}>Gender</Text>
          <Text style={[styles.contact, styles.contactLayout]}>Contact</Text>
          <Text style={[styles.emergencyContact, styles.ageTypo]}>Emergency Contact</Text>
          <Text style={[styles.age, styles.ageTypo]}>Age</Text>
          <Text style={[styles.currentLocation, styles.ageTypo]}>Current Location</Text>
          <Text style={[styles.johnDoe, styles.maleTypo]}>{userData.name}</Text>
          <Text style={[styles.male, styles.malePosition]}>{userData.gender}</Text>
          <Text style={[styles.text1, styles.textLayout]}>{userData.contact}</Text>
          <Text style={[styles.text2, styles.textTypo]}>{userData.emergencyContact.contact}</Text>
          <Text style={[styles.text3, styles.textTypo]}>{userData.age}</Text>
          <Text style={[styles.jaipur, styles.textTypo]}>{userData.location}</Text>
          <Text style={styles.copyrightsReservedTo}>
            Copyrights Reserved to the Creators of this application
          </Text>
          <TouchableOpacity style={styles.button}
                     onPress={() => navigation.navigate('GetHelplineInformation')}
                   >
                     <Text style={styles.buttonText}>Get Helpline Information</Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                     style={styles.button}
                     onPress={() => navigation.navigate('FAQ')}
                   >
                     <Text style={styles.buttonText}>FAQs</Text>
                   </TouchableOpacity>
                   <TouchableOpacity
                     style={styles.button}
                     onPress={() => navigation.navigate('Resources')}
                   >
                     <Text style={styles.buttonText}>Resources</Text>
                   </TouchableOpacity>
                    <TouchableOpacity style={styles.helpButton} onPress={() => navigation.navigate('NeedHelp')}>
                               <Text style={styles.buttonText}>Need Help?</Text>
                             </TouchableOpacity>
                             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', top: 700 }}>

                                        <Button
                                                title="Go to SOS"
                                                onPress={() => navigation.navigate('SOS', { location: userData.location })}
                                              />
                                       </View>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20, // Adjust as needed for bottom spacing
  },
  container: {
    flex: 1,
  },
  textTypo1: {
    textAlign: 'center',
    color: '#5a0000',
    lineHeight: 14,
    fontSize: 14,
    position: 'absolute',
  },
  iconLayout: {
    maxHeight: '100%',
    maxWidth: '100%',
    position: 'absolute',
    overflow: 'hidden',
  },
  nameTypo: {
    height: 27,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    color: '#5a0000',
    position: 'absolute',
  },
  contactLayout: {
    width: 163,
    top: 393,
  },
  ageTypo: {
    left: 220,
    height: 27,
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#5a0000',
    position: 'absolute',
  },
  maleTypo: {
    height: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    textAlign: 'left',
    color: '#5a0000',
    position: 'absolute',
  },
  malePosition: {
    top: 352,
    width: 152,
    fontSize: 20,
  },
  textLayout: {
    width: 182,
    fontSize: 18,
    top: 412,
  },
  textTypo: {
    left: 221,
    height: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    textAlign: 'left',
    color: '#5a0000',
    position: 'absolute',
  },
  iphone13143Layout: {
    height: 67,
    width: 295,
    borderRadius: 12,
    left: 45,
    backgroundColor: '#ea7373',
    position: 'absolute',
  },
  faqsTypo: {
    height: 45,
    width: 277,
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
  },
  component1Child: {
    height: '83.33%',
    width: '97.27%',
    top: '0%',
    right: '-5.45%',
    bottom: '16.67%',
    left: '8.18%',
    borderRadius: 53,
    backgroundColor: '#fe9999',
    borderStyle: 'solid',
    borderColor: '#5a0000',
    borderWidth: 3,
    position: 'absolute',
  },
  english: {
    height: '80.56%',
    width: '88.18%',
    top: '19.44%',
    left: '11.82%',
    fontWeight: '600',
    fontFamily: 'Montserrat-SemiBold',
  },
  pngegg11Icon: {
    height: '36.11%',
    width: '11.82%',
    top: '22.22%',
    right: '73.64%',
    bottom: '41.67%',
    left: '14.55%',
    borderRadius: 8,
  },
  component1: {
    top: 18,
    left: 268,
    width: 110,
    height: 36,
    position: 'absolute',
  },
  text: {
    top: 20,
    left: 374,
    fontFamily: 'MochiyPopPOne-Regular',
    width: 26,
    height: 15,
    transform: [
      {
        rotate: '90deg',
      },
    ],
  },
  iphone13143Child: {
    top: 83,
    left: 14,
    borderRadius: 10,
    width: 360,
    height: 51,
    backgroundColor: '#ea7373',
    position: 'absolute',
  },
  sos: {
    top: 97,
    left: 120,
    lineHeight: 20,
    width: 137,
    height: 29,
    fontFamily: 'Montserrat-ExtraBold',
    fontWeight: '800',
    fontSize: 20,
    textAlign: 'center',
    color: '#5a0000',
    position: 'absolute',
  },
  sosButton: {
    width: '80%',
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 20, // Adjust top positioning as needed
    left: '10%', // Center horizontally
  },
  sosButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  name: {
    width: 86,
    left: 23,
    height: 27,
    fontSize: 16,
    top: 269,
  },
  gender: {
    top: 333,
    width: 86,
    left: 23,
    height: 27,
    fontSize: 16,
  },
  contact: {
    left: 25,
    height: 27,
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Inter-Regular',
    color: '#5a0000',
    position: 'absolute',
  },
  emergencyContact: {
    width: 163,
    top: 393,
  },
  age: {
    width: 86,
    top: 269,
  },
  currentLocation: {
    width: 135,
    top: 333,
  },
  johnDoe: {
    width: 152,
    top: 288,
    fontSize: 20,
    left: 24,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
  },
  male: {
    height: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    textAlign: 'left',
    color: '#5a0000',
    position: 'absolute',
    left: 24,
  },
  text1: {
    left: 26,
    height: 32,
    fontFamily: 'Inter-Bold',
    fontWeight: '700',
    textAlign: 'left',
    color: '#5a0000',
    position: 'absolute',
  },
  text2: {
    width: 182,
    fontSize: 18,
    top: 412,
  },
  text3: {
    width: 152,
    top: 288,
    fontSize: 20,
  },
  jaipur: {
    top: 352,
    width: 152,
    fontSize: 20,
  },
  copyrightsReservedTo: {
    top: 779,
    left: 77,
    fontSize: 11,
    color: '#e55151',
    width: 235,
    height: 43,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    position: 'absolute',
  },
  user1Icon: {
    height: '10.43%',
    width: '22.56%',
    top: '15%', // Adjusted for reduced margin
    right: '38.72%',
    bottom: '60%',
    left: '38.72%',
    borderRadius: 61,
  },
  button: {
    width: '60%',
    backgroundColor: '#ea7373',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center', // Center horizontally
    top: '55%',
  },
  buttonText: {
    color: '#5a0000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iphone13143: {
    backgroundColor: '#ffb7b7',
    flex: 1,
    height: 844,
    overflow: 'hidden',
    width: '100%',
  },
   helpButton: {
      width: '60%',
      backgroundColor: '#ffb7b7', // Adjust color as needed
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20,
      alignSelf: 'center', // Center horizontally
      top: '55%',
    },
});

export default IPhone1314;