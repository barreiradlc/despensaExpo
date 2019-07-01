import React, { Component } from 'react';
import {
    StatusBar,
    Image,
    Alert,
    Button,
    TextInput,
    Text,
    View,
    StyleSheet,
    AsyncStorage,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import api from '../recursos/api';
import { Icon } from 'react-native-elements'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';Z


// import { StackActions, NavigationActions } from 'react-navigation';
// import console = require('console');

var usuarioUsuario;
var senhaUsuario;

export default class Login extends Component {
    static navigationOptions = {
        header: null,
    };



    state = {
        email: 'mar@lom',
        password: '123456',
        erro: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            email: 'mar@lom',
            password: '123456',
            erro: ''
        };
    }

    belissimologin = async () => {
        if (this.state.email.length === 0 || this.state.password.length === 0) {
            this.setState({ erro: 'Preencha usuário e senha para continuar!' }, () => false);
        } else {
            try {
                console.warn("email", this.state.email);
                console.warn("pass", this.state.password);
                const response = await api.post('/sessions', {
                    email: this.state.email,
                    password: this.state.password,
                });

                console.warn("res1", response);
                console.warn("res2", response.data);
                console.warn("res3", response.token);
                AsyncStorage.removeItem('@Auth:token', err => {
                    console.warn('Token renovado');
                });
                await AsyncStorage.setItem('@Auth:token', response.data.token);


                // this.props.navigation.navigate('Dashboard');
                // const resetAction = StackActions.reset({
                //   index: 0,
                //   actions: [
                //     NavigationActions.navigate({ routeName: 'Noticias' }),
                //   ],
                // });
                // this.props.navigation.dispatch(resetAction);



            } catch (_err) {
                this.setState({ erro: 'Houve um problema com o login, verifique suas credenciais!' });
            }
        }
    };

    lidarEmail = (email) => {
        this.setState({ email })
    }

    lidarEmail = (password) => {
        this.setState({ password })
    }

    render() {
        return (

            <View style={styles.container}>


                <StatusBar barStyle="light-content" backgroundColor="#4D0016" />

                <Image source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
                    style={styles.image}
                />
                <Text style={styles.titulo}> Despensa </Text>

                <TextInput
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder={'Usuário'}
                    style={styles.input}
                />

                <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Senha'}
                    secureTextEntry={true}
                    style={styles.input}
                />

                <View style={styles.bot}>
                    <Button
                        title={'Login'}
                        style={styles.bot2}
                        onPress={() => this.belissimologin()} />

                    <Button
                        title={'Registro'}
                        style={styles.bot2}
                        onPress={() => this.props.navigation.navigate('Registro')}
                    />
                </View>

                <View style={styles.bot}>
                    <Icon
                        reverse
                        name='google'
                        type='font-awesome'
                        color='#f54242'
                    />

                    <Icon
                        reverse
                        name='facebook'
                        type='font-awesome'
                        color='#517fa4'
                    />
                </View>

                {this.state.erro.length !== 0 && <Text>{this.state.erro}</Text>}


                <TouchableOpacity style={styles.registro}>
                    <Text>Esqueci a senha</Text>
                </TouchableOpacity>




            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    bot: {
        flexDirection: 'row',
        margin: 25
    },
    image: {
        width: 120,
        margin: 25,
        height: 120
    },
});

