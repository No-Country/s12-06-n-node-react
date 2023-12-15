import { create } from "zustand";

export const useFormStore = create(

    (set) => ({
        name: '',
        description: '',
        phone: '',
        email: '',

        setName: (name) => set({ name: name }),
        setDescription: (description) => set({ description: description }),
        setPhone: (phone) => set({ phone: phone }),
        setEmail: (email) => set({ email: email }),

    }), { name: 'form-store' }
    
)
