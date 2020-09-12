import React, { createContext, useState, useEffect, useCallback } from 'react';

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {

  const [loading, setLoading] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [themeName, setThemeName] = useState('light');

  //TODO: Guardar no local storage
  const handleThemeName = () => setThemeName(themeName === 'light' ? 'dark' : 'light');


  //   useEffect(() => {

  //     if (storageUser && storageToken) {
  //         setUser(storageUser);
  //         // api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
  //     }
  //     setLoading(false);
  // }, []);


  // const signIn = useCallback( async () => {

  //     setLoading(true);
  //     const response = await signInService();
  //     setUser(response.user);
  //     // api.defaults.headers.Authorization = `Baerer ${response.token}`;
  //     setStorageUser(response.user);
  //     setStorageToken(response.token);
  //     setLoading(false);
  // }, []);


  // const signOut = useCallback( () => {

  //     setLoading(true);
  //     removeStorageUser();
  //     removeStorageToken()
  //     setUser({});
  //     setLoading(false);
  // }, []);

  return (
    <CommonContext.Provider
      value={{
        loading,
        themeName,
        favorites,
        handleThemeName,
      }}
    >
      { children}
    </CommonContext.Provider>
  )

}

export default CommonContext;
