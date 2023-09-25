import { createContext } from "react";

interface AppContextValue {
    screenIndex: number;
    setScreenIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const AppContext = createContext<AppContextValue | undefined>(undefined);
