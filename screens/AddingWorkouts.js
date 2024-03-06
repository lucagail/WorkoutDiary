import React, {useState} from 'react';
import { SafeAreaView, View, Text, Modal, Alert } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { SegmentedButtons, TextInput, Button, Divider, PaperProvider } from 'react-native-paper';
import { useWorkoutContext } from '../context/MyContexts';
import Styles, { PaperTheme } from '../style/Styles';


export default function AddingWorkouts () {

  const { addWorkout, selectedUnit } = useWorkoutContext(); 
  
  const [value, setValue] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');

  const [date, setDate] = useState();
  const [visible, setVisible] = useState(false);

  const dateSelected = (day) => {
    setVisible(false);
    setDate(day);
  };

  const showAlert = () => {
    const numericDistance = parseFloat(distance);
    const numericDuration = parseFloat(duration);

    if (!value) {
      Alert.alert('No Sport Selected', 'Please select a sport before adding the workout.');
      return;
    }
    if (!date) {
      Alert.alert('No Date Selected', 'Please select a date before adding the workout.');
      return;
    }
    if (isNaN(numericDistance) || isNaN(numericDuration) || numericDistance <= 0 || numericDuration <= 0) {
      Alert.alert('Invalid Input', 'Please enter positive numeric values for distance and duration.');
      return;
    }
    const convertDistance = selectedUnit === 'Miles' ? (numericDistance/0.621371).toFixed(2) : numericDistance;

    const workout = { value, distance: convertDistance, duration: numericDuration, date, icon: value };
    addWorkout(workout);      
  };

  const renderDistanceLabel = () => {
    return selectedUnit === 'Kilometers' ? 'Distance (km)' : 'Distance (mi)';
  }; // for rendering labels of TextInput
 
  return (
   <SafeAreaView style = {Styles.container}>
    <PaperProvider theme = {PaperTheme}>
      <Text style={Styles.header}>Add your workout</Text>
      <Divider style = {Styles.divider}/>

      <SegmentedButtons        
        theme = {PaperTheme}
        value={value}
        onValueChange={setValue}
        buttons={[
          {
            value: 'run-fast',
            label: 'Running',
            icon: 'run-fast',
            labelStyle: Styles.customFont
          },
          {
            value: 'bicycle',
            label: 'Cycling',
            icon: 'bicycle',
            labelStyle: Styles.customFont

          },
          { value: 'swim', 
            label: 'Swimming',
            icon: 'swim',
            labelStyle: Styles.customFont
          },
        ]}
      />
      <TextInput 
        style={[Styles.formFields, Styles.fontTextInput]}
        label={renderDistanceLabel()}
        mode='outlined'
        value={distance}
        onChangeText={text => setDistance(text)}   
        keyboardType='numeric'
        clearButtonMode= 'while-editing'
        returnKeyType='done'   
      />
      <TextInput 
        style={[Styles.formFields, Styles.fontTextInput]}
        label="Duration (min)"
        mode='outlined'
        value={duration}
        onChangeText={text => setDuration(text)}    
        keyboardType='numeric'
        clearButtonMode= 'while-editing'
        returnKeyType='done'
      />
      <Button style = {Styles.formFields}
          mode="outlined"
          onPress={() => setVisible(true)}
          labelStyle={Styles.buttonText}
        >
          {date ? date.dateString : 'Select date'}
        </Button>
      <Modal visible={visible} transparent={true}>
        <View style={Styles.modalContainer}>
          <Calendar onDayPress={dateSelected} />
          <Button onPress={() => setVisible(false)} >
            Close
          </Button>
        </View>
      </Modal>
      <Button style={Styles.formFields}
        mode="contained"
        onPress={showAlert}
        labelStyle={Styles.addWorkoutText}
      >Add Workout
      </Button>
    </PaperProvider>
   </SafeAreaView>
  ); 
 };

