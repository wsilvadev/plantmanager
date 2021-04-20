import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'

const styles = StyleSheet.create({
  
    button:{
        backgroundColor: colors.green,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 66,
        width: 66
    },
    buttonText: {
        color: colors.white,
        fontSize: 40,
        opacity: 0.8
    }


})
export default styles;