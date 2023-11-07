import { createSlice } from '@reduxjs/toolkit';

// Начальный стейт вынесен в переменную
const initialState = {
  isOpenRegisterModal: false,
  isOpenRegisterSuccessModal: false,
  isOpenLoginModal: false,
  isOpenExitProfileModal: false,
  isOpenPasswordRecoveryModal: false,
  isOpenPasswordRecoveryConfirmModal: false,
  isOpenPasswordRecoverySuccessModal: false,
  isOpenLoginToFavoritePopup: false,
  isOpenNewsModal: false,
};

const modalsSlice = createSlice({
  name: 'modals',
  initialState: initialState,
  reducers: {
    closeAllModals(state) {
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
    openExitProfileModal(state) {
      state.isOpenExitProfileModal = true;
    },
    openPasswordRecoveryModal(state) {
      state.isOpenPasswordRecoveryModal = true;
    },
    openPasswordRecoveryConfirmModal(state) {
      state.isOpenPasswordRecoveryConfirmModal = true;
    },
    openPasswordRecoverySuccessModal(state) {
      state.isOpenPasswordRecoverySuccessModal = true;
    },
    openLoginToFavoritePopup(state, action) {
      state.isOpenLoginToFavoritePopup = true;
      state.loginToFavoritePopupData = action.payload;
    },
    openNewsModal(state) {
      state.isOpenNewsModal = true;
    },
  },
});

// Экспорт экшенов для вызова диспетчера
export const {
  openRegisterModal,
  openRegisterSuccessModal,
  openLoginModal,
  openExitProfileModal,
  openPasswordRecoveryModal,
  openPasswordRecoveryConfirmModal,
  openPasswordRecoverySuccessModal,
  openLoginToFavoritePopup,
  closeAllModals,
  openNewsModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
