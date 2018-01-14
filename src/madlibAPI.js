import axios from "axios";

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
  "ant"
];

const getAll = () => nouns;

// const getRandomWords = () => axios.get("http://madlibz.herokuapp.com/api/random?minlength=2&maxlength=5");

// const getRandomWordBySpeech = word =>
//   axios.get(`http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=${word}`);

export default {
  getAll
};
