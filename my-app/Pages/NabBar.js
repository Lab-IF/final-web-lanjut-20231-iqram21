import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Header, Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
    const navigation = useNavigation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Menambahkan state isLoggedIn

    // Username dan Password Sementara
    const tempUsername = 'Iqram';
    const tempPassword = 'password';

    const handleHomePress = () => {
        navigation.navigate('Home');
        setIsMenuOpen(false); // Tutup menu setelah navigasi dilakukan
    };

    const handleTrendingPress = () => {
        navigation.navigate('Trending');
        setIsMenuOpen(false); // Tutup menu setelah navigasi dilakukan
    };

    const handleMenuPress = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle keadaan menu terbuka/tutup
    };

    const handleLogin = () => {
        // Logika autentikasi login di sini
        // Contoh sederhana: cek apakah username dan password sesuai dengan nilai sementara
        if (username === tempUsername && password === tempPassword) {
            // Set state isLoggedIn menjadi true jika login berhasil
            setIsLoggedIn(true);
            // Tidak ada redirect ke halaman lain setelah login berhasil
            // Tambahkan tampilan profil di header navigasi
        } else {
            // Tampilkan pesan error atau tindakan lainnya jika login gagal
            alert('Login gagal. Silakan coba lagi.');
        }
    };

    // Fungsi untuk merender komponen header kanan
    const renderRightComponent = () => {
        if (isLoggedIn) {
            return (
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: '#fff', marginRight: 5, fontSize:16 }}>{username}</Text>
                    <Icon name="home" color="#fff" size={30} onPress={handleHomePress} style={styles.icon} />
                    <Icon name="trending-up" color="#fff" size={30} onPress={handleTrendingPress} style={styles.icon} />
                </View>
            );
        } else if (isMenuOpen) {
            return (
                <>
                    
                </>
            );
        }
        return null;
    };

    return (
        <View style={styles.container}>
            <Header
                leftComponent={<Icon name={isMenuOpen ? 'close' : 'menu'} size={30} color="#fff" onPress={handleMenuPress} />}
                centerComponent={{ text: 'My App', style: { color: '#fff', marginLeft: 10, fontSize: 30, textAlign: "center" } }}
                rightComponent={renderRightComponent()} // Panggil fungsi renderRightComponent
                containerStyle={{ flexDirection: 'column', justifyContent: 'center', width: '100%' }} // Pusatkan komponen di sebelah kiri
            />
            <Text style={styles.welcomeText}>Selamat Datang Di Aplikasi Saya</Text>
            {/* Tampilan Form Login */}
            <View style={styles.loginContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    value={username}
                    onChangeText={(text) => setUsername(text)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignItems: 'center', // Pusatkan konten secara horizontal
    },
    welcomeText: {
        marginTop: 20,
        marginBottom: 10,
        fontSize: 20,
    },
    loginContainer: {
        width: '20%',
        marginTop: 20,
        padding: 20,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        alignItems: 'center', // Pusatkan konten secara vertikal
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    loginButton: {
        width: '100%',
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 16,
    },
    icon: {
        marginLeft: 10,
    },
});

export default Navbar;
