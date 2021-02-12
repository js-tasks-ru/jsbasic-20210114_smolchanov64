/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
     *          name: '',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *   },
 *
 * @constructor
 */
/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },ы
 *
 * @constructor
 */
export default class UserTable {
  constructor(rows) {
    this.elem = document.createElement('table');
    
    let tHead = document.createElement('thead');
    let tBody = document.createElement('tbody');

    tHead.innerHTML = `<tr>
                    <th>Имя</th>
                    <th>Возраст</th>
                    <th>Зарплата</th>
                    <th>Город</th>
                    <th></th>
                    </tr>`;

    this.elem.append(tHead);

    for (let row of rows) {
      let bodyRow = document.createElement('tr');
      bodyRow.innerHTML = `<td>${row.name}</td>
                          <td>${row.age}</td>
                          <td>${row.salary}</td>
                          <td>${row.city}</td>
                          <td><button class = 'row-button'>X</button></td>`;
      tBody.append(bodyRow);
    }
    this.elem.append(tBody);    

    this.elem.onclick = this.removeRow;    
  }
  removeRow = function(event) {    
    if (event.target.classList.contains('row-button')) {
      let row = event.target.closest("tr");
      row.remove();
    }
  }
}