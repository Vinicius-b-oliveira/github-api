import { baseUrl, maxQuantitiy } from "../variables.js"

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${maxQuantitiy}`)
    return await response.json()
}

export { getEvents }