/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryHTML = (entry) => {
    return `
    <section class="entry-card">
        <div id="entry--${entry.id}" class="journalEntry">
        <div> Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Entry: ${entry.entry}</div>
        <div>Mood:  ${entry.mood}</div> 
        <br>
    </section>

    `
}