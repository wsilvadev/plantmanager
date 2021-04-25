import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'
import fonts from '../../styles/fonts';

const styles = StyleSheet.create({
  
    container:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        height: 66,
    },
    text: {
        color: colors.white,
        fontSize: 40,
        opacity: 0.8,
        fontFamily: fonts.heading
    }


})
export default styles;