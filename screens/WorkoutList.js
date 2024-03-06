import React from 'react';
import { SafeAreaView, FlatList, View, Text } from 'react-native';
import { Avatar, Card, Chip, Divider } from 'react-native-paper';
import { useWorkoutContext } from '../context/MyContexts';
import Styles from '../style/Styles';

export default function WorkoutList () {

  const { workouts, selectedUnit } = useWorkoutContext();

  const exampleWorkouts = [
    { value: 'run-fast', distance: '5', duration: '30', date: { dateString: '2024-02-01' }, icon: 'run-fast' },
    { value: 'bicycle', distance: '10', duration: '60', date: { dateString: '2024-02-02' }, icon: 'bicycle' },
    { value: 'swim', distance: '1', duration: '15', date: { dateString: '2024-02-03' }, icon: 'swim' }
  ];

  const mergedWorkouts = [...exampleWorkouts, ...workouts];

  // calculating the distance depending on the selected unit
  const convertDistance = (distance) => {
    if (selectedUnit === 'Kilometers') {
      return (parseFloat(distance)).toFixed(2); // converting km to mi
    } else {
    return (parseFloat(distance) * 0.621371).toFixed(2); // default: showing km
  }
  };

  // calculating the sum distances for each workout type
  const sumDistances = mergedWorkouts.reduce((acc, workout) => {
    acc[workout.value] = (acc[workout.value] || 0) + parseFloat(workout.distance);
    return acc;
  }, {});

  return (
    <SafeAreaView style = {Styles.container}>
      <Text style={Styles.header}>Your Workout List</Text>
      <Divider style = {Styles.divider}/>
      <View style={Styles.summaryRow}>
        {Object.entries(sumDistances).map(([type, distance]) => (
          <Chip 
            key={type}
            icon={() => <Avatar.Icon icon={type} size={36} backgroundColor='#82a0ca' color='#354e6f'/>}
            style={Styles.chip}
            textStyle={Styles.chipText}
          >
            {`${convertDistance(distance)} ${selectedUnit === 'Kilometers' ? 'km' : 'mi'}`}
          </Chip>
        ))}
      </View>
  
      <FlatList
        data={mergedWorkouts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={Styles.card}>
            <Card.Title
              subtitleStyle = {Styles.customFont} subtitle={item.date.dateString}
              left={() => <Avatar.Icon icon={item.icon} size={50} />}
            />
            <Card.Content>
              <Text style = {Styles.cardText}>Distance: {convertDistance(item.distance)} {selectedUnit === 'Kilometers' ? 'km' : 'mi'}</Text> 
              <Text style = {Styles.cardText}>Duration: {item.duration} min</Text>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={{paddingBottom: 100}}
        ListFooterComponent={<View style= {{height:100}}/>}
      />
    </SafeAreaView>
  );
};


