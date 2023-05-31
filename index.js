/**
 * @typedef {Object} ClassNames
 * @property {string} $todos
 * @property {string} $todo
 * @property {string} $addInput
 * @property {string} $addButton
 * @property {string} $deleteButton
 * @property {string} $clearButton
 * @property {string} $remainCount
 */
/**
 * @typedef {function} generateTodoEl
 * @param {string} content
 * @return {HTMLElement}
 */
/**
 * @param {string} appId - components classNames
 * @param {ClassNames} classNames - components classNames
 * @param {generateTodoEl} generateTodoEl - todo element generator
 */
function activateTodoApp(appId, classNames, generateTodoEl) {
  const app = document.getElementById(appId);

  if (!app) {
    throw new Error(`App node that maps to id "${appId}" not found.`);
  }

  function findComponent(className) {
    const node = app.querySelector(`.${className}`);

    if (!node) {
      throw new Error(`Component node that maps to className "${className}" not found.`);
    }

    return node;
  }

  const components = {
    $todos: findComponent(classNames.$todos),
    $addInput: findComponent(classNames.$addInput),
    $addButton: findComponent(classNames.$addButton),
    $clearButton: findComponent(classNames.$clearButton),
    $remainCount: findComponent(classNames.$remainCount),
  };

  function renderRemainCount() {
    components.$remainCount.textContent = `${components.$todos.children.length}`;
  }

  function attachAddHandlers() {
    const add = () => {
      const content = components.$addInput.value.trim();
      if (!content) return;

      const todo = generateTodoEl(content);
      components.$todos.insertBefore(todo, components.$todos.children[0]);

      components.$addInput.value = '';
      renderRemainCount();
    };

    components.$addButton.addEventListener('click', add);
    components.$addInput.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.isComposing) {
        add();
      }
    });
  }

  function attachDeleteHandler() {
    components.$todos.addEventListener('click', ({ target }) => {
      if (!target.classList.contains(classNames.$deleteButton)) return;

      const todo = target.closest(`.${classNames.$todo}`);
      if (!todo) return;

      todo.remove();
      renderRemainCount();
    });
  }

  function attachClearAllHandler() {
    components.$clearButton.addEventListener('click', () => {
      components.$todos.innerHTML = '';
      components.$addInput.value = '';
      renderRemainCount();
    });
  }

  attachAddHandlers();
  attachDeleteHandler();
  attachClearAllHandler();
}

document.addEventListener('DOMContentLoaded', () => {
  /** @type {ClassNames} */
  const classNames = {
    $todos: 'todos',
    $todo: 'todo',
    $addButton: 'add-button',
    $addInput: 'add-input',
    $deleteButton: 'delete-button',
    $clearButton: 'clear-button',
    $remainCount: 'remain-tasks-count',
  };

  /** @type {generateTodoEl} */
  const generateTodoEl = content => {
    const li = document.createElement('li');
    li.className = classNames.$todo;

    const p = document.createElement('p');
    p.textContent = content;

    const button = document.createElement('button');
    button.className = classNames.$deleteButton;

    li.append(p, button);
    return li;
  };

  activateTodoApp('todoApp', classNames, generateTodoEl);
});
