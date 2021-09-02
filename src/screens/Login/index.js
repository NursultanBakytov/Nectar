import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import CustomButton from '../../components/CustomButton';
import CustomInput from '../../components/CustomInput';
import {APP_COLORS} from '../../styles/colors';
import auth from '@react-native-firebase/auth';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordHidden, setPasswordHidden] = useState(true);

  onPressSignUp = () => {
    props.navigation.navigate('Signup');
  };

  onPressLogin = async () => {
    try {
      const answer = await auth().signInWithEmailAndPassword(email, password);

      props.navigation.replace('BottomBarNavigation');
    } catch (error) {
      alert(error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            justifyContent: 'center',
            backgroundColor: 'red ',
            marginBottom: 80,
            marginTop: 50,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            source={require('../../assets/logo_orange.png')}
          />
        </View>

        <View style={{paddingHorizontal: 24}}>
          <Text style={{fontSize: 26, fontWeight: '600'}}>Loging</Text>

          <Text
            style={{
              fontSize: 16,
              color: 'rgba(124,124,124,1)',
              marginTop: 15,
              marginBottom: 40,
            }}>
            Enter your email and password
          </Text>

          <CustomInput title="Email" value={email} onChangeText={setEmail} />

          <View style={{marginTop: 30, marginBottom: 20}}>
            <CustomInput
              title="Password"
              isPassword
              isHidden={isPasswordHidden}
              value={password}
              onChangeText={setPassword}
              onPressHide={() => setPasswordHidden(!isPasswordHidden)}
            />
          </View>

          <TouchableOpacity style={{paddingBottom: 30}}>
            <Text style={{textAlign: 'right'}}>Forgot password?</Text>
          </TouchableOpacity>

          <CustomButton title="Log In" onPress={onPressLogin} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 25,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              Don't have an account?{' '}
            </Text>

            <TouchableOpacity onPress={onPressSignUp}>
              <Text
                style={{
                  color: APP_COLORS.GREEN,
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                Singup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
