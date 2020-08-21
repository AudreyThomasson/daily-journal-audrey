/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
    <section class="entry-card">
        <div id="entry--${entry.id}" class="journalEntry">
        <div> Date: ${entry.date}</div>
        <div>Concept: ${entry.concept}</div>
        <div>Mood:  ${entry.moods}</div> 
        <div>Entry: ${entry.entry}</div>
        <br>
    </section>

    `
}