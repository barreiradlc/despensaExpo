import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
// telas
import Login from '../telas/login';
import Registro from '../telas/registro';

const Autenticacao = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Registro: {
            screen: Registro
        },
    },
    {
        initialRouteName: 'Login',
        /* The header config from HomeScreen is now here */
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                fontWeight: 'bold',
            },
        },
    }
);

export default createAppContainer(Autenticacao);
