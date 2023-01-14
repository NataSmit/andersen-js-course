/**
 * Просто преобразовать функцию task5Old под современный код
 *
 * Пример вызова
 * console.log(task5Old(["test", 42], { name: "foo", val: 7 })); -> ['test', 42, 'foo', 7]
 */

function task5Old(array, obj) {
  var name = array[0];
  var val = array[1];
  var objName = obj.name;
  var objValue = obj.val;
  return [name, val, objName, objValue];
}

// Напишите реализацию функции task5Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

function task5New(array, obj) {
  const [name, value] = array;
  const { name: objName, val: objValue } = obj;
  return [name, value, objName, objValue];
}

// const task5New = ([first, second], { name, val }) => [first, second, name, val]; GH

console.log(task5New([4, 6, 8, 9], { name: 'test', val: 'rest', width: '14px' }));
