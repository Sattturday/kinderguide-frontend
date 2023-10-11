import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  isOpenRegisterModal: false,
  isOpenRegisterSuccessModal: false,
  isOpenLoginModal: false,
  isOpenPasswordRecoveryModal: false,
  isOpenPasswordRecoverySuccessModal: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    closeAllModals(state) {
      console.log(state.isOpenLoginModal);
      for (const key in state) {
        state[key] = false;
      }
    },
    openRegisterModal(state) {
      state.isOpenRegisterModal = true;
    },
    openRegisterSuccessModal(state) {
      state.isOpenRegisterSuccessModal = true;
    },
    openLoginModal(state) {
      state.isOpenLoginModal = true;
    },
    openPasswordRecoveryModal(state) {
      state.isOpenPasswordRecoveryModal = true;
    },
    openPasswordRecoverySuccessModal(state) {
      state.isOpenPasswordRecoverySuccessModal = true;
    },
  },
});

// Экспорт экшенов для вызова диспетчера
export const {
  openRegisterModal,
  openRegisterSuccessModal,
  openLoginModal,
  openPasswordRecoveryModal,
  openPasswordRecoverySuccessModal,
  closeAllModals,
} = modalsSlice.actions;

export default modalsSlice.reducer;
