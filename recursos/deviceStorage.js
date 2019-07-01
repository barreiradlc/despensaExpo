import { AsyncStorage } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';


const deviceStorage = {

  async loadJWT() {
    try {
      const value = await AsyncStorage.getItem('@Auth:token');
      if (value !== null) {
        this.setState({
          jwt: value,
          loading: false
        });

        console.warn('deubomProp?',  this.props.jwt);
        console.warn('deubomEstado?',  this.state.jwt);
      } else {
        this.setState({
          loading: false
        });
      }
    } catch (error) {
      console.log('AsyncStorage Error: ' + error.message);
    }
  },
};

export default deviceStorage;   