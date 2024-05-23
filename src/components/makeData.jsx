// src/components/makeData.js

const fakeData = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",

    avatar:
      "https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=1",
  },
  // {
  //   id: "2",
  //   firstName: "Jane",
  //   lastName: "Smith",
  //   email: "jane.smith@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941593/pexels-photo-941593.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=2",
  // },
  // {
  //   id: "3",
  //   firstName: "Alice",
  //   lastName: "Johnson",
  //   email: "alice.johnson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941594/pexels-photo-941594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=3",
  // },
  // {
  //   id: "4",
  //   firstName: "Bob",
  //   lastName: "Brown",
  //   email: "bob.brown@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941595/pexels-photo-941595.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=4",
  // },
  // {
  //   id: "5",
  //   firstName: "Charlie",
  //   lastName: "Davis",
  //   email: "charlie.davis@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941596/pexels-photo-941596.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=5",
  // },
  // {
  //   id: "6",
  //   firstName: "David",
  //   lastName: "Wilson",
  //   email: "david.wilson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941597/pexels-photo-941597.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=6",
  // },
  // {
  //   id: "7",
  //   firstName: "Ella",
  //   lastName: "Miller",
  //   email: "ella.miller@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941598/pexels-photo-941598.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=7",
  // },
  // {
  //   id: "8",
  //   firstName: "Fiona",
  //   lastName: "Moore",
  //   email: "fiona.moore@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941599/pexels-photo-941599.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=8",
  // },
  // {
  //   id: "9",
  //   firstName: "George",
  //   lastName: "Taylor",
  //   email: "george.taylor@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941600/pexels-photo-941600.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=9",
  // },
  // {
  //   id: "10",
  //   firstName: "Hannah",
  //   lastName: "Anderson",
  //   email: "hannah.anderson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941601/pexels-photo-941601.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=10",
  // },
  // {
  //   id: "11",
  //   firstName: "Ian",
  //   lastName: "Thomas",
  //   email: "ian.thomas@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941602/pexels-photo-941602.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=11",
  // },
  // {
  //   id: "12",
  //   firstName: "Jill",
  //   lastName: "Jackson",
  //   email: "jill.jackson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941603/pexels-photo-941603.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=12",
  // },
  // {
  //   id: "13",
  //   firstName: "Kevin",
  //   lastName: "White",
  //   email: "kevin.white@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941604/pexels-photo-941604.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=13",
  // },
  // {
  //   id: "14",
  //   firstName: "Lily",
  //   lastName: "Harris",
  //   email: "lily.harris@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941605/pexels-photo-941605.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=14",
  // },
  // {
  //   id: "15",
  //   firstName: "Mike",
  //   lastName: "Martin",
  //   email: "mike.martin@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941606/pexels-photo-941606.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=15",
  // },
  // {
  //   id: "16",
  //   firstName: "Nina",
  //   lastName: "Thompson",
  //   email: "nina.thompson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941607/pexels-photo-941607.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=16",
  // },
  // {
  //   id: "17",
  //   firstName: "Oscar",
  //   lastName: "Garcia",
  //   email: "oscar.garcia@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941608/pexels-photo-941608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=17",
  // },
  // {
  //   id: "18",
  //   firstName: "Pam",
  //   lastName: "Martinez",
  //   email: "pam.martinez@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941609/pexels-photo-941609.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=18",
  // },
  // {
  //   id: "19",
  //   firstName: "Quinn",
  //   lastName: "Robinson",
  //   email: "quinn.robinson@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941610/pexels-photo-941610.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=19",
  // },
  // {
  //   id: "20",
  //   firstName: "Rachel",
  //   lastName: "Clark",
  //   email: "rachel.clark@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941611/pexels-photo-941611.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=20",
  // },
  // {
  //   id: "21",
  //   firstName: "Sam",
  //   lastName: "Lewis",
  //   email: "sam.lewis@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941612/pexels-photo-941612.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=21",
  // },
  // {
  //   id: "22",
  //   firstName: "Tina",
  //   lastName: "Walker",
  //   email: "tina.walker@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941613/pexels-photo-941613.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=22",
  // },
  // {
  //   id: "23",
  //   firstName: "Uma",
  //   lastName: "Hall",
  //   email: "uma.hall@example.com",

  //   avatar:
  //     "https://images.pexels.com/photos/941614/pexels-photo-941614.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500&id=23",
  // },
];

export default fakeData;
