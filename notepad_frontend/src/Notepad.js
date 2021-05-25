import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { v4 } from 'uuid';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export default function Notepad() {
  let { id } = useParams();
  let history = useHistory();
  const [texto, setTexto] = useState('');

  const generateRandomId = () => {
    return v4().split('-')[0];
  };

  useEffect(() => {
    if (!id) {
      // se não tem id, gero um aleatório e faço redirect
      history.push(`/${generateRandomId()}`);
    } else {
      axios.get(`${BACKEND_URL}/${id}`).then((res) => {
        setTexto(res.data.texto);
      });
    }
  }, [id, history]);

  const atualizaTexto = (e) => {
    setTexto(e.target.value);
    axios.post(`${BACKEND_URL}/${id}`, {texto: texto});
  };

  return (
    <textarea className="notepad" 
              value={texto} 
              onChange={(e) => atualizaTexto(e)}>
    </textarea>
  )
}
