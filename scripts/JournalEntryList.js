/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data provider component
 */
import { getEntries, useEntries } from "./JournalDataProvider.js";
import { JournalEntryHTML } from "./JournalEntry.js";

const eventHub = document.querySelector(".container")

// DOM reference to where all entries will be rendered
const contentTarget = document.querySelector(".entryList")

eventHub.addEventListener('entryStateChanged', event => {  
    EntryList()
})

// this EntryList is called by the main.js to render the initial
// list of entries
export const EntryList = () => {
    // Use the journal entry data from the data provider component
    getEntries()
    .then(useEntries)
    .then(render)
}

const render = (entryTacoArray) => {
       let HTMLArray = entryTacoArray.map(singleTacoEntry => {
           return JournalEntryHTML(singleTacoEntry);
       })
        contentTarget.innerHTML = HTMLArray.join("");
}