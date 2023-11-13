import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getGroupsForUser } from './service/backend_calls'
import { GroupBubble } from './components/GroupBubble'
import { useEffect, useState } from 'react';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
		<Stack.Screen name="Your groups" component={GroupsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const GroupsScreen = ({ route, navigation }) => {
	const [groups, setGroups] = useState([])
	const username = route.params.username

	useEffect(() => {
		setGroups(getGroupsForUser(username))
	}, []);

	return (
		<View style={styles.container}>
			<Text>Hello {username}, here are the groups you currently participate in: </Text>
			<FlatList data={groups} renderItem={({item}) => <GroupBubble item={item} />}/>
		</View>
	)
}


const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState('')

	return (
		<View style={styles.container}>
		<Text style={styles.title}>Messenger, but worse</Text>
		
		<View style={styles.login_container}>
			<View style={styles.login_bubble}>
			<Text>Login</Text>
			<View style={styles.login_line}>
					<Text style={styles.text_field}>Username</Text>
					<TextInput 
						onChangeText={(userInput) => setUsername(userInput)} 
						style={styles.input_field} />
				</View>
				<View style={styles.login_line}>
					<Text style={styles.text_field}>Password</Text>
					<TextInput style={styles.input_field} />
				</View>
		</View>
		</View>
		
		<Button title="Sign in" onPress={() => navigation.navigate("Your groups", {
			'username': username
		})}>Sign in</Button>
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