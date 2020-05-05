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

let journalEntriesContainer = document.getElementsByClassName("entryLog")

const makeJournalEntryComponent = () => {
    return `
        <div class="entry">
            <h2 class="date">Test</h2>
            <h1 class="concepts">Test</h1>
            <p class="entry">Test</p>
            <p class="mood">Test</p>
        </div>
            `
}

for (entry of listOfEntries){
    let renderedJournalEntry = makeJournalEntryComponent(entry)
    journalEntriesContainer.innerHTML += renderedJournalEntry
}