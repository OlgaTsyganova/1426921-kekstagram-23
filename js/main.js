/* eslint-disable no-unexpected-multiline */
/* eslint-disable no-shadow */
/* eslint-disable id-length */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable prefer-template */
function checkStringMaxLength (string, maxLength) {
  return string.length <= maxLength;
}

checkStringMaxLength('I am going to eat', 140);

const PHOTO_COUNT = 25;

function getRandom(min,max) {
  min = min >= 0 ? min : 0;
  max = max === min ? min++ : max;
  return Math.floor(Math.random() * (max - min + 1) + min);
}


function getUniqueId(min, max, checkArray) {
  let id = getRandom(min, max);
  if(checkArray.includes(id)) {
    id = getUniqueId(min, max, checkArray);
  }
  return id;
}

const names = ['John', 'Vasya', 'Petya', 'Mario', 'Huanita', 'Lucinda'];
const message = ['Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];

const description = ['Best day ever',
  'I hate my life',
  'You should have come earlier',
  'I am trying to find a way to be respectful',
  'that is what she said'];
const pictureDescription = [];

const createComments = () => {
  const comments = [];
  for (let i = 0; i < getRandom(1,3); i++) {
    comments.push
    ({
      id: getUniqueId(1, 3, comments.map((i) => i.id)),
      avatar: 'img/avatar-${getRandom(1,6)}.svg',
      message: message[getRandom(0, message.length)],
      name: names[getRandom(0,5)],
    });
  }
  return comments;
};


const createObject = () => {
  let i = 0;
  while (i < PHOTO_COUNT) {
    i++;
    pictureDescription.push ({
      id: getUniqueId(1, PHOTO_COUNT, pictureDescription.map((i) => i.id)),
      url: 'photos' + i + '.jpg',
      description: description[getRandom(0, 4)],
      likes: getRandom(15, 200),
      comments: createComments(),
    });
  }
};

createObject();
pictureDescription;


/*
В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите
необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект
массива — описание фотографии, опубликованной пользователем.

Структура каждого объекта должна быть следующей:

id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.

url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25.
Адреса картинок не должны повторяться.

description, строка — описание фотографии. Описание придумайте самостоятельно.

likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.

comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии.
Количество комментариев к каждой фотографии вы определяете на своё усмотрение.
Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:

{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два
случайных предложения из представленных ниже:

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами.
Подставляйте случайное имя в поле name.
*/
