class Reactivo {
    public static cols = [
        {
            name: "nombre",
            text: "Nombre",
            readonly: false
        },
        {
            name: "marca",
            text: "Marca",
            readonly: false
        },
        {
            name: "identificacion_interna",
            text: "Identificacion interna",
            readonly: false
        },
        {
            name: "fecha_adquisicion",
            text: "Fecha de Adquisicion",
            readonly: false
        },
        {
            name: "hoja_seguridad",
            text: "Hoja de Seguridad",
            readonly: false
        },
        {
            name: "almacen",
            text: "Almacen",
            readonly: false
        },
        {
            name: "ubicacion",
            text: "Ubicacion",
            readonly: false
        },
        {
            name: "proveedor",
            text: "Proveedor",
            readonly: false
        },
        {
            name: "cantidad",
            text: "Cantidad",
            readonly: true
        },
        {
            name: "observaciones",
            text: "Observaciones",
            readonly: false
        }
    ];
    public static codigo_barras = {
        name: "codigo_barras",
        text: "Codigo de Barras",
        readonly: false
    };
    public static fotografia = {
        name: "fotografia",
        text: "Fotografia",
        readonly: false
    };
    public static descripcion = {
        name: "descripcion",
        text: "Descripcion",
        readonly: false
    };
}

export default Reactivo;