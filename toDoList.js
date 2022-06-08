let myDiv = document.getElementById('div');

const toDoList = {
  items: [
    {
      text: 'Завершить текущий челлендж',
      completed: false,  
    },
    {
      text: 'Отдохнуть во время перерыва',
      completed: false,
    },
    {
      text: 'Помочь напарнику понять код',
      completed: false,
    },
    {
      text: 'Выиграть в мафию',
      completed: true,
    },
  ],

  printAll: function() {
    myDiv.innerHTML = '';
    for (i of this.items) {
      if (i.completed){
        myDiv.insertAdjacentHTML('beforeend', `[x]  ${i.text} <hr>`);
      } else{
        myDiv.insertAdjacentHTML('beforeend', `[ ]  ${i.text} <hr>`);
      }
    }
  },

  add: function() {
    let text = prompt('Какую задачу добавить в список?')
    if (text) {
      let newToDo = {
        text: text,
        completed: false
      }
      this.items.unshift(newToDo);
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', '<p>Добавлена новая задача: ' + text + '</p>')
    } else {
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', '<p>Неправильный ввод.</p>')
    }
  },

  remove: function() {
    let removed = prompt('Выберите индекс удаляемого элемента');
    if (removed) {
      this.items.splice(removed, 1);
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', `<p>Задача "${this.items[removed].text}" удалена</p>`);
    } else {
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', `<p>Индекс введен некорректно</p>`)
    }
  },

  print: function(index) {
    let printed = prompt('Выберите индекс удаляемого элемента');
    if (printed) {
      myDiv.innerHTML = '';
      if (this.items[printed].completed){
        myDiv.insertAdjacentHTML('beforeend', `<p>[x]  ${this.items[printed].text}</p>`);
      } else{
        myDiv.insertAdjacentHTML('beforeend', `<p>[ ]  ${this.items[printed].text}</p>`);
      }
    } else {
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', `<p>Индекс введен некорректно</p>`)
    }
  },

  complete: function() {
    let completed = prompt('Выберите индекс выполненной задачи');
    if (completed){
      this.items[completed].completed = true;
      myDiv.insertAdjacentHTML('beforeend', `<p>Задача ${this.items[printed].text} помечена как выполненная.</p>`);
    } else {
      myDiv.innerHTML = '';
      myDiv.insertAdjacentHTML('beforeend', `<p>Индекс введен некорректно</p>`)
    }
  },
}