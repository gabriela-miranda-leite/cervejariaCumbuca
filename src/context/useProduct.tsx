import React, {
  useContext,
  createContext,
  useState,
  useRef,
  ReactNode,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

export interface FormProps {
  nameProduct: string;
  valueUnityProduct: string;
  quantity: string;
  indexProduct: number;
}

export interface AddProps {
  nameProduct: string;
  valueUnityProduct: string;
  quantity: string;
}

interface ProductContextProps {
  productList: Array<FormProps>;
  addProduct: (product: AddProps) => void;
  removeProduct: (index: number) => void;
  updateProduct: (indexProduct: number, quantity: number) => void;
  getAsyncStorage: () => Promise<void | null>;
  setAsyncStorage: (value: FormProps[]) => Promise<void>;
}

interface ProductProviderProps {
  children: ReactNode;
}

const ProductContext = createContext({} as ProductContextProps);

const ProductProvider = ({children}: ProductProviderProps) => {
  const [productList, setProductList] = useState([] as FormProps[]);
  const indexRef = useRef(productList.length);

  useEffect(() => {
    getAsyncStorage();
  }, []);

  const getAsyncStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@product_list');

      return jsonValue != null ? setProductList(JSON.parse(jsonValue)) : null;
    } catch (e) {
      console.log('Erro ao adicionar');
    }
  };

  const setAsyncStorage = async (value: FormProps[]) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('@product_list', jsonValue);
    } catch (e) {
      console.log('Erro ao salvar');
    }
  };

  const addProduct = ({nameProduct, valueUnityProduct, quantity}: AddProps) => {
    indexRef.current = productList.length;

    setProductList(prevState => [
      ...prevState,
      {
        nameProduct,
        valueUnityProduct,
        quantity,
        indexProduct: indexRef.current,
      },
    ]);
  };

  const removeProduct = (indexProduct: number) => {
    const filteredProducts = productList.filter(
      product => product.indexProduct !== indexProduct,
    );

    filteredProducts.map((value, index) => {
      value.indexProduct = index;
    });

    setProductList(filteredProducts);
  };

  const updateProduct = (indexProduct: number, quantity: number) => {
    productList.map(value => {
      if (indexProduct === value.indexProduct) {
        value.quantity = quantity.toString();
      }
    });
    setAsyncStorage(productList);
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        removeProduct,
        productList,
        updateProduct,
        getAsyncStorage,
        setAsyncStorage,
      }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};

export {ProductProvider, useProduct};
