import React, { createContext, useState, useEffect } from 'react';

const CommonContext = createContext({});

export const CommonProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [repoResume, setRepoResume] = useState({});
  const [themeName, setThemeName] = useState('light');

  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites')) || []);
    setThemeName(localStorage.getItem('theme') || 'light');
    setLoading(false);
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
    //FIXME: Quando isso aqui é executado, não tem buscado ainda os favoritos;
    let isPresent = favorites.find(el => el.id === repository.id);
    return isPresent;
  }

  return (
    <CommonContext.Provider
      value={{
        loading,
        themeName,
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
