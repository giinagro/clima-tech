
import { useState } from "react";

function SearchBar({ onSearch, loading }) {
  const [cidade, setCidade] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (cidade.trim() === "") {
      return;
    }

    onSearch(cidade.trim());
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite o nome de uma cidade..."
        value={cidade}
        onChange={(event) => setCidade(event.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Buscando..." : "Pesquisar"}
      </button>
    </form>
  );
}

export default SearchBar;
