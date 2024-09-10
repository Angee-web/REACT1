import product from "../Product"


const Image = () => {
  return (
    <div>
        <img src={product.image} alt={product.name} style={{ width: "100%", borderTopRightRadius: "50px", borderBottomLeftRadius: "50px" }}/>
    </div>
  )
}

export default Image