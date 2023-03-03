import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
  name: 'form',
  initialState: {
    formProcess: {
      formState: 'closed',
    },
    registerBtnVisibility: true,
    consumerData: {
      name: { validity: false, value: '' },
      tel: { validity: false, value: '' },
      mail: { validity: false, value: '' },
      password: { validity: false, value: '' },
    },
  },
  reducers: {
    formStateSwitcher: (state, data) => {
      const process = data.payload;
      state.formProcess.formState = process;
    },
    registerBtnSwitcher: (state, data) => {
      state.registerBtnVisibility = data.payload;
    },
    setConsumerData: (state, data) => {
      const { currentId, value, validity } = data.payload;
      state.consumerData[currentId].validity = validity;
      state.consumerData[currentId].value = value;
    },
  },
});

export const { formStateSwitcher, registerBtnSwitcher, setConsumerData } = formSlice.actions;
export const selectFormState = (state) => state.form.formProcess.formState;
export const selectRegisterVisibility = (state) => state.form.registerBtnVisibility;
export const selectConsumerData = (state) => state.form.consumerData;

export default formSlice.reducer;
