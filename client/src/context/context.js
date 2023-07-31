import { createContext } from "react";
import laptopsData from './data/laptopsData';

export const [laptopsState, setLaptopsState] = useState(laptopsData);
export const AuthContext = createContext();