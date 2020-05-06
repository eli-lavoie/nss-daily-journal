console.log("Shit works")

const journalEntry = {
    date: "",
    concepts: "",
    entry: "",
    mood: "",
}

let journalEntriesContainer = document.querySelector(".entryLog")

fetch("http://localhost:3000/entries")
    .then(entries => entries.json())
    .then(parsedEntries => {
        for(let i = 0; i < parsedEntries.length; i++){
            journalEntryHTML = `
            <div class="entry">
            <h2 class="date">${parsedEntries[i].date}</h2>
            <h1 class="concepts">${parsedEntries[i].concepts}</h1>
            <p class="entry">${parsedEntries[i].entry}</p>
            <p class="mood">${parsedEntries[i].mood}</p>
            </div>
            `
            journalEntriesContainer.innerHTML += journalEntryHTML
        }
    })












// const makeJournalEntryComponent = (date, concepts, entry, mood) => {
//     return `
//         <div class="entry">
//             <h2 class="date">${date}</h2>
//             <h1 class="concepts">${concepts}</h1>
//             <p class="entry">${entry}</p>
//             <p class="mood">${mood}</p>
//         </div>
//             `
// }

// const renderJournalToHTML = () => {
//     for (let i = 0; i < listOfEntries.length; i++){
//         let journalDate = listOfEntries[i].date
//         let journalConcepts = listOfEntries[i].concepts
//         let journalEntry = listOfEntries[i].entry
//         let journalMood = listOfEntries[i].mood
//         let renderedJournalEntry = makeJournalEntryComponent(journalDate, journalConcepts, journalEntry, journalMood)
//         journalEntriesContainer.innerHTML += renderedJournalEntry
//     }
// }

// renderJournalToHTML()
