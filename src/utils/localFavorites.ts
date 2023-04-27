// almacena en un json los favoritos dandole un numero que seria el id
const toggleFavorite = (id: number) => {
  console.log("toggleFavorite llamado");
  // transforma la bariable en el objeto que esta en el local storage
  // y la variable se deja en let por que se modifica cada ves que se clickea el button
  let favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );
  // pregunta si el favorites: number[] contiene el id
  if (favorites.includes(id)) {
    // con filter agrega quita el id de favoritos
    favorites = favorites.filter((pokeId) => pokeId !== id);
  } else {
    // si el id no se encuentra en el array se agrega a la lista
    favorites.push(id);
  }
  // retorna el json y transformar el id en un str
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
  if (typeof window === "undefined") {
    return false;
  }

  const favorites: number[] = JSON.parse(
    localStorage.getItem("favorites") || "[]"
  );

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  toggleFavorite,
  existInFavorites,
  pokemons,
};
