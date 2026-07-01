async function guardar() {

    const datos = {
        incidencia: document.getElementById("incidencia").value,
        nodo: document.getElementById("nodo").value,
        olt: document.getElementById("olt").value,
        responsable: document.getElementById("responsable").value,
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value
    };

    try {

        const respuesta = await fetch("PEGA_AQUI_TODA_TU_URL", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(datos)
        });

        if (respuesta.ok) {

            alert("✅ Registro guardado correctamente.");

            // Limpiar formulario
            document.getElementById("incidencia").value = "";
            document.getElementById("nodo").value = "";
            document.getElementById("olt").value = "";
            document.getElementById("responsable").value = "";
            document.getElementById("fecha").value = "";
            document.getElementById("hora").value = "";

        } else {

            const error = await respuesta.text();
            alert("❌ Error al guardar:\n" + error);

        }

    } catch (e) {

        console.error(e);
        alert("❌ No se pudo conectar con Power Automate.");

    }
}
