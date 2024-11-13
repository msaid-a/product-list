// Directory: /app/counter/_store/index.ts

import { create } from 'zustand';

// State types
interface States {
  count: number;
}

// useCounterStore
export const useCountStore = create<States>((set) => ({
  count: 0,
  increasePopulation: () => set((state) => ({ count: state.count + 1 })),
}));