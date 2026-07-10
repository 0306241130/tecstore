
export default function ProductCard({id,name,cartogery,price}){
    return(
        <>
            <div className="car-main">
                <div className="content-product" key={id}>
                    <h3 >{name}</h3>
                    <article className="info-product">
                        <p>{cartogery}</p>
                        <p>{price.toLocaleString('vi-VN')}VNĐ</p>
                        <button>Chi Tiết</button>
                    </article>
                </div>
            </div>
        </>
    )
}