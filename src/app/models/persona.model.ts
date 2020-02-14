
export class PersonaModel {
    _id?: string;
    strNombre: string;
    strPrimerApellido: string;
    strSegundoApellido?: string;
    nmbEdad: number;
    strCorreo: string;
    strTelefono: string;
    idPreparatoria: string;
    jsnRespuesta?: [
        {
            _id: string;
            _idPregunta: string;
            _idSatisfaccion: string;
        }
    ];
}
