import { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
interface GlobalState {
    collapsed: boolean;
    theme: 'light' | 'dark';
    isLoading: boolean;
}

// 2. 定义修改状态的方法类型
interface GlobalActions {
    toggleTheme: () => void;
    setCollapsedState: (collapsed: boolean) => void;
}

type GlobalContextType = GlobalState & GlobalActions;

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export function GlobalProvider({ children }: GlobalProviderProps) {
    const [theme, setTheme] = useState<GlobalState['theme']>('light');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const setCollapsedState = (collapsed: boolean) => {
        setCollapsed(collapsed);
    }

    const setLoading = (loading: boolean) => {
        setIsLoading(loading);
    };

    const contextValue = useMemo<GlobalContextType>(() => ({
        theme,
        isLoading,
        toggleTheme,
        setLoading,
        setCollapsedState,
        collapsed
    }), [theme, isLoading, collapsed]);

    return (
        <GlobalContext.Provider value={contextValue} >
            {children}
        </GlobalContext.Provider>
    );
}
export function useGlobalContext() {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error('useGlobalContext 必须在 GlobalProvider 内部使用');
    }
    return context;
}