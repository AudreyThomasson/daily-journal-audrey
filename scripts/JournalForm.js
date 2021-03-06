import { saveEntry } from './JournalDataProvider.js'
import { EntryList } from './JournalEntryList.js'
import { getMoods, useMoods } from './MoodDataProvider.js'

const eventHub = document.querySelector(".formContainer")
const contentTarget = document.querySelector(".entryForm")

// code below listens for new note entry then tells saveEntry 
// to go save the new entry to the database
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveEntry") {
        const entryContent = document.querySelector("#entry")
        const journalDate = document.querySelector('#journalDate')
        const concepts = document.querySelector('#concepts')
        const todaysMood = document.querySelector("#moods")


        if (todaysMood.value !== "0"){
            const newEntry = {
                date: journalDate.value,
                concept: concepts.value,
                entry: entryContent.value,
                moodId: parseInt(todaysMood.value),
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
    getMoods()
    .then(useMoods)
    .then(renderForm)
}
        
        
const renderForm = (allMoods) => {
    return  contentTarget.innerHTML =     
    `<form action="">
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
                <textarea name="entry" id="entry" rows="6" cols="47"></textarea>
            </fieldset>
                <!-- <br> -->
            <fieldset>
                <select class="dropdown" id="moods">
                <option value="0" class="moodHeader">Mood for the day:</option>  
                ${
                    allMoods.map(mood => {
                            return `<option value="${ mood.id }">${ mood.label }</option>`
                        }
                    ).join("")
                }
                </select>
            </fieldset>
            <br>   
            </form>        
            <button type="button" id="saveEntry">Record Journal Entry</button>
        `
    
}