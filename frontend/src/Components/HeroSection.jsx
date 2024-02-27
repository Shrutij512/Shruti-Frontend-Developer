import '../Styles/heroSection.css';
import React from 'react'
import arrow from "../images/right-arrow.png"

const HeroSection = () => {
    return (
        <div>
            <div id='hero'>
                <div className='lable' id='lable1'>YOUR GATEWAY TO</div>
                <img src="https://s3-alpha-sig.figma.com/img/e526/38ef/42ff4f95eabb43a55d25466472b7ec29?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a2mkdjp0eJDkgKMw3XXtnMlv0vFszAlAlqaXmwYy9YSM7A5-62rvePJ7GX2OugTRvvHA7L0GhBndcLG~iRRzSdqgXdY9YSWtCwA9--ldQcN0wBo89vqIh2I0WMPeq5HrSbxWt6gWxuMg7RrTUheKGPOcakO48G5KUxlmdOCdY60ETHAiP44eDh39Sg0GZv6J-onTld9g7Cf~ksTsrNZ-b5w1lBBZKTTnvQoygKem-Mycbh0oXq9PTUH-ZDtVWyUumsTO0TvOLMNvTVhj8D6YUPfUpLBxk7u9aDQHbMyddai3Pcc~ETyaDhbRJxNB-qzrfDeEeEM9Q~4MH8ZyDWWCHg__" alt="" />
                <div className='lable' id='lable2'>DEFI ON <span>BITCOIN</span></div>
            </div>

            <div id='bottom-div'>
                <p>Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus tellus augue.</p>
                <button>Get started <img src={arrow} alt="" /></button>

            </div>
        </div>
    )
}

export default HeroSection
