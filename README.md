# todo-backend

</br>

### Frontend Repository:

https://github.com/gael-src/todo-frontend

#### Frontend Deploy GH-Page:

https://gael-src.github.io/todo-frontend/

### Backend Repository:

https://github.com/gael-src/todo-backend

</br>

commands:

> \$ sudo mongod --port 27018

> \$ npm start

(If port 3000 doesn't work try:)

> \$ PORT=3002 npm start

</br>

</br>

</br>

### Exercise:

Wir bauen ein Backend für die Todos React App. Wenn du dir unsicher bist was du geneau in den einzelnen Schritten machen musst, dann guck nochmal in die Music Rating Aufgaben 1 und 2.

1. Initialisiere ein neues node Projekt mit npx.
2. Starte mongodb und füge mit hilfe des Mongo CLI (Command Line Interface) eine neue Datenbank für todos hinzu.
3. Fülle die Datenbank mit Beispieldaten für Todos.
4. Schreibe deine Routes, Controller und Models so, dass die Todos durch einen GET Request abgegriffen werden können.
5. Starte den Server. Eventuell musst du dafür den Port ändern. https://parzibyte.me/blog/en/2019/06/21/change-express-generator-app-port/
6. Du musst wahrscheinlich auch noch CORS zulassen. https://dzone.com/articles/cors-in-node
7. In der React Schreibe deinen Axios Request um, dass die Daten nicht mehr aus jsonplaceholder, sondern aus dem Backend kommen.
8. Implementiere jetzt die anderen HTTP Methoden.
