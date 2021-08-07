import React from 'react';

export default function todo() {

  /* 
  importance scale
  1: If you're bored
  2: nice to have
  3: get this done
  4: deadline
  5: ASAFP
   */

  var todoList = {
    categories: [
      {
        categoryName: "refactor",
        tasks: [
          {
            title: "",
            todo: "",
            importance: 3
          },
          {
            title: "",
            todo: "",
            importance: 3
          },
          {
            title: "add js",
            todo: "add js functionality to todo.js",
            importance: 3
          },
          {
            title: "refactor todo.js",
            todo: "divide todo.js into json file and js logic",
            importance: 1
          },
          {
            title: "cleanup all documents",
            todo: "refactor and optimize where necessary",
            target: [
              "component composition and structure",
              "Player.js",
            ],
            importance: 3
          },
        ],
      },
      {
        categoryName: "new features",
        tasks:
          [
            {
              title: "",
              todo: "",
              importance: 3
            },
            {
              title: "todo.js gui",
              todo: "render all todos, sort on importance, filter on importance. render form for inputting new todos. render interface for replanning, prioritize high UX.",
              categories: ["ux"],
              importance: 3
            },
            {
              title: "implement context",
              todo: "add all card player and playfield states to context. use best practices",
              importance: 3
            },
            {
              title: "add images",
              todo: "Find and add appropriate emojis to all artefacts",
              importance: 3
            },
            {
              title: "implement backend",
              todo: "implement using GraphQL API, next.js, appropiate database(do research)",
              importance: 3
            }
          ]
      }
    ]
  };




  //implement updateTodoList(){}  // should be able to add and delete entries

  // return list of categories and number of tasks in each category

  const categoriesList = () => {
    console.log(todoList);

    var listOfAllTasks = [];

    const categories = todoList.categories;
    categories.map(task => {
      listOfAllTasks.push(task);
    });

    const testing = "this is a test";
    console.log(listOfAllTasks);
    return (todoList.categories.map(category => {
      return (
        <button>
          {category.categoryName}
        </button>
      );
    }));
  };

  // return number of tasks. sort and filter on category and importance

  // set threshold for number of tasks for each category. prompt replanning GUI

  // return random todo based on category and importance

  // API connection

  return (
    <div>
      {categoriesList()}
      <table><tr><td>data in the row</td></tr></table>
    </div>
  );
}


