import React, { createContext, useState, useEffect } from 'react';

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [repoResume, setRepoResume] = useState({});
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    function getLocalStorageItems() {
      const favorites = localStorage.getItem('favorites');
      const theme = localStorage.getItem('theme');

      setFavorites(JSON.parse(favorites) || []);
      setThemeName(theme || 'light');
      setLoading(false);
    }

    getLocalStorageItems();
  }, [])

  const handleThemeName = () => {
    const themeSelected = themeName === 'light' ? 'dark' : 'light';

    setThemeName(themeSelected);
    localStorage.setItem('theme', themeSelected);
  }

  const handleFavorites = repository => {
    let arrFav = [];
    let isPresent = favorites.find(el => el.id === repository.id);

    if (isPresent)
      arrFav = favorites.filter(el => el.id !== repository.id);
    else
      arrFav = [...favorites, repository];

    setFavorites(arrFav);
    localStorage.setItem('favorites', JSON.stringify(arrFav));
  }

  const isFavorite = repository => {
    return favorites.find(el => el.id === repository.id) ? true : false;
  }

  return (
    <CommonContext.Provider
      value={{
        themeName,
        loading,
        favorites,
        repoResume,
        isFavorite,
        setRepoResume,
        handleFavorites,
        handleThemeName,
      }}
    >
      { children}
    </CommonContext.Provider>
  )

}

export default CommonContext;
