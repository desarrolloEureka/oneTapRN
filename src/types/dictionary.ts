export interface Dictionary {
  generalTitle: string;
  homeTitle: string;
  rememberPasswordTitle: string;
  rememberPasswordDescription: string;
  mainMenu: string;
  mainTab: { tab1: string; tab2: string; tab3: string; tab4: string };
  homeView: {
    views: string;
    title: string;
    profileSwitchLabel: string;
    cardSwitchLabel: string;
    social: string;
    professional: string;
    corporate: string;
    selectModalTitle: string;
    saveButtonLabel: string;
    labelBackground: string;
    buttonChangeBackground: string;
    labelTemplate: string;
    labelView: string;
    labelPrevious: string;
  };
  recoverPassword: {
    recoverPassword: string;
    mail: string;
    next: string;
    back: string;
    alertEmailSend: string;
    alertErrorPassword: string;
    expiredRecover: string;
  };
  loginView: {
    username: string;
    password: string;
    login: string;
    recoverPassLogin: string;
    mailMandatory: string;
    passwordMandatory: string;
    userNotFound: string;
  };
  profileView: {
    labelHello: string;
    labelFirstName: string;
    labelLastName: string;
    labelProfession: string;
    labelOccupation: string;
    labelAddress: string;
    labelPhone: string;
    labelEmail: string;
    buttonSeeMore: string;
    addAnotherPhone: string;
    addAnotherEmail: string;
    buttonAddData: string;
    titleNewData: string;
    labelDataName: string;
    labelOptionalUrl: string;
    labelCompany: string;
    labelPosition: string;
    labelProfessionalProfile: string;
    labelOtherCompetencies: string;
    labelSkills: string;
    labelLanguages: string;
    labelRecognitions: string;
    labelEducation: string;
    labelTitle: string;
    labelInstitute: string;
    labelYear: string;
    labelStartDate: string;
    labelEndDate: string;
    labelCareerPath: string;
    labelSwitchMain: string;
    addAnotherTrajectory: string;
    addAnotherEducation: string;
    addAnotherURL: string;
    errorDataSend: string;
    successDataSend: string;
  };
  recoveryCode: {
    nextCode: string;
    backCode: string;
    resendCode: string;
    code: string;
    descriptionCode: string;
    titleCode: string;
  };
  newPassword: {
    createNewPass: string;
    nPassword: string;
    repeatPassword: string;
    nextNewPassword: string;
  };
  modalDelete: {
    labelAlert: string;
    labelMessage: string;
    buttonCancel: string;
    buttonConfirm: string;
  };
  passwordChangedSuccessfully: string;
  logOut: string;
}
