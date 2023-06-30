import React, { useMemo, useState } from 'react';

const AppContext = React.createContext();

function ContextProvider({ children }) {
    const [cursorVarient, setCursorVarient] = useState("default");
    const [pageConfig, setPageConfig] = useState(null);

    const value = useMemo(() => {
        return {
            state: {
                cursorVarient,
                pageConfig
            },
            setCursorVarient,
            setPageConfig
        };
    });
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
export function useAppContext() {
    const context = React.useContext(AppContext);
    return context;
}
export default ContextProvider;
