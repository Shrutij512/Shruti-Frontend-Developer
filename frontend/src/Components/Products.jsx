import "../Styles/products.css"
import React from 'react'

const Products = () => {

    const productsData = [
        {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/051b/877e/471e5c7d52e1fa576990183a51c13e7b?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZcN4N3A-ldjjTgOZfyTD-XX~diQxSJJR2p~Ks4PpvWWrlfiABCM~nG~MQFCH1IahaLkKVZFgZ8CC59nFel7K7qUmQkcscTxFrHQLaL5YPCDam-vL~vdtWpYTlDwdrJkP5tr86BNburWZkVcNZP1E90IQeaKuRdmcDaea3YEkZ9VDvbf4wCDzHXiqA8jPs4h~Al8q95mjwkHDwglYswjE6ppC2d41yQ1nlnJNIBk-nDK2dIH-yabCqC5JILB4~JiHeRhOj1jsk-w65GfplrHttu2EkqehLuNnGgUf8hSKdbaRneuC6xlhfjn0Nl9CzqIK3ZAOWocIJxbp1mYDrktQ5g__",
            title: "Bita Marketplace",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
        },
        {
            id: 2,
            img: "https://s3-alpha-sig.figma.com/img/181d/ccff/a2d52abed3b2526cc5e1e71e5fdeabb8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iRm152JqC6kY39R7TYABGPsuP6ZQo0qcFNBnQWdmI7tRJGn9gu6b4u05TDaU-CNiLw1j34-I0piUVoxbXLW4TFlyeoArFC2epkt6XdgXSGD8PQg6gNY2nLfHTa10ZW74pKMUxB8nHtGu4dVXaoUj2Ou9zv113tv~OVX~k5d0TWKRQRQtZqYFXzUw8zeW5H7P9IEqvoN0FN9DGPjwi5scMNcA8yOvB7I~0Q58J09kKV75PUL40iDxAoFwbgB8avJJOvFiv-uvVqcBLalJKMfBo-J9QU2LY5P6D7DayeIGt5GrQUh~gdjvb5ob1nCQ6M6XftANTZe1~~yRhqcx~PZh4g__",
            title: "Bitadex",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
        },
        {
            id: 3,
            img: "https://s3-alpha-sig.figma.com/img/8d48/f5f8/2a6ec05acd829b0cd77681132e156419?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fPVReSRkbzocWZC2Lrep4vrro2KMQ0xZ6sjpszEgzA86LPjWtPjyEzPkfXrXpvUeCMwKUkcK7Nk5TSrsk~7M26FpIm5yU3esu--qb3r9UzU1Q-EOW91bwo~N9UgK~BgZGIhed5cMkzh5rrrgXqCycbVGZ95vx1T9vzrBRPdgoNFOXK0EqXCW2gotAJmmyayikPULQCZefTYgHPAv-xeNPBdCqqimC41V3yBGdhIqT-IdLLMrhls7F303FA8JgtV1fNekE1y9RZowBtndHzGLZElG0Cs5FSumRchyRGXGIH3kXPb~kSX2fWj2pDU0YgZUBFhtldXEa~G-wYIkVVq36Q__",
            title: "Bitabridge",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
        },
        {
            id: 4,
            img: "https://s3-alpha-sig.figma.com/img/f46f/7487/0ca93e50da5161da10041a0bfd15927d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FEfAJkqXBAwL-vHudDmtoG~wcuo~8FKYQDPA8yFL-7jet5W2cLH75Ej72BfZq2TjXn-zLImisHWHEWIiBYR3Ml64NCwtcmyJ8jYFfbEkNA17GpKYTG0-cbET4b94E9ZY48BeI9I2kJG2nLWdxVpdMSXVrmKjcrwlunuVBWCOGZ1nPHkhGGo6OkoXoHraBiDdhmRBh7yXDviDsxE92Tbzge4zSY3Nrni-eN4Cw9EY~PIa8Zw1HW23FMX11T2LOCqEyG2z3N9ha3vsh7kOej7i5GtQrrpdutJ5drScOmbD2oQXF21KS83PgC-7SMnukKOBo5AcZ97dryxKb7Ri7neM4Q__",
            title: "Bitapad",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
        },
        {
            id: 5,
            img: "https://s3-alpha-sig.figma.com/img/a48c/a537/39f8f2389c78300187c2ab27ca1f3a07?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qfnl95Y1F4Vaif3fGKrupFZ2yVP5OcYwX1txVfnTQHN5l95DhG5v-aIl2Vv9cDjM9PmZ~EIkCzwPFH-AryfmpdYQsyAaS20TmQ0BvmTUCQ-ZdQ9wGLl5QgbWCpmUt2357iwBrPCLT89rVKO89b4sqwK8dZJ~gr3iz05t4uVP6rmnDhVsGseoTtmPZIOFQj7qscV1bJFyvgy3g95rS4y6Psg2jjq1B8B0lribptUpwUwruKIKHZP8zQxYK6jh8emgtSYAknKpUANI-gRFjqBNJ8E-Y~Wvf9i6vkUlzAM8yS25oolNfL9ll17QjkQkXY4Z5mox7uvaG1FL~LMZuB4b2g__",
            title: "BitaLend",
            description: "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada"
        }
    ]

    return (
        <div>
            <div className="prod-section">
                <h1>Our <span style={{ color: "#FECC00" }}>Products</span></h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
            </div>

            <div id="prod-div">
                {productsData.map((prod) => (
                    <div key={prod.id} id="prod">
                        <img src={prod.img} alt={prod.title} id="prod-icon" />
                        <h1 id="prod-title">{prod.title}</h1>
                        <p id="prod-desc">{prod.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Products
