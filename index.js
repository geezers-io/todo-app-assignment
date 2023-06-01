/**
 * @typedef {Object} TodoRaw
 * @property {string} id
 * @property {string} content
 */
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

  const storage = {
    get todos() {
      try {
        return JSON.parse(localStorage.getItem(appId)) ?? [];
      } catch {
        return [];
      }
    },
    set todos(newTodos) {
      localStorage.setItem(appId, JSON.stringify(newTodos));
    },
  };

  function syncStorage({ type, payload }) {
    switch (type) {
      case 'add':
        storage.todos = [payload.newTodo, ...storage.todos];
        break;
      case 'remove':
        storage.todos = storage.todos.filter(todo => todo.id !== payload.id);
        break;
      case 'clear':
        storage.todos = [];
        break;
      case 'initialize':
        const fragment = document.createDocumentFragment();
        storage.todos.forEach(({ id, content }) => {
          const todo = generateTodoEl(content);
          todo.id = id;
          fragment.appendChild(todo);
        });
        components.$todos.prepend(fragment);
        break;
      default:
        throw new Error(`Invalid syncStorage type: "${type}"`);
    }
  }

  function renderRemainCount() {
    components.$remainCount.textContent = components.$todos.children.length.toString();
  }

  function attachAddHandlers() {
    const generateId = () => {
      const cryptoObj = window.crypto ?? window.msCrypto; /* ie11 */
      const biteArray = new Uint32Array(1);

      return cryptoObj.getRandomValues(biteArray)[0].toString();
    };

    const add = () => {
      const content = components.$addInput.value.trim();
      if (!content) return;

      const id = generateId();
      const todo = generateTodoEl(content);
      todo.id = id;

      components.$todos.prepend(todo);
      syncStorage({
        type: 'add',
        payload: { newTodo: { id, content } },
      });

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
    components.$todos.addEventListener('click', event => {
      if (!event.target.classList.contains(classNames.$deleteButton)) return;

      const todo = event.target.closest(`.${classNames.$todo}`);
      if (!todo) return;

      todo.remove();
      syncStorage({
        type: 'remove',
        payload: { id: todo.id },
      });
      renderRemainCount();
    });
  }

  function attachClearAllHandler() {
    components.$clearButton.addEventListener('click', () => {
      components.$todos.innerHTML = '';
      components.$addInput.value = '';
      syncStorage({ type: 'clear' });
      renderRemainCount();
    });
  }

  syncStorage({ type: 'initialize' });
  attachAddHandlers();
  attachDeleteHandler();
  attachClearAllHandler();
  renderRemainCount();
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
