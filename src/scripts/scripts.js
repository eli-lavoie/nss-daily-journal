console.log("Shit works")

const journalEntry = {
    date: "",
    concepts: "",
    entry: "",
    mood: "",
}

let listOfEntries = [
    {
        date: "4/17/2020",
        concepts: "JS Arrays and Objects",
        entry: "Today we covered javascript objects and arrays, and talked about how objects can store various different attributes of a specific thing, such as this journal entry having multiple different parameters. We also talked about how arrays can store multiple objects, such as the listOfEntries array containing multiple journal entries.",
        mood: "OK",
    },
    {
        date: "4/21/2020",
        concepts: "single responsibility principle",
        entry: "Today we discussed the single responsibility principle, which talks about how we should make our code to have 'one job' so to speak. This allows us to split our javascript across multiple files for easier document management, as well as ensures that our code works as efficiently as possible.",
        mood: "Happy",
}]

let journalEntriesContainer = document.querySelector(".entryLog")
const makeJournalEntryComponent = (date, concepts, entry, mood) => {
    return `
        <div class="entry">
            <h2 class="date">${date}</h2>
            <h1 class="concepts">${concepts}</h1>
            <p class="entry">${entry}</p>
            <p class="mood">${mood}</p>
        </div>
            `
}

const renderJournalToHTML = () => {
    for (let i = 0; i < listOfEntries.length; i++){
        let journalDate = listOfEntries[i].date
        let journalConcepts = listOfEntries[i].concepts
        let journalEntry = listOfEntries[i].entry
        let journalMood = listOfEntries[i].mood
        let renderedJournalEntry = makeJournalEntryComponent(journalDate, journalConcepts, journalEntry, journalMood)
        journalEntriesContainer.innerHTML += renderedJournalEntry
    }
}

renderJournalToHTML()
