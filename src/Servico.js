import axios from "axios"

const baseURL = "https://frameworks-web.herokuapp.com/api/filmes"

export const lerFilmes = categoria => axios
    .get(categoria ? `${baseURL}?categoria=${categoria}` : baseURL)
    .catch(onError)

export const inserirFilme = data => axios
    .post(baseURL, data)
    .then(() => onSuccess("cadastrado"))
    .catch(onError)

export const atualizarFilme = (id, data) => axios
    .put(`${baseURL}/${id}`, data)
    .then(() => onSuccess("alterado"))
    .catch(onError)

export const excluirFilme = id => axios
    .delete(`${baseURL}/${id}`)
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