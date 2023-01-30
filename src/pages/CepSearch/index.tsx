import './styles.css';

import ResultCard from 'components/ResultCard';

const CepSearch = () => {


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // copiado ao passar o mouse em cima de onChange -> ChangeEvent sem o handler
    // sempre que mudar o conteúdo do input
    console.log("Mudou para: " + event.target.value);
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que a página seja recarregada ao enviar o form
    console.log("enviou");
  }

  //onSubmit -> enviar o formulário
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}> 
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={(handleChange)}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Número" description="234" />

      </div>
    </div>
  );
};

export default CepSearch;
