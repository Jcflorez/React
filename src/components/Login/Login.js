import Reac, {Component} from 'react';
import {
	Text,
	View,
	StyleSheet,
	TextInput
} from 'react-native';

class Login extends Component {
	render(){
		return(
		<View>
			<TextInput/>
			<TextInput/>
			<TouchableHighlight>
				<Text>Login</Text>				
			</TouchableHighlight>
			<TouchableHighlight>
				<Text>Singup</Text>
			</TouchableHighlight>
		</View>
		)
	}
}

export default Login;