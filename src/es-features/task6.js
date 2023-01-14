/**
 * Просто преобразовать содержимое функции task6Old под современный код
 *
 * Пример вызова
 * console.log(task6Old()); -> ['Max', 100, 'Admin', false, '1']
 */

export function task6Old() {
  function userModule() {
    return {
      name: 'Max',
      value: 100,
      role: { name: 'Admin' },
      cases: [{ id: '1' }],
    };
  }

  var tmp = userModule();
  var name = tmp.name;
  var value = tmp.value;
  var role = tmp.role.name;
  var isActive = tmp.isActive === undefined ? false : tmp.isActive;
  var firstCaseId = tmp.cases[0].id;

  return [name, value, role, isActive, firstCaseId];
}

// Напишите реализацию функции task6Old на ES6+ ниже этого комментария.
// При желании, можете использовать стрелочную функцию, вместо обычной

function task6New() {
  function UserModule() {
    this.name = 'Max';
    this.value = 100;
    this.role = { name: 'Admin' };
    this.cases = [{ id: '1' }];
  }

  const tmp = new UserModule();
  const {
    name,
    value,
    role: { name: role },
    cases: [{ id: firstCaseId }],
  } = tmp;
  const isActive = tmp.isActive === undefined ? false : tmp.isActive;

  return [name, value, role, isActive, firstCaseId];
}
const test = task6New();
console.log(test);

//GH
//const task6New = () => {  
//  function userModule() {
//    return {
//      name: 'Max',
//      value: 100,
//      role: { name: 'Admin' },
//      cases: [{ id: '1' }],
//    };
//  }
//
//  const {
//    name,
//    value,
//    role: { name: role },
//    cases: [{ id: firstCaseId }],
//    isActive = false,
//  } = userModule();
//
//  return [name, value, role, isActive, firstCaseId];
//};
