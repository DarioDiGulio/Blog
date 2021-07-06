const searchInput = document.getElementById('search');
const clearSearch = document.getElementById('clearSearch');
const entries = getParsedEntries();

searchInput.addEventListener('input', function () {

    entries.forEach(entry => {
        const title = getEntryTitle(entry);
        if (!title.includes(this.value.toUpperCase())) {
            hideEntry(entry);
        } else {
            showEntry(entry);
        }
    });
})

function getParsedEntries() {
    return Array.from(
        document.getElementsByClassName('entry')
    );
}

function getEntryTitle(entry) {
    return entry.firstElementChild.innerText;
}

function showEntry(entry) {
    entry.style.display = 'block';
}

function hideEntry(entry) {
    entry.style.display = 'none';
}

clearSearch.addEventListener('click', () => {
    searchInput.value = '';

    entries.forEach(entry => {
        showEntry(entry);
    });
})