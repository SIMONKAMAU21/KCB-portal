import { create } from 'zustand';

const useStore = create((set) => ({
  isPasswordChanged: false,
  setPasswordChanged: (changed) => set({ isPasswordChanged: changed }),
  
  code: ['', '', '', ''],
  setCode: (index, value) => set((state) => {
    const newCode = [...state.code];
    newCode[index] = value;
    return { code: newCode };
  }),
  loading: false,
  setLoading: (isLoading) => set({ loading: isLoading }),

  isFirstTimeUser: true, // Default to true, update as needed
  setFirstTimeUser: (isFirstTime) => set({ isFirstTimeUser: isFirstTime }),
}));


export default useStore;
