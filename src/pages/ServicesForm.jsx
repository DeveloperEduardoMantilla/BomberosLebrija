import SliderMeesage from "../components/SliderMessage"

export default function ServicesForm() {
  return (
    <>
    <SliderMeesage/>
            <div className="container presentarPqrds">
                    <h1>Servicios</h1>
                    <hr></hr>
                    <div className="col-12 d-flex justify-content-center mt-5">
                        <div className="col-12 col-md-10 col-lg-8 "> 
                        <p className="campoObligatorio">Los campos con * son obligatorios</p>
                            <form>
                            <div className="form-group col-12 indicadores-form mb-4">
                                <p className="m-0 p-0">Tipo de Servicio</p>
                            </div> 
                                <div className='col-sm-12 col-md-4'>
                                    <label>Seleccione el servicio</label>
                                    
                                    <select className="form-select form-select-sm"  name="servicio" required >
                                        <option selected>Seleccione</option>
                                        <option>1</option>
                                    </select>
                                </div>
                                <div className="form-group col-12 indicadores-form mt-3 mb-3">
                                    <p className="m-0 p-0">Datos Personales</p>
                                </div> 
                                <div className="row">
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Nombre <span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" name="nombre" required />
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Documento <span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" required name="documento"/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Telefono<span>*</span></label>
                                    <input type="number" className="form-control form-control-sm" required name="telefono"/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Email<span>*</span></label>
                                    <input type="email" className="form-control form-control-sm" name="email" required />
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Direccion<span>*</span></label>
                                    <input type="address" className="form-control form-control-sm" name="direccion" required/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Asunto<span>*</span></label>
                                    <input type="text" className="form-control form-control-sm" required name="asunto"/>
                                </div>
                                <div className="col-12 col-md-6 mt-2">
                                    <label>Observacion<span>*</span></label>
                                    <textarea className="form-control form-control-sm" id="exampleFormControlTextarea1" name="observacion" rows="3"></textarea>
                                </div>
                                <div className="col-12 pt-3">
                                    <button className="btn btn-dark" type="submit">Enviar</button>
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            <div className="separador"></div>
    </>
  )
}
