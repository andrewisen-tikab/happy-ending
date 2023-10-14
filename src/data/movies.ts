export type Movie = {
  guid: string;
  title: string;
  hasHappyEnding: boolean | null;
};

/**
 * Movies from IMDBd top 250 list.
 * https://www.imdb.com/chart/top/
 *
 * Grabbed 2023-10-14 (October 14th, 2023).
 *
 * The list is manually curated.
 * If you want to update it, submit a PR.
 * If you disagree with the list, submit a PR - and fight me ;)
 */
export const movies: Movie[] = [
  {
    guid: "0ce708ec-cb02-489d-8665-c70bda101952",
    title: "The Shawshank Redemption",
    hasHappyEnding: true, // Andy escapes from prison and reunites with Red
  },
  {
    guid: "c9b21c7c-ae95-4f96-a6f0-b9f4ae6a2feb",
    title: "The Godfather",
    hasHappyEnding: null,
  },
  {
    guid: "699871ae-862c-4d4b-8009-9cda1fe9e0c1",
    title: "The Dark Knight",
    hasHappyEnding: false, // Batman takes the blame for Harvey Dent's crimes
  },
  {
    guid: "9cc3f332-c386-436a-87e3-181febc34830",
    title: "The Godfather Part II",
    hasHappyEnding: null,
  },
  {
    guid: "174f3f74-4223-4d9a-8a78-04411d0b36e8",
    title: "12 Angry Men",
    hasHappyEnding: null,
  },
  {
    guid: "3d9cfa0d-2b7d-455a-9c8e-35aabdf70248",
    title: "Schindler's List",
    hasHappyEnding: null,
  },
  {
    guid: "a4f17742-e66a-4530-af9a-886d32ef6a05",
    title: "The Lord of the Rings: The Return of the King",
    hasHappyEnding: true, // Frodo destroys the ring and returns to the Shire
  },
  {
    guid: "3826d2f2-66ec-45de-be45-6dfd22e05abf",
    title: "Pulp Fiction",
    hasHappyEnding: true, // Jules and Vincent survive the diner robbery
  },
  {
    guid: "540220fa-28a0-44c5-baa4-a741c90d7072",
    title: "The Lord of the Rings: The Fellowship of the Ring",
    hasHappyEnding: false, // Gandalf dies
  },
  {
    guid: "75ec617f-9f88-4829-be05-814ea06f24d8",
    title: "The Good, the Bad and the Ugly",
    hasHappyEnding: null,
  },
  {
    guid: "43605cf2-94c5-44f6-9038-3abdee1c5ab0",
    title: "Forrest Gump",
    hasHappyEnding: true, // Forrest and Jenny get married and have a son
  },
  {
    guid: "4d6ff823-6ae2-47ab-8ad4-8b8b762a0bfa",
    title: "Fight Club",
    hasHappyEnding: false, // The Narrator shoots himself in the face
  },
  {
    guid: "7384c369-12bc-4e1e-825a-b547ee73fd24",
    title: "The Lord of the Rings: The Two Towers",
    hasHappyEnding: true, // Gandalf returns
  },
  {
    guid: "ac2b9c9d-3af9-4c3b-88cc-ffcbabce9838",
    title: "Inception",
    hasHappyEnding: false, // The top keeps spinning
  },
  {
    guid: "6703fc9d-267f-4a66-a881-fd945ff083f9",
    title: "Star Wars: Episode V - The Empire Strikes Back",
    hasHappyEnding: false, // Han Solo is frozen in carbonite
  },
  {
    guid: "7431fca3-f996-4791-87a6-d7fad2a1fa19",
    title: "The Matrix",
    hasHappyEnding: true, // Neo defeats Agent Smith
  },
  {
    guid: "807d06f5-c912-429d-9b02-83dbb9e1093a",
    title: "Goodfellas",
    hasHappyEnding: null,
  },
  {
    guid: "90b7ff19-544e-45a9-80e3-e34705a5d67b",
    title: "One Flew Over the Cuckoo's Nest",
    hasHappyEnding: null,
  },
  {
    guid: "827ba4eb-0ca4-4be0-a8b1-84a8ac7eb63d",
    title: "Se7en",
    hasHappyEnding: false, // John Doe kills Mills' wife
  },
  {
    guid: "78ef2f55-52be-423f-b83c-41fb87c76bc1",
    title: "It's a Wonderful Life",
    hasHappyEnding: null,
  },
  {
    guid: "35a7c1d7-dbe7-4f8d-b4b9-e7617054dafa",
    title: "Spider-Man: Across the Spider-Verse",
    hasHappyEnding: true, // Miles saves the day
  },
  {
    guid: "d283e291-aed4-4c55-8a4a-dbbac470b8e1",
    title: "Seven Samurai",
    hasHappyEnding: null,
  },
  {
    guid: "f84322c5-29cf-4a4d-bd02-be75706dcd5d",
    title: "Interstellar",
    hasHappyEnding: true, // Cooper reunites with his daughter
  },
  {
    guid: "17fffee6-6fbb-41fa-b284-b9acedb2d1ce",
    title: "The Silence of the Lambs",
    hasHappyEnding: null,
  },
  {
    guid: "a6164721-dc9f-45fc-b8f1-d408214de59c",
    title: "Saving Private Ryan",
    hasHappyEnding: true, // Ryan survives the war
  },
  {
    guid: "81d6fc50-c95c-40ff-86b7-9b6232a224e9",
    title: "City of God",
    hasHappyEnding: null,
  },
  {
    guid: "e02d8e23-3225-439d-bafa-9bff9c1c8b49",
    title: "Life Is Beautiful",
    hasHappyEnding: null,
  },
  {
    guid: "76a960a2-8a87-4983-a6cd-ee896f138036",
    title: "The Green Mile",
    hasHappyEnding: false, // John Coffey is executed
  },
  {
    guid: "69f2fc1c-787b-4c72-b802-ed4af3d86cf3",
    title: "Star Wars: Episode IV - A New Hope",
    hasHappyEnding: true, // Luke destroys the Death Star
  },
  {
    guid: "2f6bc9f6-5235-4eca-81b6-bf51e9249a60",
    title: "Terminator 2: Judgment Day",
    hasHappyEnding: null,
  },
  {
    guid: "05e2bac2-71a2-429a-b1da-d6bf14924828",
    title: "Back to the Future",
    hasHappyEnding: true, // Marty returns to 1985
  },
  {
    guid: "6a3be877-aae8-4774-bf27-328034cff3b7",
    title: "Spirited Away",
    hasHappyEnding: true, // Chihiro and her parents return to the human world
  },
  {
    guid: "d2cc612f-54cc-4290-825a-21f6f494d3fa",
    title: "The Pianist",
    hasHappyEnding: true, // Szpilman survives the war
  },
  {
    guid: "99321f33-8bfe-4188-8dde-4b8db5b52656",
    title: "Psycho",
    hasHappyEnding: null,
  },
  {
    guid: "a08bba24-a935-468d-8e4f-b4b8af6c0996",
    title: "Parasite",
    hasHappyEnding: false, // Everything is fucked up
  },
  {
    guid: "ca661711-4729-494a-a56b-feef7697abc1",
    title: "Gladiator",
    hasHappyEnding: null,
  },
  {
    guid: "d1b3cb51-0f67-4f4b-b0e0-3ad5079d3e09",
    title: "The Lion King",
    hasHappyEnding: true, // Simba returns
  },
  {
    guid: "f663c050-351f-44e7-908f-8eabc6631e60",
    title: "Léon: The Professional",
    hasHappyEnding: null,
  },
  {
    guid: "6d53a343-74f4-40f8-83ed-54dcd649f233",
    title: "American History X",
    hasHappyEnding: null,
  },
  {
    guid: "d00ab852-156d-465d-bfeb-469e0a84e15c",
    title: "The Departed",
    hasHappyEnding: false,
  },
  {
    guid: "8dd1a9c8-38f9-48f9-8ff1-23c98c88880a",
    title: "Whiplash",
    hasHappyEnding: false, // He's good at drumming, but at what cost?
  },
  {
    guid: "4ea06174-ef24-467b-8f76-c823fb593ffc",
    title: "The Prestige",
    hasHappyEnding: null,
  },
  {
    guid: "3a7ee715-f4b7-4671-84cf-20524735d59a",
    title: "The Usual Suspects",
    hasHappyEnding: null,
  },
  {
    guid: "92ad194c-507e-4d07-998d-89265692c380",
    title: "Grave of the Fireflies",
    hasHappyEnding: null,
  },
  {
    guid: "c587f2f4-68b8-455c-ad02-072057a64065",
    title: "Harakiri",
    hasHappyEnding: null,
  },
  {
    guid: "0fca065e-d93e-4cce-bfcb-cb655321192a",
    title: "Oppenheimer",
    hasHappyEnding: null,
  },
  {
    guid: "8affad7f-64f9-4b38-874e-1a9c0c6f4ac0",
    title: "Casablanca",
    hasHappyEnding: null,
  },
  {
    guid: "5fa0eab2-00ac-4137-9a73-1f908e504bef",
    title: "The Intouchables",
    hasHappyEnding: null,
  },
  {
    guid: "80e02877-bde7-400d-83b4-2f8bfdfc7d61",
    title: "Modern Times",
    hasHappyEnding: null,
  },
  {
    guid: "b70822f4-ef76-4997-834f-c20ba269b7fc",
    title: "Cinema Paradiso",
    hasHappyEnding: null,
  },
  {
    guid: "f5ddfec3-5f73-4d85-8946-bf9c97255525",
    title: "Once Upon a Time in the West",
    hasHappyEnding: null,
  },
  {
    guid: "be26c81a-5815-4d29-8274-c98155029a5c",
    title: "Rear Window",
    hasHappyEnding: null,
  },
  {
    guid: "fd9d6148-9a35-40fd-ad64-32e5c4bc190d",
    title: "Alien",
    hasHappyEnding: null,
  },
  {
    guid: "fec1da38-2888-43a7-bbf0-5f54b888de01",
    title: "City Lights",
    hasHappyEnding: null,
  },
  {
    guid: "bd324b08-c880-4c00-8d5a-6f099453f852",
    title: "Apocalypse Now",
    hasHappyEnding: null,
  },
  {
    guid: "2fbae986-e248-4c82-931f-8e82147e8643",
    title: "Memento",
    hasHappyEnding: null,
  },
  {
    guid: "053a0055-22cc-4c87-b2a6-2fa0c971d0f6",
    title: "Django Unchained",
    hasHappyEnding: null,
  },
  {
    guid: "33f198c9-003b-4db1-a336-e34975ec7936",
    title: "Raiders of the Lost Ark",
    hasHappyEnding: null,
  },
  {
    guid: "915be494-9bd9-4e7d-a044-9d7f58817e4c",
    title: "WALL·E",
    hasHappyEnding: true, // WALL·E and EVE return to Earth
  },
  {
    guid: "5ecbbb06-d12c-498c-9218-5192515b2659",
    title: "The Lives of Others",
    hasHappyEnding: null,
  },
  {
    guid: "1b0d57e5-0f55-446b-959b-4cf59e5b0c5b",
    title: "Sunset Blvd.",
    hasHappyEnding: null,
  },
  {
    guid: "766cd44b-34c4-4483-9d3a-04aa82824200",
    title: "Paths of Glory",
    hasHappyEnding: null,
  },
  {
    guid: "6dc12df6-3ac6-4b22-8efd-9895ec83957d",
    title: "Avengers: Infinity War",
    hasHappyEnding: false, // Snap!
  },
  {
    guid: "15c53b6d-09fa-4791-88da-5e22817fc23d",
    title: "The Shining",
    hasHappyEnding: null,
  },
  {
    guid: "5aabe62f-d096-469b-8efd-6f50d2fc3f1b",
    title: "The Great Dictator",
    hasHappyEnding: null,
  },
  {
    guid: "e9289c89-d5dc-4245-b418-ea761e404caa",
    title: "Witness for the Prosecution",
    hasHappyEnding: null,
  },
  {
    guid: "29c5e4bc-254d-468e-b611-f3db6f0fb71a",
    title: "Spider-Man: Into the Spider-Verse",
    hasHappyEnding: true, // Miles saves the day
  },
  {
    guid: "26060c12-4c63-4ade-94a6-c278001c60b6",
    title: "Aliens",
    hasHappyEnding: null,
  },
  {
    guid: "fbbd5666-9fc8-4ad5-8765-1ac166fb0314",
    title: "Inglourious Basterds",
    hasHappyEnding: null,
  },
  {
    guid: "c554c468-058c-4a2c-897a-c3c6150b84f9",
    title: "The Dark Knight Rises",
    hasHappyEnding: true, // Batman fakes his death
  },
  {
    guid: "76d9d959-0993-46b4-9049-c6750665dc0a",
    title: "American Beauty",
    hasHappyEnding: null,
  },
  {
    guid: "101470d6-9d0d-4afd-b6a0-7ed70045807d",
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    hasHappyEnding: null,
  },
  {
    guid: "a2b9397c-daa2-4bdc-af96-b85725b9f89d",
    title: "Oldboy",
    hasHappyEnding: null,
  },
  {
    guid: "7d3ac575-4867-4086-97b3-e26b43540be6",
    title: "Coco",
    hasHappyEnding: true, // Miguel returns to the Land of the Living
  },
  {
    guid: "f9a187d4-7f92-4e24-a434-afff33bb0025",
    title: "Amadeus",
    hasHappyEnding: null,
  },
  {
    guid: "a127a18b-2e8c-44f0-b097-bd542ac9c462",
    title: "Toy Story",
    hasHappyEnding: null, // Woody and Buzz return to Andy
  },
  {
    guid: "961be995-e180-457f-8e42-4f49400348bc",
    title: "Das Boot",
    hasHappyEnding: null,
  },
  {
    guid: "51ed2a9e-96c7-46bd-a793-adef876601c5",
    title: "Braveheart",
    hasHappyEnding: null,
  },
  {
    guid: "28375597-284b-4d38-a9f1-efa7756b51db",
    title: "Avengers: Endgame",
    hasHappyEnding: false, // Tony Stark dies
  },
  {
    guid: "e6944e37-8916-439b-85a0-6f3180d4144c",
    title: "Joker",
    hasHappyEnding: false, // Arthur Fleck becomes the Joker
  },
  {
    guid: "69a98330-2ee5-4f0d-ae29-955375009095",
    title: "Princess Mononoke",
    hasHappyEnding: true, // Ashitaka and San save the forest
  },
  {
    guid: "ecb8c60b-eee3-4713-87a5-7698e76ad134",
    title: "Good Will Hunting",
    hasHappyEnding: null,
  },
  {
    guid: "d0fd9872-ac11-4cf0-a85b-ece9275c7d13",
    title: "Once Upon a Time in America",
    hasHappyEnding: null,
  },
  {
    guid: "1130809a-cf86-4643-a385-de692d98d423",
    title: "Your Name.",
    hasHappyEnding: true, // Taki and Mitsuha meet
  },
  {
    guid: "0853c251-2f4a-4361-a102-8c26e299a709",
    title: "3 Idiots",
    hasHappyEnding: null,
  },
  {
    guid: "a511f092-4a8f-449c-99a8-92ef884a4126",
    title: "High and Low",
    hasHappyEnding: null,
  },
  {
    guid: "09938c09-46f1-43b6-9bb8-0a2c7646855b",
    title: "Singin' in the Rain",
    hasHappyEnding: null,
  },
  {
    guid: "815e01c2-e7ed-4f76-ab4c-c2be4080344b",
    title: "Capernaum",
    hasHappyEnding: null,
  },
  {
    guid: "62f644c9-23d7-4f80-be75-95a1e73fd1b3",
    title: "Requiem for a Dream",
    hasHappyEnding: null,
  },
  {
    guid: "eb980b91-fa4c-418a-8407-b61e3aba6e2e",
    title: "Toy Story 3",
    hasHappyEnding: true, // Andy gives his toys to Bonnie
  },
  {
    guid: "d905e372-67e6-40cb-b140-15beed118fe7",
    title: "Come and See",
    hasHappyEnding: null,
  },
  {
    guid: "19ba4ae4-f211-4aa6-9f9c-5d21c0df5093",
    title: "Star Wars: Episode VI - Return of the Jedi",
    hasHappyEnding: true, // Luke "defeats" the Emperor
  },
  {
    guid: "986172b1-4475-40f7-89db-c7f055d362ca",
    title: "Eternal Sunshine of the Spotless Mind",
    hasHappyEnding: null,
  },
  {
    guid: "cbccf2e0-60c1-4594-9875-4fdc6926c2e9",
    title: "2001: A Space Odyssey",
    hasHappyEnding: null,
  },
  {
    guid: "d2beaaac-c474-474a-93a6-ee937a85c43b",
    title: "The Hunt",
    hasHappyEnding: false, // Ending is ambiguous
  },
  {
    guid: "7e078778-a56e-4be7-ac15-433631c91506",
    title: "Reservoir Dogs",
    hasHappyEnding: null,
  },
  {
    guid: "3fe17aa5-b3f5-4e17-85fe-e02b017f9987",
    title: "Ikiru",
    hasHappyEnding: null,
  },
  {
    guid: "9dd4aeae-c110-4d64-94ce-1334df89fe81",
    title: "Lawrence of Arabia",
    hasHappyEnding: null,
  },
  {
    guid: "1bb03955-f371-4f2e-8242-57d811827e9c",
    title: "Citizen Kane",
    hasHappyEnding: null,
  },
  {
    guid: "d87f8f36-ccda-44a8-a03f-99a61c43ab44",
    title: "M",
    hasHappyEnding: null,
  },
  {
    guid: "136c97b9-63f1-4505-bbf7-490a8b7b708e",
    title: "The Apartment",
    hasHappyEnding: null,
  },
  {
    guid: "bb41e6c2-a2e0-4631-b3b0-44fc55757e74",
    title: "North by Northwest",
    hasHappyEnding: null,
  },
  {
    guid: "31ca59c1-1844-4175-8f96-1749ee779e4e",
    title: "Vertigo",
    hasHappyEnding: null,
  },
  {
    guid: "567b15ba-1bc8-40a9-8e29-dfcc068a56e7",
    title: "Double Indemnity",
    hasHappyEnding: null,
  },
  {
    guid: "0f31e3ea-abfc-435d-9ced-00aec47a589e",
    title: "Amélie",
    hasHappyEnding: null,
  },
  {
    guid: "a0ee4254-d84e-4fa0-afe0-124c4059083a",
    title: "Scarface",
    hasHappyEnding: null,
  },
  {
    guid: "213cec50-d45e-45d6-bceb-03b1a106e076",
    title: "Full Metal Jacket",
    hasHappyEnding: null,
  },
  {
    guid: "ba0666b4-cabc-447e-91aa-1232161f8a4a",
    title: "A Clockwork Orange",
    hasHappyEnding: null,
  },
  {
    guid: "448eb6dc-72be-4c8a-805f-605402100d92",
    title: "Incendies",
    hasHappyEnding: null,
  },
  {
    guid: "ebcc27d8-fe16-4eaf-a34f-3742c9f9cf28",
    title: "Heat",
    hasHappyEnding: null,
  },
  {
    guid: "df93014c-bbdf-4cc2-879f-e150913c6f1d",
    title: "Up",
    hasHappyEnding: true, // Carl and Russell return home
  },
  {
    guid: "9b661a2f-c995-4117-895f-5bcc9a7976e5",
    title: "Hamilton",
    hasHappyEnding: null,
  },
  {
    guid: "ba4ceac0-7a02-4fbf-a3b1-cbdb58d0ec40",
    title: "To Kill a Mockingbird",
    hasHappyEnding: null,
  },
  {
    guid: "027d04a7-e535-4a68-8c24-c53588fd7d76",
    title: "The Sting",
    hasHappyEnding: null,
  },
  {
    guid: "22fc4835-bdc4-4670-a936-acc262e70725",
    title: "A Separation",
    hasHappyEnding: null,
  },
  {
    guid: "81906985-fd9b-410e-b2e1-d5ae722fa84a",
    title: "Indiana Jones and the Last Crusade",
    hasHappyEnding: true, // Indy finds the Holy Grail
  },
  {
    guid: "146a0230-2376-44c7-9e47-2fcb732a4f0f",
    title: "Metropolis",
    hasHappyEnding: null,
  },
  {
    guid: "e191be44-eb4d-4dd3-9cdc-5256be180148",
    title: "Die Hard",
    hasHappyEnding: null,
  },
  {
    guid: "8dcbeb47-9227-48c5-afac-1af084d6e1c3",
    title: "Like Stars on Earth",
    hasHappyEnding: null,
  },
  {
    guid: "d9429540-cd3e-4c45-b666-79358c28d6fc",
    title: "Snatch",
    hasHappyEnding: null,
  },
  {
    guid: "c21792ee-3bc9-4eeb-baf7-bee752b0965a",
    title: "Bicycle Thieves",
    hasHappyEnding: null,
  },
  {
    guid: "7b694a10-fb63-49bc-b5df-a043f5a5317f",
    title: "L.A. Confidential",
    hasHappyEnding: null,
  },
  {
    guid: "d29b77fe-b5a3-4a5b-9444-ae375f90b314",
    title: "Taxi Driver",
    hasHappyEnding: null,
  },
  {
    guid: "8bacc8fe-3505-4af3-91fc-3516da14a9d5",
    title: "1917",
    hasHappyEnding: true, // Schofield delivers the message
  },
  {
    guid: "daeceecf-2db8-49b2-b2bc-b8f62dc41aa6",
    title: "Downfall",
    hasHappyEnding: null,
  },
  {
    guid: "2be11761-312e-4644-9613-18eb70754480",
    title: "Dangal",
    hasHappyEnding: null,
  },
  {
    guid: "ce366e20-06cf-428d-add1-cc971d8af4c2",
    title: "For a Few Dollars More",
    hasHappyEnding: null,
  },
  {
    guid: "160af068-584f-4033-bbe6-81c995a77965",
    title: "Top Gun: Maverick",
    hasHappyEnding: true, // Tom Cruise is bad-ass
  },
  {
    guid: "eb71abe3-3b3d-46b1-a3db-8fa609b776c9",
    title: "Batman Begins",
    hasHappyEnding: null,
  },
  {
    guid: "c4e5c182-0951-4c79-af90-92ac0d1bb8b9",
    title: "Some Like It Hot",
    hasHappyEnding: null,
  },
  {
    guid: "baf536d4-e721-43db-8863-1a17b1f20da7",
    title: "The Kid",
    hasHappyEnding: null,
  },
  {
    guid: "31bf6878-7b87-4e86-9128-d7086b56f572",
    title: "The Wolf of Wall Street",
    hasHappyEnding: true, // Jordan sells his pen
  },
  {
    guid: "b23e4839-537e-472b-8a7d-c26b10473f12",
    title: "The Father",
    hasHappyEnding: false, // Can't remember
  },
  {
    guid: "ac3f6ce3-9a9e-45ef-ba28-550b8129dfc6",
    title: "Green Book",
    hasHappyEnding: true, // They become friends at the end
  },
  {
    guid: "7a546735-8813-48da-a4e0-23c70ec9296f",
    title: "All About Eve",
    hasHappyEnding: null,
  },
  {
    guid: "e935b6d8-3e1d-4668-958a-1ee1ae82bd97",
    title: "Judgment at Nuremberg",
    hasHappyEnding: null,
  },
  {
    guid: "a2787793-96aa-4af4-a9a9-4b48aa471e0d",
    title: "The Truman Show",
    hasHappyEnding: true, // Truman leaves the show
  },
  {
    guid: "9a84cbb8-5641-4352-9c8b-e26904a114b8",
    title: "There Will Be Blood",
    hasHappyEnding: null,
  },
  {
    guid: "24a58ec8-e881-4f67-8ca8-c0ff81cf62f0",
    title: "Casino",
    hasHappyEnding: null,
  },
  {
    guid: "3b580932-d3d5-4be3-b6fa-709ff6f6126c",
    title: "Ran",
    hasHappyEnding: null,
  },
  {
    guid: "bd1f6bd1-f214-4d86-94fa-1bdb9ef81f67",
    title: "Shutter Island",
    hasHappyEnding: false, // DiCaprio is crazy
  },
  {
    guid: "65d63ac1-19e4-47d4-8b4a-6221a8ee9b46",
    title: "Pan's Labyrinth",
    hasHappyEnding: false, // Ofelia dies
  },
  {
    guid: "93fcbc81-8c0b-4b98-a3f3-8547c928d0c8",
    title: "The Sixth Sense",
    hasHappyEnding: null,
  },
  {
    guid: "d48be4dc-1635-4a0d-b296-4630f320da5b",
    title: "Unforgiven",
    hasHappyEnding: null,
  },
  {
    guid: "36216d00-b33f-41fe-8c85-cca8f7a0729a",
    title: "Jurassic Park",
    hasHappyEnding: true, // Dinosaurs are cool
  },
  {
    guid: "1617f09a-23a3-4157-9848-dbca11aefe3e",
    title: "A Beautiful Mind",
    hasHappyEnding: null,
  },
  {
    guid: "3a2eecc8-d87b-493c-8c4c-e7b3dba4a2f7",
    title: "The Treasure of the Sierra Madre",
    hasHappyEnding: null,
  },
  {
    guid: "09d1d7b5-19e5-4e95-bc34-5eadcc24c6eb",
    title: "Yojimbo",
    hasHappyEnding: null,
  },
];
