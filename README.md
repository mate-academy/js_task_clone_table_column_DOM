1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://pushkalov.github.io/js_task_clone_table_column_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Copy/Paste table column

Clone and paste element to document... Easy? Okay, but what do you say when I aks you to clone and paste table column? This task is for real heroes!
Клонировать и вставить элемент в документ... Легко? Хорошо, но что вы ответите, когда я попрошу вас клонировать и вставить столбец таблицы? Это задание для настоящих героев!
Your task: Clone the second column from the table, and append it to the table. To increase the complexity, append it in front of the last table column.
Ваша задача: Клонировать второй столбец из таблицы и добавить его в таблицу. Чтобы увеличить сложность, добавьте его перед последним столбцом таблицы.

Initial table:

![Preview](./src/images/start.png)

Expected table:
![Result](./src/images/result.png)

In this task, we don't provide details instructions. But below are some hints how to do this task:
- JavaScript document has methods to work with tables. [Theory tables](https://javascript.info/dom-navigation#dom-navigation-tables) 
- Before you start review the table structure
- Remember that in this task HTML table has `tbody`, `thead`, `tfoot` sections.
- As a first step try to append first column to the end of the table.
В этой задаче мы не предоставляем подробные инструкции. Но ниже приведены некоторые подсказки, как выполнить эту задачу:
- Документ JavaScript имеет методы для работы с таблицами. [Теоретические таблицы](https://javascript.info/dom-navigation#dom-navigation-tables)
- Прежде чем начать просмотрите структуру таблицы
- Помните, что в этой задаче HTML-таблица имеет разделы tbody, thead, tfoot.
- В качестве первого шага попробуйте добавить первый столбец в конец таблицы.

You don't need to change styles or HTML layout in this task. Change only `main.js` file.
