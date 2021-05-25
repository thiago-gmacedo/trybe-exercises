// desisti de fazer o import do arquivo no app.js

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

export default Task;