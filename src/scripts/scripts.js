const journalEntry = {
    Date: "",
    Concepts: "",
    Entry: "",
    Mood: "",
}

let listOfEntries = []

listOfEntries.push(journalEntry)

const JournalEntry01 = {
    Date: "4/17/2020",
    Concepts: "JS Arrays and Objects",
    Entry: "Today we covered javascript objects and arrays, and talked about how objects can store various different attributes of a specific thing, such as this journal entry having multiple different parameters. We also talked about how arrays can store multiple objects, such as the listOfEntries array containing multiple journal entries.",
    Mood: "OK",
}

const JournalEntry02 = {
    Date: "4/21/2020",
    Concepts: "single responsibility principle",
    Entry: "Today we discussed the single responsibility principle, which talks about how we should make our code to have 'one job' so to speak. This allows us to split our javascript across multiple files for easier document management, as well as ensures that our code works as efficiently as possible.",
    Mood: "Happy",
}
listOfEntries.push(JournalEntry01)
listOfEntries.push(JournalEntry02)