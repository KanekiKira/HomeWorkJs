// let dayOfWeek = prompt('Введите число от 1 до 7:');

// switch (dayOfWeek) {
//   case '1':
//     console.log('Manday');
//     break;
//   case '2':
//     console.log('Tuesday');
//     break;
//   case '3':
//     console.log('Wednesday');
//     break;
//   case '4':
//     console.log('Thursday');
//     break;
//   case '5':
//     console.log('Frideay');
//     break;
//   case '6':
//     console.log('Saturday');
//     break;
//   case '7':
//     console.log('Sunday');
//     break;
//   default:
//     console.lgo('error:)');
// }

// let listOfRutine = [
//   { id: 1, todo: 'Принять душ', done: false },
//   { id: 2, todo: 'Завтрак', done: false },
//   { id: 3, todo: 'Пойти на работу', done: false },
//   { id: 4, todo: 'Приготовить ужин', done: false },
//   { id: 5, todo: 'Лечь спать', done: false },
// ];

// function markTaskAsDone(id) {
//   for (let i = 0; i < listOfRutine.length; i++) {
//     if (listOfRutine[i].id === id) {
//       listOfRutine[i].done = true;
//       console.log(`Задача с id ${id} выполнена.`);
//       return;
//     }
//   }
//   console.log(`Задача с id ${id} не найдена.`);
// }

// markTaskAsDone(3);
// console.log(listOfRutine);

// function addRutine(todo) {
//   const id = listOfRutine.length + 1;
//   const newTask = { id: id, todo: todo, done: false };
//   listOfRutine.push(newTask);
//   console.log(`Добавлена новая задача: ${todo} id: ${id}`);
// }

// addRutine('Позавтракть');
// markTaskAsDone(6);
// console.log(listOfRutine);

// console.log('\n\n\n\n');

// 3 Задача: запросить у пользователя информацию о том, какой телефон он бы хотел приобрести, затем предложить ему варианты расцветки телефона, после того как пользователь введет цвет, озвучить цену на товар и спросить будет ли он покупать, если ответ положительный то количество товара нужно уменьшить на 1, учесть, что товара может не быть на складе, в этом случае вывести сообщение типа: Извините, в данный момент товара нет на складе

// let phones = [
//   {title: 'Samsung', price: 1000, count: 3, color: ['black', 'white', 'blue']},
//   {title: 'Xiaomi', price: 600, count: 0, color: []},
//   {title: 'LG', price: 450, count: 5, color: ['black', 'white']},
//   {title: 'Sony', price: 700, count: 4, color: ['white', 'yellow', 'gray']}
// ];

// function getPhoneChoice() {
//   let userChoice = prompt('Какой телефон вы бы хотели приобрести?');
//   let matchingPhones = phones.filter(phone => phone.title.toLowerCase() === userChoice.toLowerCase());

//   if (matchingPhones.length === 0) {
//     console.log('Извините, указанный телефон не найден.');
//     return;
//   }

//   let selectedPhone = matchingPhones[0];

//   if (selectedPhone.count === 0) {
//     console.log('Извините, выбранный телефон временно отсутствует на складе.');
//     return;
//   }

//   let availableColors = selectedPhone.color;
//   if (availableColors.length === 0) {
//     console.log(`Доступна только одна расцветка для ${selectedPhone.title}`);
//   } else {
//     let userColorChoice = prompt(`Доступные расцветки для ${selectedPhone.title}: ${availableColors.join(', ')}\nВведите желаемый цвет:`);
//     if (!availableColors.includes(userColorChoice)) {
//       console.log('Извините, выбранный цвет недоступен.');
//       return;
//     }
//   }

//   alert(`Цена телефона ${selectedPhone.price}`);

//   let choiceOfUser = prompt('Хотите ли приобрести товар \n Да,Нет').toLowerCase();
//   if(choiceOfUser === 'да'){
//     if(selectedPhone.count>0){
//       selectedPhone.count--;
//       alert('Спасибо за покупку');
//     }else{
//       console.log('Извините, товара нет на складе.');
//     }
//   }

// }
// getPhoneChoice();

//Сортировка по цене. Дан массив:
// [
// let phonesForSell = [
//   { title: 'Samsung S20', price: 1000 },
//   { title: 'Samsung A31', price: 200 },
//   { title: 'Samsung S10', price: 600 },
//   { title: 'Xiaomi Mi 10', price: 400 },
//   { title: 'Xiaomi Redmi 8', price: 300 },
//   { title: 'iPhone 13', price: 1100 },
//   { title: 'iPhone 11', price: 800 },
// ];


// function showPhones() {
//   let userChoice = prompt('Enter prices from and to');
//   let numbers = userChoice.split(' ').map(Number);

//   let arrayOfphones = [];
//   for (let i = 0; i < phonesForSell.length; i++) {
//     if (
//       phonesForSell[i].price >= numbers[0] &&
//       phonesForSell[i].price <= numbers[1]
//     ) {
//       arrayOfphones.push(phonesForSell[i]);
//     }
//   }
//   for (let i = 0; i < arrayOfphones.length; i++) {
//   console.log(`${arrayOfphones[i].title} ${arrayOfphones[i].price} $`)
//   }
// }
// console.log(showPhones());


// ],
// задача: запросить у пользователя диапазон цен от и до(необходимо получить информацию за один запрос) затем найти подходящие товары и вывести пользователю в формате: Название товара - цена

//5. Создать игру. Задача: создать программу, которая запрашивает у пользователя данные для 2х героев(сила(макс 100), ловкость(макс 100), стихия(огонь, земля, вода, воздух)), также каждому герою присваивается имя по умолчанию(герой 1, герой 2)каждая стихия повышает силу героя на определенное количество пунктов(огонь +20 к силе, воздух +15 к силе, вода +10 к силе, земля +5 к силе)устраивать между ними бой и выявлять победителя по следующим характеристикам(победил тот, у кого больше силы, если силы равны, побеждает тот, у кого больше ловкости, если все данные равны, то ничья),
// let gladiators = [
//   {name:'firstHero',power: 0,agility:0,elementalPower:''},
//   {name:'SecondHero',power: 0,agility:0,elementalPower:''}
// ]
// function arena(){
// for(let i=1 ; i <= 2; i++){
//   let firstHeroPower = +prompt(`Enter the power of ${i} hero max(100)`);
//   let firstHeroAgility = +prompt(`Enter the agility of ${i} hero  max(100)`);
//   let firstHeroELementalPower = prompt(`Enter elemental power of ${i} hero (fire,ground,water,air)`).toLocaleLowerCase();

//   gladiators[i-1].power = firstHeroPower;
//   gladiators[i-1].agility = firstHeroAgility;
//   gladiators[i-1].elementalPower = firstHeroELementalPower;
// }

// for(let i = 0; i < 2; i++){
//   let elementalPower = gladiators[i].elementalPower;
//   switch(elementalPower){
//     case 'fire':
//       gladiators[i].power += 20;
//       break;
//     case 'ground':
//       gladiators[i].power += 5;
//       break;
//     case 'water':
//       gladiators[i].power += 10;
//       break;
//     case 'air':
//       gladiators[i].power += 15;
//       break;
//     default:
//       console.log('No matches')
//   }

// }
// let choseWinner = gladiators[0];

//   if(gladiators[1].power > choseWinner.power){
//     choseWinner = gladiators[1];
//     console.log(`Winner is ${choseWinner.name}`);
//   }
//   else if(gladiators[1].power === choseWinner.power){

//     if(gladiators[1].agility > choseWinner.agility){
//       choseWinner = gladiators[1];
//     }
//     else if(gladiators[1].agility === choseWinner.agility){
//       console.log('We dont have winner DRAW');
//   }
//   else{
//     console.log(`Winner is ${choseWinner.name}`);
//   }
// }else{
//   console.log(`Winner is ${choseWinner.name}`);
// }

// }

// arena();
