
export class PersonaModel {
    _id?: string;
    strNombre: string;
    strPrimerApellido: string;
    strSegndoApellido: string;
    nmbEdad: number;
    strCorreo: string;
    strTelefono: string;
    idPrepa: string;
    jsnRespuesta: [
        {
            _id: string;
            _idPregunta: string;
            _idSatisfaccion: string;
        }
    ];
}
