import { Link, useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    // 4 - tota dinamica
    const {id} = useParams()

    //5 - carregamento rota individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url) 

    
    return(
        <div>
            <p>ID do produto : {id}</p>
            {error && <p>Ocorreu um erro ...</p>}
            {loading && <p>Carregando ...</p>}
            {product && 
                <div>
                    <h1>{product.name}</h1>
                    <p> R$ {product.price}</p>

                    {/* nested router */}
                    <Link to={`/products/${product.id}/info`}> Mais informações </Link>
                </div>
            }
        </div>
    )
}

export default Product