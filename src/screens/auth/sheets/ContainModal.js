import {  View, Text, Pressable, StyleSheet  } from 'react-native';
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { COLORS } from '../../../constant/theme';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { Popup } from 'react-native-windows';

export default function ContainModal({ isVisible, children, onClose, payload }) {
    
  return (
    <Popup autoFocus isLightDismissEnabled onDismiss={onClose} isOpen={isVisible}>
      <View style={styles.modalContent}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Details</Text>
          <Pressable onPress={onClose}>
              <Text style={{color: 'white', fontSize:responsiveScreenFontSize(1), fontWeight:'500'}}>X</Text>
          </Pressable>
        </View>
        {children}
      </View>
    </Popup>
  );
}

const styles = StyleSheet.create({
    modalContent: {
      height: 700,
      width: 800,
      backgroundColor: 'white',
     borderRadius: 12
    },
    titleContainer: {
      height: 50,
      backgroundColor: COLORS.primary,
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      paddingHorizontal: 20,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    title: {
      color: '#fff',
      fontSize: 18,
      fontFamily:'Poppins-Medium'
    },
    pickerContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 50,
      paddingVertical: 20,
    },
  });