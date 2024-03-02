import { baseUrl, maxQuantitiy } from "../variables.js"

async function getRepositories(userName) {
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${maxQuantitiy}`)
    return await response.json()
}

export { getRepositories }