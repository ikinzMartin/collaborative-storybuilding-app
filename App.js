import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Your groups" component={GroupsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function GroupsScreen({ navigation }) {
	return (
		<View><Text>Hello iva</Text></View>
	)
}

type LoginBubbleProps = {
	text: string
}

const LoginBubbleLine = (props: LoginBubbleProps) => {
		return (
			<View style={styles.login_line}>
				<Text style={styles.text_field}>{props.text}</Text>
				<TextInput style={styles.input_field}></TextInput>
			</View>
		)
}

function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Messenger, but worse</Text>
	  
	  <View style={styles.login_container}>
		<View style={styles.login_bubble}>
		  <Text>Login</Text>
		  <LoginBubbleLine text="Username" />
		  <LoginBubbleLine text="Password" />
	   </View>
	  </View>
	 
	  <Button title="Sign in" onPress={() => navigation.navigate("Your groups")}>Sign in</Button>
	  <Button title="Create account">Create account</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_line: {
	  flexDirection: 'row',
  },
  title: {
	  flex: 0.2,
	  fontSize: 30,
	  color: 'lightblue'
  },
  login_bubble: {
	  backgroundColor: 'lightblue',
	  borderRadius: 30,
	  paddingLeft: 50,
	  paddingRight: 50,
	  paddingTop: 20,
	  paddingBottom: 20
  },
  login_container: {
	  flex: 0.3,
	//  justifyContent: 'center',
  },
  text_field: {
	  marginRight: 10,
	  justifyContent: 'center',
	  fontSize: 16,
  },
  input_field: {
	fontSize: 16,
	backgroundColor: 'white',
	width: 120
  }
});

export default App;