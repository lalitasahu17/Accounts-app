import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Contact from './Contact';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Upload: undefined;
    FileSearch: undefined;
};

const ProductList = () => {
 const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    
    const [accounts, setAccounts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://srest.com/accounts.json')
            .then(response => {
                setAccounts(response.data);
            })
            .catch(error => {
                console.error('API Error:', error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const headers = accounts.length > 0 ? Object.keys(accounts[0]) : [];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Accounts Table</Text>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <ScrollView horizontal>
                    <View>
                        
                        <View style={[styles.row, styles.headerRow]}>
                            {headers.map((header) => (
                                <Text style={[styles.cell, styles.headerCell]} key={header}>
                                    {header}
                                </Text>
                            ))}
                        </View>

                      
                        {accounts.map((item, index) => (
                            <View style={styles.row} key={index}>
                                {headers.map((header) => (
                                    <Text style={styles.cell} key={header}>
                                        {String(item[header])}
                                    </Text>
                                ))}
                            </View>
                        ))}
                    </View>
                </ScrollView>
            )}
            <View>
                <TouchableOpacity style={styles.contactbtn} onPress={()=> navigation.navigate('Contact')}>
                    <Text style={styles.contacttext}>contact us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f9f9f9',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#ddd',
    },
    headerRow: {
        backgroundColor: '#e0e0e0',
    },
    cell: {
        padding: 10,
        minWidth: 120,
        textAlign: 'left',
        color: '#333',
        textTransform:'capitalize'
    },
    headerCell: {
        fontWeight: 'bold',
    },
    contactbtn:{
        backgroundColor:"purple",
        borderRadius:20,
        padding:10
    },
    contacttext:{
        color:'#fff',
        fontSize:15,
        textTransform:'capitalize',
        textAlign:'center',
        fontWeight:'bold',
    }
});

export default ProductList;
