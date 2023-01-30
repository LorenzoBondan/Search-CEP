import './styles.css';

import ResultCard from 'components/ResultCard';
import { useState } from 'react';
import axios from 'axios';

// REPRESENTANDO OS DADOS DAS TEXTBOXES

type FormData = {
  txtCEP : string; // os nomes tem que bater com a propriedade name do input
  //txtTest : string;
}

// pra trazer os dados da API
type Address = {
  logradouro : string;
  localidade : string;
}

const CepSearch = () => {

  // REPRESENTANDO OS DADOS DAS TEXTBOXES
  const [formData, setFormData] = useState<FormData>({txtCEP: ''});

  // pra trazer os dados da API
  const [address, setAdress ] = useState<Address>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { // copiado ao passar o mouse em cima de onChange -> ChangeEvent sem o handler
    // sempre que mudar o conteúdo do input
    //console.log("Mudou para: " + event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setFormData( {...formData, [name]:value} ) // definimos as textboxes com valores inciais de '', então, alterar seu valor cada vez que clicamos numa tecla
  }

  const handleSubmit = (event : React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // evita que a página seja recarregada ao enviar o form
    //console.log("enviou");
    //console.log(formData);
    //console.log("cep: " + formData.txtCEP);

    axios.get(`https://viacep.com.br/ws/${formData.txtCEP}/json/`)
    .then((response) => {
      setAdress(response.data);
      console.log(response.data);
    })
    .catch((error) => {
      setAdress(undefined);
      console.log(error);
    });
    
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

            <button type="submit" className="btn btn-primary search-button">
              Buscar
            </button>
          </div>
        </form>

        {address && 
        <>
        <ResultCard title="Logradouro" description={address?.logradouro} />
        <ResultCard title="Localidade" description={address?.localidade} />
        </>
        }

      </div>
    </div>
  );
};

export default CepSearch;
