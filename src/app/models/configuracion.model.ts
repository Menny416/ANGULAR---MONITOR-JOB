export class Configuracion {

    constructor(
        public	jobId: number = 0,
        public	servidorId: number = 0,
        public	tiempoEjecucion: number = 0,
        public	configuracionId: number = 0,
        public	temaId: number = 0,
        public	responsableId: number = 0,
        public	areaId: number = 0,
        public	tipoCriticidadId: number = 0,
        public	tipoEjecucionId: number = 0,
        public	tipoPaqueteId: number = 0,
        public	tipoMonitoreoId: number = 0,
        public	configuracion	?: string,
        public	claveId	?: string,
        public	nombre	?: string,
        public  responsable?: any
        ) {}
}
