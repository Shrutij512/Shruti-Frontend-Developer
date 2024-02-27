import "../Styles/tokenSection.css";
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import arrow from "../images/right-arrow.png"

const Token = () => {
    const [tokenData, setToken] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 6;

    const url = `https://faithful-ox-underwear.cyclic.app/`;

    useEffect(() => {

        fetch(`${url}`, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.Token.length);
                setToken(res.Token);
                setTotalPages(Math.ceil(res.Token.length / itemsPerPage));
            })
            .catch((error) => { console.log(error) })
    }, [])

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const subset = tokenData.slice(startIndex, endIndex);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div className="our-token">
            <div className="token-section">
                <h1>Our <span style={{ color: "#FECC00" }}>Token</span></h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et Pellentesque habitant morbi.</p>
            </div>

            <div id="token-div">
                {subset.map((token) => (
                    <div key={token._id} id="token">
                        <img src={token.img} alt={token.tokenName} id="token-icon" />
                        <h1 id="token-title">{token.tokenName}</h1>
                        <div className='token-details'><p>Symbol</p> {token.symbol}</div>
                        <div className='token-details'><p>Decimals</p> {token.decimals}</div>
                        <div className='token-details'><p>Marketcap</p> {token.marketcap}</div>
                        <div className='token-details'><p>Chain</p> {token.chain}</div>
                        <button>Details <img src={arrow} alt="" /></button>
                    </div>
                ))}

            </div>
            <ReactPaginate
                containerClassName={"pagination-container"}
                pageCount={totalPages}
                onPageChange={handlePageChange}
                forcePage={currentPage}
                nextLabel="next >"
                previousLabel="< previous"
            />
        </div>
    )
}

export default Token
