import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const GroupBubble = props => {
    return (
        <View style={styles.group_bubble}>
            <Text>{props.item.name}</Text>
            {props.item.leader? (
                <Text>You are the leader</Text>
            ) : ''}
            <Text>{props.item.latest_question}</Text>
            <Text>{props.item.number_of_members} members</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    group_bubble: {
        backgroundColor: 'lightgray',
        margin: 10,
        padding: 10,
    }
})

export {GroupBubble}