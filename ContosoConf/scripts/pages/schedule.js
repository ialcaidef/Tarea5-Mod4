const schedule = [
    {
        "id": "session-1",
        "title": "Registro",
        "tracks": [1, 2]
    },
    {
        "id": "session-2",
        "title": "Avanzar en la Web con HTML5",
        "tracks": [1, 2]
    },
    {
        "id": "session-3",
        "title": "Sumergiéndose en las profundidades con Canvas",
        "tracks": [1]
    },
    {
        "id": "session-4",
        "title": "Nuevas tecnologías en la empresa",
        "tracks": [2]
    },
    {
        "id": "session-5",
        "title": "WebSockets y tú",
        "tracks": [1]
    },
    {
        "id": "session-6",
        "title": "Descanso para café y pasteles",
        "tracks": [1, 2]
    },
    {
        "id": "session-7",
        "title": "Creación de UI con capacidad de respuesta",
        "tracks": [1]
    },
    {
        "id": "session-8",
        "title": "Diversión con las formas (¡no, de verdad!)",
        "tracks": [2]
    },
    {
        "id": "session-9",
        "title": "Una nueva mirada a los diseños",
        "tracks": [1]
    },
    {
        "id": "session-10",
        "title": "Aplicaciones en el mundo real de las APIs de HTML5",
        "tracks": [2]
    },
    {
        "id": "session-11",
        "title": "Almuerzo",
        "tracks": [1, 2]
    },
    {
        "id": "session-12",
        "title": "Getting to Grips with JavaScript",
        "tracks": [1]
    },
    {
        "id": "session-13",
        "title": "Cómo manejar el Javascript",
        "tracks": [2]
    },
    {
        "id": "session-14",
        "title": "Aventuras de diseño web con CSS3",
        "tracks": [1]
    },
    {
        "id": "session-15",
        "title": "Introducción del acceso a los datos y el almacenamiento en memoria caché",
        "tracks": [2]
    },
    {
        "id": "session-16",
        "title": "Agradecimientos y premios de cierre",
        "tracks": [1, 2]
    }
];


// TODO: Task 2 - Get the "schedule" list element from the document
const list = document.getElementById("schedule");
const track1CheckBox = document.getElementById("show-track-1");
const track2CheckBox = document.getElementById("show-track-2");

function createSessionElement(session) {
    // TODO: Task 3 - Create a <li> element for the session.
    //       Add the session title as the <li> text content
    //       Return the <li> element
    const li = document.createElement("li");
    li.textContent = session.title;
    return li;
};

function clearList() {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function displaySchedule() {
    clearList();

    // TODO: Task 4 - Loop through the schedule array
    //       Create session elements
    //       Append the elements to the list   
    for (let i = 0; i < schedule.length; i++) {
        const tracks = schedule[i].tracks;
        const isCurrentTrack = (track1CheckBox.checked && tracks.indexOf(1) >= 0) ||
                             (track2CheckBox.checked && tracks.indexOf(2) >= 0);
        if (isCurrentTrack) {
            const li = createSessionElement(schedule[i]);
            list.appendChild(li);
        }
    }
}

displaySchedule();
track1CheckBox.addEventListener("click", displaySchedule, false);
track2CheckBox.addEventListener("click", displaySchedule, false);