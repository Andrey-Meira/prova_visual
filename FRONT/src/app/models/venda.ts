import { ItemVenda } from "./item-venda";

export interface Venda {
    vendaId?: number;
    cliente: String;
    itensVenda: ItemVenda[];
    formaPagamentoId: number;
    criadoEm?: Date;
}