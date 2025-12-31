import { create } from 'zustand';

export const useAuthStore = create((set, get) => ({
	token: null,
	isAuthenticated: true,
	user: {},

	getUser: () => get().user,
	login: (userData) => set({ token: userData.token, isAuthenticated: true, user: userData }),
	logout: () => set({ token: null, isAuthenticated: false, user: null }),
}));

export default useAuthStore;
