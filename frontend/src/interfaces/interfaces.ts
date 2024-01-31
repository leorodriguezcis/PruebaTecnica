import { SelectChangeEvent } from "@mui/material";

export interface SelectItemProps {
    values: Comida[];
    onChange?: (e: SelectChangeEvent<string>) => void;
}

export interface SelectItemCategoriasProps {
    values: Categoria[];
    setValuereseted: (value : string) => void
    onChange?: (e: SelectChangeEvent<string>) => void;
    value: string;
}

export interface SelectComponentProps {
    select: React.Dispatch<React.SetStateAction<SelectedItems>>
    data: Comida[];
    selected: SelectedItems
}

export interface Categoria {
    id: number;
    nombre: string;
}

export interface Comida {
    id: number;
    nombre: string;
    categorias: Categoria[];
}
export interface MenuItem {
    id: number;
    nombre: string;
    precio: number;
}
export interface TableProps {
    data: MenuItem[];
    openLoad: () => void;
    closeLoad: () => void;
  }

export interface SelectedItems{
    categoria: string;
    comida: string;
}

export interface LoaderProps{
    open: boolean;
}

export interface ModalPedidoProps{
    open: boolean
    onClose: () => void
}

export interface TableRowMenuProps{
    data: MenuItem
    onClick: () => void
}