function storageAvailable(type) {
    try {
        var storage = window[type],
            x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
}
if (storageAvailable('localStorage')) {
	console.log('Nice! Local storage is available!')
} else {
	console.log('Sorry, local storage is unavailable!')
}
function populateStorage() {
	localStorage.setItem('colors', {'0': '#123def', '1': '#666690', '2': '#ccaaee'});
}
populateStorage()
colors = localStorage.getItem('colors');
console.log(colors)