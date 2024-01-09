import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from './login/login-screen';
import RegisterScreen from './login/register-screen';
import HomeScreen from './home/home-screen';
import AddTaskScreen from './home/add-task-screen';
import CategoryScreen from './home/category/category-screen';
import PriorityScreen from './home/priority/priority-screen';
import EditTaskScreen from './home/edit-task-screen';
import { Task } from 'react-native';
import TestPage from './home/test-page';

export type RootStackParamList = {
  Home: undefined;
  AddTask:undefined;
  EditTask:(task:Task) => void;
  Categories: undefined;
  Priorities:undefined
  Register: undefined;
  Login: undefined;
  TestPage:undefined
};



const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation:React.FC = () => {
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    // Check AsyncStorage for user data
    const checkUserToken = async () => {
      try {
        const storedUserToken = await AsyncStorage.getItem('userToken');
        setUserToken(storedUserToken);
      } catch (error) {
        console.error('Error reading user token from AsyncStorage:', error);
      }
    };

    checkUserToken();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} options={{headerBackVisible:false}}/>
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Home" component={HomeScreen} options={{headerBackVisible:false}}/>
          <Stack.Screen name="AddTask" component={AddTaskScreen} />
          <Stack.Screen name="EditTask" component={EditTaskScreen} />
          <Stack.Screen name="Categories" component={CategoryScreen} />
          <Stack.Screen name="Priorities" component={PriorityScreen} />
          <Stack.Screen name="TestPage" component={TestPage} />
        {!userToken ? (
          <>
          </>
        ) : (
          // Private pages
          <>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
