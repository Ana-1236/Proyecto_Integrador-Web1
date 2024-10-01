let tareas = [];
let contadorTareas = 0;

function agregarTarea() {
    let tarea = {};
    
    tarea.responsable = prompt("Ingresa el nombre del responsable de la tarea:");
    tarea.descripcion = prompt("Ingresa la descripción de la tarea:");
    tarea.fechaLimite = prompt("Ingresa la fecha límite de la tarea (dd/mm/yyyy):");
    
    let prioridad = parseInt(prompt("Ingresa la prioridad de la tarea (1-Alta, 2-Media, 3-Baja):"));
    
    if (prioridad < 1 || prioridad > 3) {
        alert("Prioridad no válida. Asignando prioridad 'Baja'.");
        tarea.prioridad = 3;
    } else {
        tarea.prioridad = prioridad;
    }
    
    tareas[contadorTareas] = tarea;
    contadorTareas++;
}

function mostrarTareas() {
    console.log("Lista de Tareas:\n");
    if (tareas.length === 0) {
        console.log("No hay tareas para mostrar.");
        return;
    }
    
    for (let i = 0; i < tareas.length; i++) {
        let tarea = tareas[i];
        console.log("Tarea " + (i + 1) + ":\n" +
                    "Responsable: " + tarea.responsable + "\n" +
                    "Descripción: " + tarea.descripcion + "\n" +
                    "Fecha Límite: " + tarea.fechaLimite + "\n" +
                    "Prioridad: " + (tarea.prioridad === 1 ? 'Alta' : (tarea.prioridad === 2 ? 'Media' : 'Baja')) + "\n" +
                    "-------------------------------\n");
    }
}

let opcion;

do {
    opcion = parseInt(prompt("Selecciona una opción:\n1. Agregar tarea\n2. Mostrar todas las tareas\n3. Filtrar tareas por prioridad\n4. Salir"));

    switch (opcion) {
        case 1:
            agregarTarea();
            break;
        case 2:
            mostrarTareas();
            break;
        case 3:
            let prioridad = parseInt(prompt("Filtrar por prioridad (1-Alta, 2-Media, 3-Baja):"));
            mostrarTareasPorPrioridad(prioridad);
            break;
        case 4:
            console.log("Saliendo del sistema...");
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
    }
    
} while (opcion !== 4);
