import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';

// REPRESENTANDO OS DADOS DAS TEXTBOXES

type FormData = {
  txtCEP : string; // os nomes tem que bater com a propriedade name do input
  txtTest : string;
}

const CepSearch = () => {

  // REPRESENTANDO OS DADOS DAS TEXTBOXES
  const [formData, setFormData] = useState<FormData>({txtCEP: '', txtTest: ''});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // copiado ao passar o mouse em cima de onChange -> ChangeEvent sem o handler
    // sempre que mudar o conteúdo do input
    //console.log("Mudou para: " + event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setFormData( {...formData, [name]:value} ) // definimos as textboxes com valores inciais de '', então, alterar seu valor cada vez que clicamos numa tecla
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que a página seja recarregada ao enviar o form
    console.log("enviou");
    console.log(formData);
    console.log("cep: " + formData.txtCEP);
  }

  //onSubmit -> enviar o formulário
  return (
    <div className="cep-search-container">
      <h1 className="text-primary">Busca CEP</h1>
      <div className="container search-container">
        <form onSubmit={handleSubmit}> 
          <div className="form-container">
            <input
              name='txtCEP'
              value={formData.txtCEP}
              type="text"
              className="search-input"
              placeholder="CEP (somente números)"
              onChange={(handleChange)}
            />
            <input
              name='txtTest'
              value={formData.txtTest}
              type="text"
              className="search-input"
              placeholder="TEST"
              onChange={(handleChange)}
            />
            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        <ResultCard title="Logradouro" description="Lalala" />
        <ResultCard title="Localidade" description="234" />

      </div>
    </div>
  );
};

export default CepSearch;
