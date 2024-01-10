import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Category, Priority } from "../models";

interface DropDownMenuProps{
  items: (Category | Priority)[];
  onSelectItem: (item: string) => void;
  label: string;
  defaultLabel: string
}

const DropDownMenu:React.FC<DropDownMenuProps> = 
({items, onSelectItem, label, defaultLabel = "Select"}) => {

  const [selectedItem, setSelectedItem] = useState("")

  const handleItemChange = (value:string) => {
    setSelectedItem(value)
    onSelectItem(value)
  }
  const defaultLabelName= `${defaultLabel} ${label}`
  const labelName = `${label}Name`


  return(
    <View style={style.PickerStyle}>
      <Text style={{borderBottomWidth:1, padding:5}}>Select {label}</Text>
      <Picker style={{backgroundColor:"#d4d4d4"}}
      selectedValue={selectedItem}
      onValueChange={handleItemChange}
      
      >
        <Picker.Item label = {defaultLabelName} value="" />
        {items.map((item) => (
          <Picker.Item 
          key={item.id}
          label={isCategory(item) ? item.categoryName : item.priorityName}
          value = {item.id}
          />
        ))}

      </Picker>
    </View>
  )
}
function isCategory(item: Category | Priority): item is Category {
  return (item as Category).categoryName !== undefined;
}

export default DropDownMenu;

const style = StyleSheet.create({
  PickerStyle:{
    borderWidth: 1,
    borderTopEndRadius:10,
    borderTopStartRadius:10,
    margin:10
  }
})