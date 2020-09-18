/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */
const eventHub = document.querySelector(".formContainer")

const dispatchStateChangeEvent = () => {
    const entryStateChangedEvent = new CustomEvent("entryStateChanged")

    eventHub.dispatchEvent(entryStateChangedEvent)

}


let journal = []


export const getEntries = () => {
    return fetch("http://localhost:8088/entries") // Fetch from the API
    .then(response => response.json())
    .then(
        parsedEntries => {
        journal = parsedEntries
        })
}


export const useEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(nextEntry.date) - Date.parse(currentEntry.date)
    )
    return sortedByDate
}


export const saveEntry = tacoEntryObj => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(tacoEntryObj)
    })
    .then(() => {
        getEntries()
    })
    .then(dispatchStateChangeEvent)
}