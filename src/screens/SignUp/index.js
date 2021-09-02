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

const Signup = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPassword, setIsPassword] = useState(true);

  onPressLogin = () => {
    props.navigation.goBack();
  };

  onSignUp = async () => {
    try {
      const answer = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );

      props.navigation.replace('BottomBarNavigation');
    } catch (error) {
      alert(error);
      console.log(error);
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
          <Text style={{fontSize: 26, fontWeight: '600'}}>Sign Up</Text>

          <Text
            style={{
              fontSize: 16,
              color: 'rgba(124,124,124,1)',
              marginTop: 15,
              marginBottom: 40,
            }}>
            Enter your credentials to continue
          </Text>

          <View style={{marginBottom: 30}}>
            <CustomInput title="Username" />
          </View>

          <CustomInput title="Email" value={email} onChangeText={setEmail} />

          <View style={{marginTop: 30, marginBottom: 20}}>
            <CustomInput
              title="Password"
              isPassword
              isHidden={isPassword}
              value={password}
              onChangeText={setPassword}
              onPressHide={() => setIsPassword(!isPassword)}
            />
          </View>

          <View style={{marginBottom: 30}}>
            <Text>
              By continuing you agree to our Terms of Service and Provacy Poilcy
            </Text>
          </View>

          <CustomButton title="Sign Up" onPress={onSignUp} />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              paddingTop: 25,
            }}>
            <Text style={{fontSize: 14, fontWeight: '600'}}>
              Already have an account?{' '}
            </Text>

            <TouchableOpacity onPress={onPressLogin}>
              <Text
                style={{
                  color: APP_COLORS.GREEN,
                  fontSize: 14,
                  fontWeight: '600',
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Signup;
