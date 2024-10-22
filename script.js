window.onload = function () {
    // Referencia al contenedor donde se mostrará el informe de Power BI
    let powerBIContainer = document.getElementById('power-bi-container');

    // URL del reporte de Power BI, reemplazar por la tuya
    let reportUrl = 'https://app.powerbi.com/reportEmbed?reportId=TU_ID_DEL_REPORTE&groupId=TU_GROUP_ID&autoAuth=true';

    // Crear un elemento iframe para incrustar el informe
    let iframe = document.createElement('iframe');
    iframe.src = reportUrl; // Establece la URL del informe
    iframe.width = '100%'; // Establece el ancho del iframe al 100% del contenedor padre
    iframe.height = '600px'; // Establece la altura del iframe
    iframe.frameBorder = '0'; // Elimina el borde del iframe
    iframe.allowFullScreen = true; // Permite pantalla completa

    // Añadir el iframe al contenedor para que sea visible en la página
    powerBIContainer.appendChild(iframe);
};
