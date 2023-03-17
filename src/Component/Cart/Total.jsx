import { useContext } from 'react'
import { CartContext } from '../Context/CartContext'


const Total = () =>{
    const { cartSum } = useContext(CartContext)
    let total = cartSum()
    return (
        <>
                <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: '100%' }}
                ></div>
              </div>
              <div className="col-2 d-flex align-items-center"></div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: '100%' }}
                ></div>
              </div>
              <div className="col-2 d-flex align-items-center"></div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: '100%' }}
                ></div>
              </div>
              <div className="col-1 d-flex align-items-center">
                <p className="fs-6 text-center">
                  <strong>Total:</strong>
                </p>
              </div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: '100%' }}
                ></div>
              </div>
              <div className="col-1 d-flex align-items-center">
                <p className="fs-6 text-center">
                  <strong>$ {total.toFixed(2)}</strong>
                </p>
              </div>
              <div className="col-1 d-flex justify-content-center">
                <div
                  className="border-end border-2"
                  style={{ height: '100%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}

export default Total;