import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: { flex: 1 },
  capture: {
    display: 'flex',
    backgroundColor: 'transparent',
    borderRadius: 5,
    paddingHorizontal: 30,
    marginTop: '2%',
    justifyContent: 'center',
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonTouchable: {
    padding: 16
  },
  containerCamara: { 
    flexDirection:'row',  
    display: 'flex', 
    justifyContent: 'space-evenly',
    position: 'relative',
  },
  tinyLogo: {
    width: 98,
    height: 130,
    /* borderRadius: 50, */
    // borderColor: 'red',
    // borderWidth: 3,
    bottom: '7%'
  },
  bottonImg: {
    bottom: '125%',
    right: '61%',
  },
  bottonTogle: {
    position: 'absolute', 
    left: '70%', 
    top: '3%', 
    zIndex: 1, 
    width: 100, 
    height: 125,
  },
  imgMax: {
    width: '100%', 
    height: '100%'
  },
  camMin: {
    height: 120,
    width: 100,
  },
  textTogle: {
    width: 102, 
    height: 134, 
    zIndex: 1, 
    position: 'absolute', 
    bottom: -7
  }
});

export default styles