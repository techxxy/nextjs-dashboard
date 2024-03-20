interface WordList {
    [key: string]: { // Using [key: string] here implies that any property name is allowed
        german: string;
        korean: string;
    }[]
}

const wordList: WordList = {
    schnuppernWords: [
        { german: 'Kino', korean: '키노' },
        { german: 'Banana', korean: '바나나' },
        { german: 'Kanal', korean: '카날' },
        { german: 'Kugel', korean: '쿠겔' },
        { german: 'man', korean: '만' },
        { german: 'Nutella', korean: '누텔라' },
        { german: 'du', korean: '두' },
    ],
    moreSchnuppernWords: [
        { german: 'haben', korean: '하벤' },
        { german: 'gut', korean: '궅' },
        { german: 'leben', korean: '레벤' },
        { german: 'Tag', korean: '탁' },
        { german: 'damit', korean: '다밑' },
    ],
    vowels: [
        { german: 'A', korean: '아' },
        { german: 'E', korean: '에' },
        { german: 'I', korean: '이' },
        { german: 'O', korean: '오' },
        { german: 'U', korean: '우' },


]
};

export {wordList}