import React, { Component } from "react";
import { Card, Text } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

class Contact extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Contact Us'
    }


    render() {
        return (
            <ScrollView>
                <Card wrapperStyle={{margin: 20}} title="Contact Information">
                    {/* <Card.Divider/>  */}
                        <Text> 1 Nucamp Way</Text>
                        <Text> Seattle, WA 98001</Text>
                        <Text>  U.S.A.</Text>
                        <Text style={{marginBottom: 10}} />
                        <Text>Phone: 1-206-555-1234</Text>
                        <Text>Email: campsites@nucamp.co</Text>
                </Card>
            </ScrollView>
        )
    }
};

export default Contact;