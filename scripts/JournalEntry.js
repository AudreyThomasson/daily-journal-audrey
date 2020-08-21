/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <div class="entry-card">
        <div id="entry--${entry.id}" class="journalEntry">
        <div> date: ${entry.date}</div>
        <div>concept: ${entry.concept}</div>
        <div>mood:  ${entry.mood}</div> 
        <br>
        <div>entry: ${entry.entry}</div>
    </div>

    `
}