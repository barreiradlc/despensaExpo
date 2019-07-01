import axios from 'axios';
// import { AsyncStorage } from '@react-native-community/async-storage';rr
import { AsyncStorage } from 'react-native';

// import console = require('console');

/* Endereços para cada emulador/simulador:
** Genymotion:              http://10.0.3.2:3333/
** Emulador Android Studio: http://10.0.2.2:3333/
** Simulador IOS:           http://localhost:3333/
*/
const api = axios.create({
    baseURL: 'https://despensa-serve.herokuapp.com/',
});


api.interceptors.request.use(async (config) => {
    try {
        const token = await AsyncStorage.getItem('@Auth:token');

        console.warn("token regisrt:", token);

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
            console.warn("token regisrt:", config);
        }

        return config;
    } catch (err) {
        alert(err);
    }
});


export default api;