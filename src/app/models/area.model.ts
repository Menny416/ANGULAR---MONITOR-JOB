export class AreaModel {

    constructor(
        public esActivo: boolean = true,
        public areaId?: number,
        public area?: string,
        public fechaAlta?: Date,
        public fechaBaja?: Date,
        public fechaModificacion?: Date,
        public usuarioAlta?: number,
        public usuarioBaja?: number,
        public usuarioModificacion?: number,
        ) {}
}
