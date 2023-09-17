class Contador {
  constructor(manzana) {
    this.nombre = manzana
    this.contadorIndividual = 0
  }
  static contadorGlobal = 0

  getResponsable() {
    console.log(this.manzana)
  }

  contar() {
    this.contadorIndividual++
    Contador.contadorGlobal++
  }

  getCuentaIndividual() {
    console.log(
      `Cuenta individual de ${this.manzana} es ${this.contadorIndividual}`
    )
  }

  getCuentaGlobal() {
    console.log(`Cuenta global es ${Contador.contadorGlobal}`)
    this.nombre = frutas
  }
}

const sandia = new Contador('Contador 1')
const melon = new Contador('Contador 2')
const frutas = new Contador('frutas')

sandia.getResponsable()
melon.getResponsable()
sandia.contar()
sandia.contar()
sandia.contar()
sandia.contar()
melon.contar()
sandia.getCuentaIndividual()
melon.getCuentaIndividual()
sandia.getCuentaGlobal()
melon.getCuentaGlobal()

class TicketManager {
    

    constructor(){
        this.eventos = [frutas]
    }

    agregarEvento(frutas,precio,capacidad=10,fecha= new Date()){
        

        const evento = {
            id: this.#generarIdFrutas(),
            frutas,
            precio: precio,
            capacidad,
            fecha,
            cantidad: []
        }
        this.eventos.push(evento)

    }

    agregarUsuario(idFrutas,idUsuario){
        const evento = this.#buscarFrutas(idEvento)
        if(!evento){
            return 'Este producto no existe'
        }
        if(evento.participantes.includes(idUsuario)){
            return 'compra ya registrada'
        }
        evento.participantes.push(idUsuario)
    }

    ponerEventoEnGira(idEvento,nuevoLugar,nuevaFecha){
        const evento = this.#buscarEvento(idEvento)
        if(!evento){
            return 'Este producto no existe'
        }
        const nuevoEvento = {
            ...evento,
            lugar:nuevoLugar,
            fecha:nuevaFecha,
            participantes:[],
            id: this.#generarIdFrutas()
        }
        this.eventos.push(nuevoEvento)
    }

    #buscarEvento(idEvento){
        return this.eventos.find(e=>e.id === idEvento)
    }

    #generarIdEvento(){
        return this.eventos.length 
        ? this.eventos[this.eventos.length-1].id+1 
        : 1
    }