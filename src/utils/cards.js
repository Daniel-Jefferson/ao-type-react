function safeClone(card) {
    // type check all this
    let safeClone = {
        taskId: card.taskId,
        name: card.name,
        claimed: [],
        completed: card.completed,
        passed: [],
        guild: card.guild,
        subTasks: card.subTasks,
        lastClaimed: 0,
        book: card.book,
        priorities: card.priorities,
        deck: [],
        color: card.color,
        address: card.address,
        allocations: [],
        bolt11: card.bolt11,
        payment_hash: '',
        boost: 0,
    }
    console.log("safeClone is ", safeClone)
    return safeClone
}

// generalized goIn and other card utility functions should go here

export default {
    safeClone,
}