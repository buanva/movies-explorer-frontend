export const urlConstants = {
    moviesApiBaseUrl: 'https://api.nomoreparties.co/',
    moviesApiUrl: 'https://api.nomoreparties.co/beatfilm-movies',
    mainApiBaseUrl: 'https://api.buanva.students.nomoredomains.rocks'
}

export const patterns = {
    email: '[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,}$',
    name: '[А-Яа-яA-Za-z\\-\\s]*'
}

export const localStorageKeys = {
    moviesKey: "moviesData",
    savedFilmsIds: "savedFilmIds",
    savedFilmsRequested: "isSavedFilmsRequested",
    isLogged: "isLogged"
}

export const cardsDisplayCount = {
    Desktop: {
        firstPart: 12,
        inRow: 3
    },
    MobileSizeM: {
        firstPart: 8,
        inRow: 2
    },
    MobileSizeS: {
        firstPart: 5,
        inRow: 2
    }
}

export const displaySizes = {
    Desktop: 1280,
    MobileSizeM: 768
}
