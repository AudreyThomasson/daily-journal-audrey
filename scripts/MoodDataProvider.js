let moods = []


export const getMoods = () => {
    return fetch("http://localhost:8088/moods") // Fetch from the API
    .then(response => response.json())
    .then(
        parsedMoods => {
        moods = parsedMoods
        })
}


export const useMoods = () => {
    return moods.slice();
}
