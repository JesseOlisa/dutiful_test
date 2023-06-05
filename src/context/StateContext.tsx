'use client';
import React, {
	useState,
	useContext,
	PropsWithChildren,
	createContext,
} from 'react';

interface ContextType {
	user: string | null;
	setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

interface User {
	name: string;
	email: string;
}
const Context = createContext<ContextType | null>(null);

export const StateContext = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<string | null>(null);
	return (
		<Context.Provider
			value={{
				user,
				setUser,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export const useStateContext = () => useContext(Context) as ContextType;
