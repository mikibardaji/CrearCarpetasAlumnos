# CrearCarpetasAlumnos

Script para generar en una carpeta del Drive a eleccion, todas las subcarpetas con los nombres y apellidos de los alumnos, a partir de un excel que tenga dos columnas, una para el nombre y la segunda para el apellido.

Opcionalmente, al final de la primera función se puede llamar a una carpeta, donde te crea una copia de un documento, por ejemplo la ficha del alumno, dentro de cada uno, con el nombre y apellido del alumno, concatenado con el sufijo, que se indique.

**variables a tocar**
· *id_carpeta*: carpeta donde quieres realizar las carpetas
· *id_excel*: id google calcs donde tienes los nombres en la columna 1, y los apellidos en la columna 2, los nombres empiezan en la fila 2 
· *nom_pestanya_excel*: Nombre de la pestaña dentro de google calc
· *templateDocId*: id del documento que se quiere hacer copia dentro de cada una de las carpetas de los alumnos (opcional, si se llama a la función createDocsInSubfolders)
