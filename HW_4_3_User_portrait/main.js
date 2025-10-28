let userAge = prompt("What is your age?");
let userLocation = prompt("What city do you live in?");
let userSport = prompt("What is your favorite sport?");

let userArr = [
    {prompt: userAge, text: 'age'},
    {prompt: userLocation , text: 'location'},
    {prompt: userSport , text: 'sport'},
    ]

const capitals = [
    { country: "Afghanistan", capital: "Kabul" },
    { country: "Albania", capital: "Tirana" },
    { country: "Algeria", capital: "Algiers" },
    { country: "Andorra", capital: "Andorra la Vella" },
    { country: "Angola", capital: "Luanda" },
    { country: "Antigua and Barbuda", capital: "Saint John's" },
    { country: "Argentina", capital: "Buenos Aires" },
    { country: "Armenia", capital: "Yerevan" },
    { country: "Australia", capital: "Canberra" },
    { country: "Austria", capital: "Vienna" },
    { country: "Azerbaijan", capital: "Baku" },
    { country: "Bahamas", capital: "Nassau" },
    { country: "Bahrain", capital: "Manama" },
    { country: "Bangladesh", capital: "Dhaka" },
    { country: "Barbados", capital: "Bridgetown" },
    { country: "Belarus", capital: "Minsk" },
    { country: "Belgium", capital: "Brussels" },
    { country: "Belize", capital: "Belmopan" },
    { country: "Benin", capital: "Porto-Novo" },
    { country: "Bhutan", capital: "Thimphu" },
    { country: "Bolivia", capital: "Sucre" },
    { country: "Bosnia and Herzegovina", capital: "Sarajevo" },
    { country: "Botswana", capital: "Gaborone" },
    { country: "Brazil", capital: "Brasilia" },
    { country: "Brunei", capital: "Bandar Seri Begawan" },
    { country: "Bulgaria", capital: "Sofia" },
    { country: "Burkina Faso", capital: "Ouagadougou" },
    { country: "Burundi", capital: "Gitega" },
    { country: "Cambodia", capital: "Phnom Penh" },
    { country: "Cameroon", capital: "Yaounde" },
    { country: "Canada", capital: "Ottawa" },
    { country: "Cape Verde", capital: "Praia" },
    { country: "Central African Republic", capital: "Bangui" },
    { country: "Chad", capital: "N'Djamena" },
    { country: "Chile", capital: "Santiago" },
    { country: "China", capital: "Beijing" },
    { country: "Colombia", capital: "Bogotá" },
    { country: "Comoros", capital: "Moroni" },
    { country: "Congo", capital: "Brazzaville" },
    { country: "Costa Rica", capital: "San José" },
    { country: "Croatia", capital: "Zagreb" },
    { country: "Cuba", capital: "Havana" },
    { country: "Cyprus", capital: "Nicosia" },
    { country: "Czech Republic", capital: "Prague" },
    { country: "Denmark", capital: "Copenhagen" },
    { country: "Djibouti", capital: "Djibouti" },
    { country: "Dominica", capital: "Roseau" },
    { country: "Dominican Republic", capital: "Santo Domingo" },
    { country: "Ecuador", capital: "Quito" },
    { country: "Egypt", capital: "Cairo" },
    { country: "El Salvador", capital: "San Salvador" },
    { country: "Estonia", capital: "Tallinn" },
    { country: "Ethiopia", capital: "Addis Ababa" },
    { country: "Fiji", capital: "Suva" },
    { country: "Finland", capital: "Helsinki" },
    { country: "France", capital: "Paris" },
    { country: "Gabon", capital: "Libreville" },
    { country: "Gambia", capital: "Banjul" },
    { country: "Georgia", capital: "Tbilisi" },
    { country: "Germany", capital: "Berlin" },
    { country: "Ghana", capital: "Accra" },
    { country: "Greece", capital: "Athens" },
    { country: "Greenland", capital: "Nuuk" },
    { country: "Grenada", capital: "St. George's" },
    { country: "Guatemala", capital: "Guatemala City" },
    { country: "Guinea", capital: "Conakry" },
    { country: "Guyana", capital: "Georgetown" },
    { country: "Haiti", capital: "Port-au-Prince" },
    { country: "Honduras", capital: "Tegucigalpa" },
    { country: "Hungary", capital: "Budapest" },
    { country: "Iceland", capital: "Reykjavik" },
    { country: "India", capital: "New Delhi" },
    { country: "Indonesia", capital: "Jakarta" },
    { country: "Iran", capital: "Tehran" },
    { country: "Iraq", capital: "Baghdad" },
    { country: "Ireland", capital: "Dublin" },
    { country: "Israel", capital: "Jerusalem" },
    { country: "Italy", capital: "Rome" },
    { country: "Jamaica", capital: "Kingston" },
    { country: "Japan", capital: "Tokyo" },
    { country: "Jordan", capital: "Amman" },
    { country: "Kazakhstan", capital: "Astana" },
    { country: "Kenya", capital: "Nairobi" },
    { country: "Kuwait", capital: "Kuwait City" },
    { country: "Kyrgyzstan", capital: "Bishkek" },
    { country: "Laos", capital: "Vientiane" },
    { country: "Latvia", capital: "Riga" },
    { country: "Lebanon", capital: "Beirut" },
    { country: "Lesotho", capital: "Maseru" },
    { country: "Liberia", capital: "Monrovia" },
    { country: "Libya", capital: "Tripoli" },
    { country: "Liechtenstein", capital: "Vaduz" },
    { country: "Lithuania", capital: "Vilnius" },
    { country: "Luxembourg", capital: "Luxembourg" },
    { country: "Madagascar", capital: "Antananarivo" },
    { country: "Malawi", capital: "Lilongwe" },
    { country: "Malaysia", capital: "Kuala Lumpur" },
    { country: "Maldives", capital: "Male" },
    { country: "Mali", capital: "Bamako" },
    { country: "Malta", capital: "Valletta" },
    { country: "Mexico", capital: "Mexico City" },
    { country: "Moldova", capital: "Chisinau" },
    { country: "Monaco", capital: "Monaco" },
    { country: "Mongolia", capital: "Ulaanbaatar" },
    { country: "Montenegro", capital: "Podgorica" },
    { country: "Morocco", capital: "Rabat" },
    { country: "Mozambique", capital: "Maputo" },
    { country: "Namibia", capital: "Windhoek" },
    { country: "Nepal", capital: "Kathmandu" },
    { country: "Netherlands", capital: "Amsterdam" },
    { country: "New Zealand", capital: "Wellington" },
    { country: "Nicaragua", capital: "Managua" },
    { country: "Niger", capital: "Niamey" },
    { country: "Nigeria", capital: "Abuja" },
    { country: "North Korea", capital: "Pyongyang" },
    { country: "North Macedonia", capital: "Skopje" },
    { country: "Norway", capital: "Oslo" },
    { country: "Oman", capital: "Muscat" },
    { country: "Pakistan", capital: "Islamabad" },
    { country: "Palestine", capital: "Ramallah" },
    { country: "Panama", capital: "Panama City" },
    { country: "Paraguay", capital: "Asunción" },
    { country: "Peru", capital: "Lima" },
    { country: "Philippines", capital: "Manila" },
    { country: "Poland", capital: "Warsaw" },
    { country: "Portugal", capital: "Lisbon" },
    { country: "Qatar", capital: "Doha" },
    { country: "Romania", capital: "Bucharest" },
    { country: "Russia", capital: "Moscow" },
    { country: "Rwanda", capital: "Kigali" },
    { country: "San Marino", capital: "San Marino" },
    { country: "Saudi Arabia", capital: "Riyadh" },
    { country: "Senegal", capital: "Dakar" },
    { country: "Serbia", capital: "Belgrade" },
    { country: "Singapore", capital: "Singapore" },
    { country: "Slovakia", capital: "Bratislava" },
    { country: "Slovenia", capital: "Ljubljana" },
    { country: "Somalia", capital: "Mogadishu" },
    { country: "South Africa", capital: "Pretoria" },
    { country: "South Korea", capital: "Seoul" },
    { country: "Spain", capital: "Madrid" },
    { country: "Sri Lanka", capital: "Colombo" },
    { country: "Sudan", capital: "Khartoum" },
    { country: "Sweden", capital: "Stockholm" },
    { country: "Switzerland", capital: "Bern" },
    { country: "Syria", capital: "Damascus" },
    { country: "Taiwan", capital: "Taipei" },
    { country: "Tajikistan", capital: "Dushanbe" },
    { country: "Tanzania", capital: "Dodoma" },
    { country: "Thailand", capital: "Bangkok" },
    { country: "Togo", capital: "Lomé" },
    { country: "Trinidad and Tobago", capital: "Port of Spain" },
    { country: "Tunisia", capital: "Tunis" },
    { country: "Turkey", capital: "Ankara" },
    { country: "Turkmenistan", capital: "Ashgabat" },
    { country: "Uganda", capital: "Kampala" },
    { country: "Ukraine", capital: "Kyiv" },
    { country: "United Arab Emirates", capital: "Abu Dhabi" },
    { country: "United Kingdom", capital: "London" },
    { country: "United States", capital: "Washington, D.C." },
    { country: "Uruguay", capital: "Montevideo" },
    { country: "Uzbekistan", capital: "Tashkent" },
    { country: "Venezuela", capital: "Caracas" },
    { country: "Vietnam", capital: "Hanoi" },
    { country: "Yemen", capital: "Sana'a" },
    { country: "Zambia", capital: "Lusaka" },
    { country: "Zimbabwe", capital: "Harare" }
];

const sportTypes = [
    { sportName: "Box", representative: "Oleksandr Usyk" },
    { sportName: "Football", representative: "Cristiano Ronaldo" },
    { sportName: "Cybersport", representative: "Ilya Yatoro Mulyarchuk" },
];

let isCapital = false;
let isMatch = false;

let arrCountry = null;
let arrSportType = null;

capitals.forEach((element) => {
    if (element.capital === userLocation) {
        isCapital = true;
        arrCountry = element.country;
    }
})

sportTypes.forEach((element) => {
    if (element.sportName === userSport) {
        isMatch = true;
        arrSportType = element.representative;
    }
})

userArr.forEach((text) => {
    if(text.prompt === null){
        alert(`It's a pity that you didn't want to enter your ${text.text}.`)
    }
})

alert(`You are ${userAge} years old.
${isCapital ? `You live in the capital of ${arrCountry}` : `You live in the city of ${userLocation}`}
${isMatch ? `Cool! Do you want to be like ${arrSportType}?` : ``}`)