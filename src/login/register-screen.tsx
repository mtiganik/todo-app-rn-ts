import React, {useState, useEffect} from 'react'
import { RootStackParamList } from '../navigation';
import { StackNavigationProp } from '@react-navigation/stack';

type RegisterScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Login'>;
};


const RegisterScreen:React.FC<RegisterScreenProps> = ({navigation}) => {

return(
  <div>Register screen</div>
)
}

export default RegisterScreen