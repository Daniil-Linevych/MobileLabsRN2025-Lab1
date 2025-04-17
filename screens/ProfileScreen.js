import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button } from 'react-native';

const ProfileScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>

      <Text style={styles.label}>Електронна пошта</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Пароль</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть пароль"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Пароль (ще раз)</Text>
      <TextInput
        style={styles.input}
        placeholder="Повторіть пароль"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <Text style={styles.label}>Прізвище</Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть прізвище"
        value={lastName}
        onChangeText={setLastName}
      />

      <Text style={styles.label}> Ім'я </Text>
      <TextInput
        style={styles.input}
        placeholder="Введіть Ім'я"
        value={firstName}
        onChangeText={setFirstName}
      /> 

      <Button title="Зареєструватися" onPress={() => alert(firstName + " " + lastName + " registered!")} color="#007bff" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default ProfileScreen;
