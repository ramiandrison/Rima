import CustomTextInput from '@/components/inputs/CustomTextInput';
import { useSession } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';

const SignInScreen = () => {
    const router = useRouter();
    const { session, isLoading, signIn } = useSession();
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = () => {
        if (value.trim() === '') {
            setError('Ce champ est requis');
        } else {
            setError('');
            signIn();
            router.push('/medecine');
            console.log('Texte saisi :', value);
        }
    };

    return (
        <View>
            <CustomTextInput
                label="Nom"
                value={value}
                onChangeText={setValue}
                error={error}
                placeholder="Entrez votre nom"
            />

            <Button title="Valider" onPress={handleSubmit} />
        </View>
    )
}

export default SignInScreen

const styles = StyleSheet.create({})