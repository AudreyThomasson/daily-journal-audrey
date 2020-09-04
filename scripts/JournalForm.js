import { saveEntry } from './JournalDataProvider.js'

const eventHub = document.querySelector(".container")

// code below listens for new note entry then tells saveEntry 
// to go save the new entry to the database
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const entryContent = document.querySelector("#noteForm--text")
        const noteMood = document.querySelector("#moods")
        const journalDate = document.querySelector('#journalDate')
        const concepts = document.querySelector('#concepts')

        if (noteMood.value !== "0"){
            const newEntry = {
                date: journalDate.value,
                concept: concepts.value,
                entry: entryContent.value,
                mood: noteMood.value,
            }
            saveEntry(newEntry)
        }else{
        window.alert("Choose a Mood");
        }
    }
})

// renderForm makes a form on the DOM for entering a note with dropdown of
// moods
export const JournalFormComponent = () => {
    return contentTarget.innerHTML = `
        <form action="">
        <fieldset>
            <label for="journalDate">Date of entry:</label>
            <input type="date" name="journalDate" id="journalDate">
        </fieldset>
            <!-- <br> -->
        <fieldset>
            <label for="concepts">Concepts covered:</label>
            <input type="text" id="concepts" name="concepts">
        </fieldset>
            <!-- <br> -->
        <fieldset>
            <label for="entry">Journal entry:</label>
            <textarea name="entry" rows="2" cols="20"></textarea>
        </fieldset>
            <!-- <br> -->
        <fieldset>
            <select class="dropdown" id="moods">
            <option value="0">Mood for the day:</option>  
            <option value="happy">Happy</option>
            <option value="accomplished">Accomplished</option>
            <option value="ok">OK</option>
            <option value="frustrated">Frustrated</option>
            <option value="lost">Lost</option>
            </select>
        </fieldset>
        <br>   
        </form>        
        <button type="button" id="saveEntry">Record Journal Entry</button>
    `
}



