export class Job {

    constructor(
        public configuracionid ?: number,
        public jobid ?: number,
        public temaid ?: number,
        public responsableid ?: number,
        public areaid ?: number,
        public tipocriticidadid ?: number,
        public tipoejecucionid ?: number,
        public tipopaqueteid ?: number,
        public tipomonitoreoid ?: number,
        public configuracion ?: string,
        public nombre ?: string,
        public tema ?: string,
        public responsable ?: string,
        public sigla ?: string,
        public correo ?: string,
        public telefono ?: string,
        public celular ?: string,
        public extension ?: string,
        public area ?: string,
        public tipocriticidad ?: string,
        public tipoejecucion ?: string,
        public tipopaquete ?: string,
        public tipomonitoreo ?: string,
        public error ?: string
        ) {}
}
