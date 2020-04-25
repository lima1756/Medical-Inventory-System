
class Consumibles {
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
            name: "especificaciones",
            text: "Especificaciones",
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
            name: "manual",
            text: "Manual",
            readonly: false
        },
        {
            name: "hoja_seguridad",
            text: "Hoja de seguridad",
            readonly: false
        },
        {
            name: "mantenimiento",
            text: "Mantenimiento",
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
}

export default Consumibles;