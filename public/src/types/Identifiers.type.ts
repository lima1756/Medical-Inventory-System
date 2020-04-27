
import Material from './Material.type';
import Consumibles from './Consumibles.type'
import Reactivo from './Reactivo.type';
import Equipo from './Equipo.type';
import Proveedor from './Proovedor.type';

const identifiers = {
    material: {
        header: "Materiales",
        type: Material,
        request: "/inventario/material",
        to: "/materiales/material/"
    },
    consumibles: {
        header: "Consumibles",
        type: Consumibles,
        request: "/inventario/consumibles",
        to: "/materiales/consumibles/"
    },
    reactivos: {
        header: "Reactivos",
        type: Reactivo,
        request: "/inventario/reactivos",
        to: "/materiales/reactivos/"
    },
    equipo: {
        header: "Equipo",
        type: Equipo,
        request: "/inventario/equipo",
        to: "/materiales/equipo/"
    },
    proveedores: {
        header: "Proveedores",
        type: Proveedor,
        request: "/proveedores",
        to: "/materiales/proveedores/"
    }
}

export default identifiers;