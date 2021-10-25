import axios from "axios"

const baseURL = "https://frameworks-web.herokuapp.com/api/filmes"
const headers = { matricula: "2021000000" }

export const lerFilmes = categoria => axios
    .get(categoria ? `${baseURL}?categoria=${categoria}` : baseURL, { headers })
    .catch(onError)

export const inserirFilme = data => axios
    .post(baseURL, data, { headers })
    .then(() => onSuccess("cadastrado"))
    .catch(onError)

export const atualizarFilme = (id, data) => axios
    .put(`${baseURL}/${id}`, data, { headers })
    .then(() => onSuccess("alterado"))
    .catch(onError)

export const excluirFilme = id => axios
    .delete(`${baseURL}/${id}`, { headers })
    .then(() => onSuccess("deletado"))
    .catch(onError)

const onSuccess = op => {
    alert(`Filme ${op} com sucesso`)
    window.location.reload()
}

const onError = e => {
    alert("Ocorreu um erro")
    console.log(e)
}