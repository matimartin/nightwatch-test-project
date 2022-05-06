const elements = {
    searchBar : 'input.et_pb_s',
    searchBtn : '.et_pb_searchsubmit'
};

const commands = {
    searchElementAndSubmit(message) {
        return this
        .setValue('@searchBar', message)
        .click('@searchBtn')
    },
}

module.exports = {
    url: "https://ultimateqa.com/",
    elements: elements,
    commands: commands
}


