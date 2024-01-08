import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { RootStackParamList } from "../../navigation";

type CategoryScreenProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Categories'>;
};



const CategoryScreen:React.FC<CategoryScreenProps>= ({navigation}) => {

  return(
    <div>Cat screen</div>
  )
}

export default CategoryScreen