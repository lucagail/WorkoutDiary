import { StatusBar, StyleSheet } from 'react-native';
import { DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

export const PaperTheme = {
  ...PaperDefaultTheme,
  fonts: {
    ...PaperDefaultTheme.fonts,
    regular: {fontFamily: 'LatoRegular'},
  },
  colors: {
    ...PaperDefaultTheme.colors,
    primary: '#354e6f',
    text: '#354e6f',
    secondary: '#354e6f',
    secondaryContainer: '#82a0ca',
    onSurface: '#354e6f',
  },
};

const Styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight + 5,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  header: {
    fontSize: 26,
    marginTop: 10,
    marginBottom: 10,
    fontFamily: 'LatoBlack',
    textAlign: 'center'
  },
  divider: {
    marginBottom: 20,
  },
   // Adding Workouts 
  formFields: {
    marginTop: 20,
    borderColor: '#354e6f',
  },
  addWorkoutText: {
    fontSize: 18,
    fontFamily: 'LatoBlack',
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'LatoBlack',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    margin: 50,
    borderColor: '#354e6f',
    borderWidth: 1,
  },
  fontTextInput: {
    fontFamily: 'LatoRegular',
    fontSize: 18,
    color: '#354e6f'
  },
  //Workout list
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  chip: {
   marginLeft: 1,
   marginRight: 1,
   backgroundColor: '#82a0ca',
  },
  card: {
    marginVertical: 15,
    padding: 10,
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: '#354e6f',
  },
  cardText: {
    fontFamily: 'LatoRegular',
    color: '#354e6f'
  },
  chipText: {
    fontFamily: 'LatoBlack',
    color: '#354e6f'
  },
  //Settings
  settingItemText: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: 'LatoBlack',
    textAlign: 'center',
    color: '#354e6f'
  },
  unitsContainer: {
    borderWidth: 1,
    borderColor: '#354e6f', 
    borderRadius: 5,
    marginVertical: 5,
  },
  settingItemContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 10, 
  },
  icon: {
    marginRight: 10,
  },
  unitsLabel: {
    fontFamily: 'LatoRegular',
    fontSize: 18
  },
  //General
  customFont: {
    fontFamily: 'LatoBlack',
    fontSize: 15
  },
});

export default Styles;
