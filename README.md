# Experiencias Internacionales ETSIT

## Descripción

Este repositorio contiene el código y los archivos necesarios para la página **Experiencias Internacionales** de la Escuela Técnica Superior de Ingeniería de Telecomunicación (ETSIT - UPV).

El objetivo del proyecto es ofrecer a los estudiantes un repositorio de experiencias reales de movilidad internacional, donde puedan consultar información sobre universidades de destino, plazas, alojamiento, asignaturas, coste de vida y recomendaciones de otros estudiantes.

Las experiencias publicadas son **totalmente anónimas**.

---

# Estructura del proyecto

```
Experiencias-Internacional/
│
├── index.html
├── styles.css
├── script.js
├── universities2.js
├── erasmus.csv
├── Libro1.xlsx
├── Libro1.pdf
└── README.md
```

---

# Descripción de los archivos

## index.html

Contiene la estructura principal de la página web.

Desde este archivo se organiza:

- Cabecera de la página.
- Selector de países.
- Tarjetas de experiencias.
- Apartado para registrar nuevas experiencias.

---

## styles.css

Contiene todos los estilos de la página:

- Diseño.
- Colores.
- Botones.
- Tarjetas.
- Adaptación a dispositivos móviles.

---

## script.js

Gestiona toda la funcionalidad de la página:

- Cambio entre países.
- Apertura de experiencias.
- Funcionamiento de los botones.
- Interacciones de la interfaz.

---

## universities2.js

Es el archivo principal del proyecto.

Aquí se almacena la información de todas las universidades y es el archivo que se deberá modificar cuando sea necesario actualizar el contenido.

Cada universidad contiene:

- Nombre.
- Ciudad.
- País.
- Página web.
- Enlace a la experiencia.
- Número de plazas por titulación.

Ejemplo:

```javascript
{
    university: "TECHNISCHE UNIVERSITÄT BERLIN",
    city: "BERLIN",
    country: "ALEMANIA",
    lat: 52.52,
    lon: 13.405,

    places: {
        GITST_MASTER: 0,
        GITST: 1,
        MASTER: 1,
        GTDM: 2,
        GIF: 2,
        GMAT: 2
    },

    website: "https://www.tu.berlin",
    experience: "https://outstudentsetsit.blogs.upv.es/experiencias/#alemania"
}
```

---

## erasmus.csv

Archivo con la información base de los destinos Erasmus utilizado durante la elaboración del proyecto.

---

## Libro1.xlsx

Listado completo de destinos internacionales con las plazas disponibles por titulación.

Sirve como documento de referencia para actualizar la información de `universities2.js`.

---

## Libro1.pdf

Versión en PDF del listado oficial de destinos internacionales.

---

# Actualización del proyecto

## Actualizar las plazas

1. Consultar el documento **Libro1.xlsx**.
2. Abrir `universities2.js`.
3. Localizar la universidad correspondiente.
4. Modificar el apartado:

```javascript
places:{
    GTDM:2,
    GITST:1,
    MASTER:0
}
```

5. Guardar los cambios.

---

## Añadir una nueva experiencia

Cada universidad dispone del campo:

```javascript
experience:
```

Este campo debe contener el enlace a la sección correspondiente de la página **Experiencias Internacionales** de la ETSIT.

El formato es:

```text
https://outstudentsetsit.blogs.upv.es/experiencias/#pais
```

donde `#pais` es el *anchor* correspondiente al país en **minúsculas**.

Por ejemplo:

```javascript
experience: "https://outstudentsetsit.blogs.upv.es/experiencias/#italia"
```

o

```javascript
experience: "https://outstudentsetsit.blogs.upv.es/experiencias/#alemania"
```

Los *anchors* se encuentran definidos en la página de WordPress y existe uno para cada país.

## Modificar la página web de una universidad

Editar el campo:

```javascript
website:
```

---

## Añadir una nueva universidad

Copiar una universidad existente dentro de `universities2.js` y modificar:

- Universidad.
- Ciudad.
- País.
- Página web.
- Coordenadas (si fueran necesarias).
- Número de plazas.
- Enlace a la experiencia.

---

# Flujo del proyecto

El funcionamiento completo es el siguiente:

1. El estudiante completa el formulario de Microsoft Forms.
2. Power Automate genera automáticamente un PDF con la experiencia.
3. El PDF se almacena en SharePoint.
4. Se incorpora el enlace del PDF en el campo `experience` de `universities2.js`.
5. La experiencia queda disponible automáticamente desde la página web.

---

# Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Microsoft Forms
- Microsoft Power Automate
- SharePoint

---

# Mantenimiento

Las tareas habituales de mantenimiento son:

- Actualizar las plazas disponibles.
- Añadir nuevas experiencias.
- Actualizar enlaces a universidades.
- Incorporar nuevos destinos cuando sea necesario.

---

## Autora

Proyecto desarrollado por **Marta Carrión Bernad** durante las prácticas en la **Escuela Técnica Superior de Ingeniería de Telecomunicación (ETSIT)** de la **Universitat Politècnica de València**.
