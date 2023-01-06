import {react} from "react"

function Products(){
    return(
        <div className="container d-flex justify-content-between">
            <h3 className="m-0">Popular products</h3>
            <div className="d-flex m-0">
                <button type="button" class="btn btn-outline-info mx-1">Cameras</button>
                <button type="button" class="btn btn-outline-info mx-1">Laptops</button>
                <button type="button" class="btn btn-outline-info mx-1">Tables</button>
                <button type="button" class="btn btn-outline-info mx-1">Mouse</button>
            </div>
        </div>
    )
}

export default Products