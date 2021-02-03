const listaMascotas = document.getElementById("lista-mascotas");

let mascotas = [
    {
        tipo: 'Gato',
        nombre:'Manchas',
        dueno: 'Esteban'
    }
];

function listarMascotas()
{
    const htmlMascotas = mascotas.map((mascota, indice)=>`<tr>
        <th scope="row">${indice}</th>
        <td>${mascota.tipo}</td>
        <td>${mascota.nombre}</td>
        <td>${mascota.dueno}</td>
        <td>
        <div class="btn-group" role="group" aria-label="Basic mixed styles example">
            <button type="button" class="btn btn-danger">Eliminar</button>
            <button type="button" class="btn btn-warning">Editar</button>
        </div>
        </td> 
    </tr>`).join("");
    listaMascotas.innerHTML = htmlMascotas;
}

listarMascotas();