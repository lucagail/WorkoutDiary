import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { RadioButton, Divider,  } from 'react-native-paper';
import { useWorkoutContext } from '../context/MyContexts';
import Styles from '../style/Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



export default function Settings() {
  const { selectedUnit, setSelectedUnit } = useWorkoutContext();

  return (
    <SafeAreaView style = {Styles.container}>
    <Text style={Styles.header}>Your Settings</Text>
    <Divider style = {Styles.divider}/>
    <View style={Styles.settingItemContainer}>
        <MaterialCommunityIcons name="cogs" color='#354e6f' size={40} style={Styles.icon} />
        <Text style={Styles.settingItemText}>Select your desired unit:</Text>
      </View>
          <View style={Styles.unitsContainer}>
            <RadioButton.Item
              label="Kilometers"
              labelStyle= {Styles.unitsLabel}
              value="Kilometers"
              status={selectedUnit === 'Kilometers' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedUnit('Kilometers')}
            />
          </View>
          <View style={Styles.unitsContainer}>
            <RadioButton.Item
              label="Miles"
              labelStyle= {Styles.unitsLabel}
              value="Miles"
              status={selectedUnit === 'Miles' ? 'checked' : 'unchecked'}
              onPress={() => setSelectedUnit('Miles')}
            />
          </View>
    </SafeAreaView>
  );
};

