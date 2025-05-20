import CustomButton from '@/components/inputs/CustomButton';
import CustomTextInput from '@/components/inputs/CustomTextInput';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useSession } from '@/context/AuthContext';
import { auth } from '@/utils/firebase';
import { Redirect, useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

const SignInScreen = () => {
    const router = useRouter();
    const { session, isLoading, signIn } = useSession();
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if(session){
        return <Redirect href="/medecine" />;
    }

    const handleSubmit = async () => {
        if (email.trim() === '') {
            setError('Ce champ est requis');
        } else {
            try {
                const data = await signInWithEmailAndPassword(auth, email, password);
                console.log(data,"dataaaa");
                signIn();
                setError('');
                router.push('/medecine');
            } catch (error: any) {
                Alert.alert('Erreur', error.message);
            }
        }
    };

    return (
            <ParallaxScrollView
              headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
              headerImage={
                <IconSymbol
                  size={310}
                  color="#808080"
                  name="chevron.left.forwardslash.chevron.right"
                  style={styles.headerImage}
                />
              }>
              <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Connexion</ThemedText>
              </ThemedView>
                <CustomTextInput
                    label="Adresse email"
                    value={email}
                    onChangeText={setEmail}
                    error={error}
                    placeholder="Entrez votre nom"
                />

                <CustomTextInput
                    label="Mot de passe"
                    value={password}
                    onChangeText={setPassword}
                    error={error}
                    placeholder="Entrez votre mot de passe"
                />

                <CustomButton
                    title="Se connecter"
                    onPress={handleSubmit}  
                />
            </ParallaxScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
});