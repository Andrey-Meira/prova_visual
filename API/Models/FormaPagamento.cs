using System;
using System.Collections.Generic;

namespace API.Models
{
    public class FormaPagamento
    {
        public FormaPagamento() => CriadoEm = DateTime.Now;
        public int formaPagamentoId { get; set; }
        public string Nome { get; set; }
        public string Conta { get; set; }
        public DateTime CriadoEm { get; set; }
    }
}