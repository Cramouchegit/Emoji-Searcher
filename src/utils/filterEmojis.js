// Membuat Emojis utils dimana ini adalah sebuah function dari aplikasi ini
// untuk melakukan sebuah filter dan search emojis
export const filterEmojis = ({
  emojisData,
  searchText = "",
  maxResults = 20,
}) => {
  const filteredEmojis = emojisData.filter((emoji) => {
    if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }

    if (emoji.keywords.includes(searchText.toLowerCase())) {
      return true;
    }

    return false;
  });
  return filteredEmojis.splice(0, maxResults);
};
