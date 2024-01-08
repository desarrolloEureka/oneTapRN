const dataPrincipalProfileEmail = {
  label: '',
  text: '',
  checked: false,
  principal: true,
  social: true,
  professional: true,
  icon: 'email-outline'
};
const dataPrincipalProfilePhone = {
  label: '',
  text: '',
  checked: false,
  principal: true,
  social: true,
  professional: true,
  icon: 'phone'
};
const dataPrincipalEducations = {
  label: '',
  title: '',
  institution: '',
  year: '',
  checked: false,
  principal: true,
  social: false,
  professional: true,
  icon: ''
};
const dataPrincipalCareer = {
  label: '',
  company: '',
  position: '',
  data_init: '',
  data_end: '',
  checked: false,
  principal: true,
  social: false,
  professional: true,
  icon: ''
};
const dataPrincipalUrl = {
  label: '',
  name: '',
  url: '',
  icon: '',
  data_init: '',
  data_end: '',
  checked: false,
  principal: true,
  social: false,
  professional: true,
};
export const profile = {
  name: { label: '', text: '', checked: false, social: true, professional: true, icon: "person-outline" },
  last_name: { label: '', text: '', checked: false, social: true, professional: true, icon: "person-outline" },
  profession: { label: '', text: '', checked: false, social: true, professional: true, icon: "file-present" },
  occupation: { label: '', text: '', checked: false, social: true, professional: true, icon: "work-outline" },
  address: { label: '', text: '', checked: false, social: true, professional: true, icon: "explore" },
  company: { label: '', text: '', checked: false, social: false, professional: true, icon: "work-outline" },
  position: { label: '', text: '', checked: false, social: false, professional: true, icon: "paperclip" },
  professional_profile: { label: '', text: '', checked: false, social: false, professional: true, icon: "person-outline" },
  phones: [dataPrincipalProfilePhone],
  emails: [dataPrincipalProfileEmail],
  education: [dataPrincipalEducations],
  professional_career: [dataPrincipalCareer],
  urls: [dataPrincipalUrl],
  other_competencies: { label: '', text: '', checked: false, social: false, professional: true, icon: "person" },
  skills: { label: '', text: '', checked: false, social: false, professional: true, icon: "person" },
  languages: { label: '', text: '', checked: false, social: false, professional: true, icon: "translate" },
  achievements_recognitions: { label: '', text: '', checked: false, social: false, professional: true, icon: "person" },
};