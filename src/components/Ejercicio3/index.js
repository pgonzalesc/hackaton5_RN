import React, {useState} from 'react';
import './index.css';

export const Ejercicio3 = ()=> {
    const [data, setData] = useState('');
    const [error, setError] = useState('');

    const { name, cell, email, comment } = data;

    const temp = {}
    const msgErr = {}

    const reset = () => {
        document.querySelector('#name').value = '';
        document.querySelector('#cell').value = '';
        document.querySelector('#email').value = '';
        document.querySelector('#comment').value = '';
    }

    const handleForm = (e) => {
        e.preventDefault();

        let ind = '1';

        if(!temp.name){
            ind = '0';
            msgErr.name = 'El campo nombre es obligatorio';
        }else if(!temp.cell){
            ind = '0';
            msgErr.cell = 'El campo teléfono es obligatorio';
        }else if(!temp.email){
            ind = '0';
            msgErr.email = 'El campo correo es obligatorio';
        }else if(!temp.comment){
            ind = '0';
            msgErr.comment = 'El campo comentario es obligatorio';
        }
        
        if(ind === '0')
            setError(msgErr);
        else{
            //document.querySelector('#dataBody').style.display = 'flex';
            setData(temp);
            reset();
        }

        
    }

    const handleChange = (e, name) => {
        temp[name] = e.target.value;
    }

    return (
        <section className="container-form">
            <div className="form">
                <div className="form-data">
                    <input type="text" id="name" name="name" placeholder="Nombre" required onChange={(e)=>{handleChange(e, 'name')}} autoComplete="off"/>
                    <p className="errorMsg">{error.name}</p>
                    <input type="text" id="cell" name="cell"  placeholder="Número de Teléfono" required onChange={(e)=>{handleChange(e, 'cell')}} autoComplete="off"/>
                    <p className="errorMsg">{error.cell}</p>
                    <input type="text" id="email" name="email" placeholder="Correo" required onChange={(e)=>{handleChange(e, 'email')}} autoComplete="off"/>
                    <p className="errorMsg">{error.email}</p>
                    <input type="text" id="comment" name="comment" placeholder="Comentario" required onChange={(e)=>{handleChange(e, 'comment')}} autoComplete="off"/>
                    <p className="errorMsg">{error.comment}</p>
                    <p>{name}</p>
                    <p>{cell}</p>
                    <p>{email}</p>
                    <p>{comment}</p>
                </div>
                <div className="form-btn">
                    <button onClick={handleForm}>Send</button>
                </div>
            </div>
        </section>
    )
}