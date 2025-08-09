import axios from 'axios';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
   
    const navigation = useNavigation();

    const onSubmit = async () => {
        
        try {
            const response = await axios.post('https://srest.com/contacts.json', {
                name, email, phone, message
            });
            if (response.status === 200) {
                setName('');
                setEmail('');
                setPhone('');
                setMessage('');
                Alert.alert('Success', 'Message sent successfully!');
            }
        } catch (error) {
            console.error('some error occurred', error);
        } 
        
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Us</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Phone"
                value={phone}
                onChangeText={setPhone}
                maxLength={10}
            />
            <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Your Message"
                multiline
                numberOfLines={4}
                value={message}
                onChangeText={setMessage}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={onSubmit}
            >
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.homeBtn}
                onPress={() => navigation.navigate('ProductList')}
            >
                <Text style={styles.homeBtnText}>Go to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 24,
        textAlign: 'center',
        color: '#4B0082',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        fontSize: 16,
        backgroundColor: '#f9f9f9',
    },
    textArea: {
        height: 100,
        textAlignVertical: 'top',
    },
    button: {
        backgroundColor: '#4B0082',
        padding: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    homeBtn: {
        alignItems: 'center',
        padding: 10,
    },
    homeBtnText: {
        color: '#4B0082',
        fontSize: 16,
        textDecorationLine: 'underline',
    },
});

export default Contact;