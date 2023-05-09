import { ServicioReserva } from "../services/ServicioReserva.js";

export class ControladorReservas {
    constructor() { }

    async registrandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        try {
            let datosReserva = peticion.body;
            await objetoServicioReserva.registrar(datosReserva);
            respuesta.status(200).json({
                mensaje: "exito agregando datos",
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        try {
            let idReserva = peticion.params.idreserva;
            respuesta.status(200).json({
                mensaje: "exito buscando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async buscandoReservas(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();
    
        try {
            respuesta.status(200).json({
                mensaje: "exito buscando reservas",
                reservas: await objetoServicioReserva.buscarTodas(),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async editandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        let idReserva = peticion.params.idreserva;
        let datosReserva = peticion.body;

        try {
            await objetoServicioReserva.editar(idReserva, datosReserva);
            respuesta.status(200).json({
                mensaje: "exito editando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }

    async eliminandoReserva(peticion, respuesta) {
        let objetoServicioReserva = new ServicioReserva();

        let idReserva = peticion.params.idreserva;

        try {
            await objetoServicioReserva.eliminar(idReserva);
            respuesta.status(200).json({
                mensaje: "exito eliminando la reserva",
                reserva: await objetoServicioReserva.buscarPorId(idReserva),
            });
        } catch (error) {
            respuesta.status(400).json({
                mensaje: "fallamos en la operacion " + error,
            });
        }
    }
}
