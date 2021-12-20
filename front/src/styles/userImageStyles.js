import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    containerUserImg: {
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'center',
    },
    userImg: {
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'center', 
        alignContent: 'center',
        left: '9%',
    },
    ContainerIconCamara: {
        position: 'relative', 
        top: 80, 
        right: 15, 
        display: 'flex', 
        height: 55, 
        alignContent: 'center',        
    },
    iconCamara: {
        width: 55, 
        height: 55, 
        zIndex: 1, 
        color: '#434343', 
    },
    photoEmployee: {
        width: 168,
        height: 165, 
        borderRadius: 150, 
        left: '0%',
    },
    img1: {
        color: '#6495ed', 
        textAlign: 'left',
        alignSelf: 'baseline',
        marginBottom: '8%',
        left: '0%',
        width: 168,
        height: 165,
        borderRadius: 150, 
        borderWidth: 3,
        borderColor: '#6495ed',
    },
});

export default styles