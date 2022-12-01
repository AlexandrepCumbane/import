import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();
  const [array, setArray] = useState([]);

  const fileReader = new FileReader();

  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
  };

  const csvFileToArray = string => {
    const csvHeader = string.slice(0, string.indexOf("\n")).split(",");
    const csvRows = string.slice(string.indexOf("\n") + 1).split("\n");

    const array = csvRows.map(i => {
      const values = i.split(",");
      const obj = csvHeader.reduce((object, header, index) => {
        object[header] = values[index];
        return object;
      }, {});
      return obj;
    });

    setArray(array);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (file) {
      fileReader.onload = function (event) {
        const text = event.target.result;
        csvFileToArray(text);
      };

      fileReader.readAsText(file);
    }
  };

  const headerKeys = Object.keys(Object.assign({}, ...array));
 
  const handleMapKey = (key) => {
    
    let mappedKey = "";

    switch (key) {
      case "case_number":
        mappedKey = "adsds";
        break;
      case "id":
        mappedKey = "id";
        break;
      case "Provincia":
        mappedKey = "provincia";
        break;

      case "Distrito":
        mappedKey = "distrito";
        break;

      case "Localidade":
        mappedKey = "localidade";
        break;

      case "Sector":
        mappedKey = "sector";
        break;

      case "Resposta":
        mappedKey = "response";
        break;

      case "Outra categoria":
        mappedKey = "othercategory";
        break;

      case "Mês":
        mappedKey = "month";
        break;

      case "Tipo de Caso":
        mappedKey = "category";
        break;

      case "Subcategoria":
        mappedKey = "subcategory";
        break;

      case "Problema de Subcategoria":
        mappedKey = "subcategory_issue";
        break;

      case "Vulnerabilidade":
        mappedKey = "vulnerability";
        break;

      case "Notas da Chamada":
        mappedKey = "call_notes";
        break;

      case "Prioridade de Caso":
        mappedKey = "case_priority";
        break;

      case "Quem está a comunicar?":
        mappedKey = "contact_group";
        break;

      case "Consentimento para coletar informações pessoais":
        mappedKey = "consent_pi";
        break;

      case "Consentimento para compartilhar com parceiro":
        mappedKey = "consent_share_pi";
        break;

      case "Nome Completo":
        mappedKey = "fullname";
        break;

      case "Contacto":
        mappedKey = "contact";
        break;

      case "Gênero":
        mappedKey = "gender";
        break;

      case "Idade":
        mappedKey = "age_group";
        break;

      case "Comunidade":
        mappedKey = "community";
        break;

      case "Ponto de Distribuição":
        mappedKey = "distribution_point";
        break;

      case "Modalidade de Transferencia":
        mappedKey = "transfermod";
        break;

      case "Acomodação ou Centro de Reassentamento":
        mappedKey = "location_type";
        break;

      case "Nome de Reassentamento":
        mappedKey = "ressetlement_name";
        break;

      case "Solução da Chamada":
        mappedKey = "call_solution";
        break;

      case "Está encerrado?":
        mappedKey = "is_closed";
        break;

      case "Como está a contactar-nos?":
        mappedKey = "means_of_communication";
        break;

      case "Como teve conhecimento sobre o mecanismo de reclamação e feedback?":
        mappedKey = "how_knows_lv";
        break;

      case "Como gostaria de ser contactado?":
        mappedKey = "how_callback";
        break;

      case "Como é que você sente que seu assunto foi tratado durante esta chamada?":
        mappedKey = "call_feedback";
        break;

      case "Ligação de volta":
        mappedKey = "callback_required";
        break;

      case "Outro contacto":
        mappedKey = "other_contact";
        break;

      case "Chamador não encontrado para feedback":
        mappedKey = "unavailable_contact";
        break;

      case "Criado por":
        mappedKey = "created_by__label";
        break;

      /**
       * English Fields
       */
      case "Case Number":
        mappedKey = "case_number";
        break;

      case "Province":
        mappedKey = "provincia";
        break;

      case "District":
        mappedKey = "distrito";
        break;

      case "Locality":
        mappedKey = "localidade";
        break;

      case "Response":
        mappedKey = "response";
        break;

      case "Other category":
        mappedKey = "othercategory";
        break;

      case "Month":
        mappedKey = "month";
        break;

      case "Case category":
        mappedKey = "category";
        break;

      case "Sub-category":
        mappedKey = "subcategory";
        break;

      case "Sub-category issue":
        mappedKey = "subcategory_issue";
        break;

      case "Vulnerability":
        mappedKey = "vulnerability";
        break;

      case "Call Notes":
        mappedKey = "call_notes";
        break;

      case "Who is contacting":
        mappedKey = "contact_group";
        break;

      case "Consent to Collect Personal Information":
        mappedKey = "consent_pi";
        break;

      case "Consent to share Personal Information":
        mappedKey = "consent_share_pi";
        break;

      case "Full Name":
        mappedKey = "fullname";
        break;

      case "Contact":
        mappedKey = "contact";
        break;

      case "Gender":
        mappedKey = "gender";
        break;

      case "Age":
        mappedKey = "age_group";
        break;

      case "Community":
        mappedKey = "community";
        break;

      case "Distribution Point":
        mappedKey = "distribution_point";
        break;

      case "Transfer modality":
        mappedKey = "transfermod";
        break;

      case "Accommodation or resettlement centre":
        mappedKey = "location_type";
        break;

      case "Resettlement name":
        mappedKey = "ressetlement_name";
        break;

      case "Call Solution":
        mappedKey = "call_solution";
        break;

      case "Case closed?":
        mappedKey = "is_closed";
        break;

      case "How did they contact us?":
        mappedKey = "means_of_communication";
        break;

      case "How did you hear about linha verde?":
        mappedKey = "how_knows_lv";
        break;

      case "How would you like to be contacted?":
        mappedKey = "how_callback";
        break;

      case "How do you feel you issue was managed during this call?":
        mappedKey = "call_feedback";
        break;

      case "Callback Required":
        mappedKey = "callback_required";
        break;

      case "Other number":
        mappedKey = "other_contact";
        break;

      case "Created by":
        mappedKey = "created_by__label";
        break;

      default:
        mappedKey = key;
    }
      console.log(key, mappedKey);
    return mappedKey;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>REACTJS CSV IMPORT EXAMPLE </h1>
      <form>
        <input
          type={"file"}
          id={"csvFileInput"}
          accept={".csv"}
          onChange={handleOnChange}
        />

        <button
          onClick={(e) => {
            handleOnSubmit(e);
          }}
        >
          IMPORT CSV
        </button>
      </form>

      <br />


      <table>
        <thead>
          <tr key={"header"}>
            {headerKeys.map((key) => (
              
              <th>{handleMapKey(key)}</th>
            ))  }
          </tr>
        </thead>

        <tbody>
          {array.map((item) => (
            <tr key={item.id}>
              {Object.values(item).map((val) => (
                <td>{val}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
