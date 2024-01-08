import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 10,
},successText:{
  color:'green',
  fontSize: 10,
}

});


export const loginScreenStyles = StyleSheet.create({
  loginScreenBase:{
    height: 500,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
    borderWidth: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },

  loginScreenBaseToDelete:{
    flex: 1,
    height: 200,
    justifyContent: 'center',
    alignItems: 'stretch',
    margin: 30,
    borderWidth: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.3)'
  },
  input: {
    height: 40,
    width: 200,
    margin: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: '#7a42f4',
    borderRadius:5
  },
  passwordInputContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    width: 200,
    borderWidth: 1,
    borderColor: '#7a42f4',
    borderRadius: 5,
    margin: 5,
    padding: 10,
  },

});
