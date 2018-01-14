import axios from "axios";


const wordList = {
  nouns: [
    "ball",
    "bat",
    "bed",
    "book",
    "boy",
    "bun",
    "can",
    "cake",
    "cap",
    "car",
    "cat",
    "cow",
    "cub",
    "cup",
    "dad",
    "day",
    "dog",
    "doll",
    "dust",
    "fan"
  ],
  verbs: [
    "bring",
    "send",
    "owe",
    "contain",
    "buy",
    "show",
    "take",
    "tell",
    "verify",
    "check",
    "get",
    "wash",
    "finalize",
    "annoy",
    "lay",
    "lend",
    "offer",
    "edit",
    "make",
    "phone"
  ],
  abjectives: [
    "adorable",
    "beautiful",
    "clean",
    "drab",
    "elegant",
    "fancy",
    "glamorous",
    "handsome",
    "long",
    "magnificent",
    "old-fashioned",
    "plain",
    "quaint",
    "sparkling",
    "ugliest",
    "unsightly"
  ]
};

const nouns = [
  "ball",
  "bat",
  "bed",
  "book",
  "boy",
  "bun",
  "can",
  "cake",
  "cap",
  "car",
  "cat",
  "cow",
  "cub",
  "cup",
  "dad",
  "day",
  "dog",
  "doll",
  "dust",
  "fan",
  "pen",
  "bed",
  "ant",
  "pig"
];


const getNouns = () => wordList.nouns;
const getVerbs = () => wordList.verbs;

// const getRandomWords = () => axios.get("http://madlibz.herokuapp.com/api/random?minlength=2&maxlength=5");

// const getRandomWordBySpeech = word =>
//   axios.get(`http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=${word}`);

export default {
  getVerbs,
  getNouns
};
