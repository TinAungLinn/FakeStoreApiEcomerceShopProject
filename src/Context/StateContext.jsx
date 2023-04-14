import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { reducer } from "./reducer";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {






// Logics

  const initialState = {
    products: [],
    cart: [],
  };

  const [search ,setSearch] = useState('');

  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCTS", payload: productsList });
    const filterProduct = productsList.filter(item => item.title.toLowerCase().includes(search));
    dispatch({type:"GET_PRODUCTS", payload: filterProduct})
  }, [productsList,search]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(`https://fakestoreapi.com/products`);
    const data = await api.json();

    setProductsList(data);
  };

  
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const data = { state, dispatch, search, setSearch };

// End Logic







  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
