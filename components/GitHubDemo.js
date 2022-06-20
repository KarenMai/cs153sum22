import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, ActivityIndicator, FlatList, Button } from 'react-native';


const GitHubDemo = () => {

    const [data, setData] = useState([])
    const [isLoading, setLoading] = useState(true);
    const [temporaryUsername, setTemporaryUsername] = useState('tjhickey724');

    const [username, setUsername] = useState('tjhickey724');

    const getRepos = async () => {
        try {
            const response = await fetch('https://api.github.com/users/' + username + '/repos');
            const json = await response.json();
            setData(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => { getRepos() }, [username])

    return (

        <View style={{ flex: 1, padding: 24 }}>

            <TextInput
                style={{ height: 40 }}
                placeholder="Enter GitHub Username"
                onChangeText={newText => setTemporaryUsername(newText)}
                defaultValue={temporaryUsername}
            />

            <Button
                title="Search"
                onPress={() => {
                    setUsername(temporaryUsername)
                }}
            />

            {/* <Text>{JSON.stringify(data)}</Text> */}

            {isLoading ? <ActivityIndicator /> : (
                <FlatList
                    data={data}
                    keyExtractor={({ id }, index) => id}
                    renderItem={({ item }) => (
                        <Text>{item.name}</Text>

                    )}
                />
            )}
        </View>
    )
}

export default GitHubDemo