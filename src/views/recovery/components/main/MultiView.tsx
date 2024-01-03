import RecoveryPassword from './RecoveryPassword'; 
import RecoveryCode from './RecoveyCode';
import CreateNewPassword from './CreateNewPassword'; 
import PasswordChanged from './PasswordChanged';
import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
const RecoverPassword = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 1));
  };

  return (
    <View style={styles.container}>
      {step === 1 && (
         <RecoveryPassword 
        handleBack={handleBack}
        handleNext={handleNext}
        />
      )}

      {step === 2 && (
        <RecoveryCode
         
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {step === 3 && (
        <CreateNewPassword
         
          handleBack={handleBack}
          handleNext={handleNext}
        />
      )}
      {step === 4 && (
        <View style={styles.successContainer}>
          <PasswordChanged
           
            handleBack={handleBack}
            handleNext={handleNext}
          />
         
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  successContainer: {
    alignItems: 'center',
  },

});

export default RecoverPassword;

