import React from 'react';
import { Avatar, Button, Card, Title, Paragraph, List, Headline } from 'react-native-paper';
import { View, Text } from 'react-native';

import styles from '../constants/styles';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View>
                <Card style={styles.card}>
                    <Card.Content>
                        <Title>Blog post</Title>
                        <Card.Cover
                            style={styles.cardCover}
                            source={{
                                uri: 'https://images.unsplash.com/photo-1573921470445-8d99c48c879f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
                            }}
                        />
                        <Paragraph>just a blog post</Paragraph>
                    </Card.Content>
                </Card>
            </View>
        )
    }
}

export default Home;