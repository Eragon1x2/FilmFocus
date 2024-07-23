import {useEffect} from 'react';
import { createContext, useState } from 'react';
import movie from '../types/movie';
type favoriteItem = {
  children: React.ReactNode,
}
type faviriteItemContextTypes = {
  items: movie[],
  addItem: (item: movie) => void,
  deleteItem:(item: movie) => void,
}
const FavoriteItemsContext = createContext<faviriteItemContextTypes>({
  items: [],
  addItem: () => {},
  deleteItem: () => {},

});
export function FavoriteItemsContextProvider({ children}: favoriteItem) {
  const [items, setItems] = useState<movie[]>(() => {
    // Использование функции для начального состояния
    const storedItems = localStorage.getItem('items');
    return storedItems ? JSON.parse(storedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  },[items])

  function addItem(item: movie) {
    const find = items.find((i) => i.id === item.id);
    if(find) {
      return;
    }
    else {
      setItems(prev => [...prev, {...item}]);
    }
  }
  function deleteItem(item: movie) {
    setItems(prev => prev.filter((i) => i.id !== item.id));
  }
  

  const cartItemsCtx = {
    items: items,
    addItem,
    deleteItem
  };

  return (
    <FavoriteItemsContext.Provider value={cartItemsCtx}>
    {children }
    </FavoriteItemsContext.Provider>
  );
}

export default FavoriteItemsContext;