import React  from 'react'
import facebookIcon from '../images/facebook.png'
import whatsappIcon from '../images/whatsapp.png'
import twitterIcon from '../images/twitter.png'
import copyIcon from '../images/copy.png'
import copiedIcon from '../images/check-mark.png'


export default function NewsElemet (props) {
     const copied = ()=>{
            document.getElementById('copyIcon').src = {copiedIcon};
    }
    let {title, desc, ImageUrl, source, updateTime, url} = props;
    // let copyDone = false;
    return (
      <div>
        <div className="newsElement">
          <div className="newsImg">
            <a target='_blank' href={url}>
              <img src={ImageUrl} alt="Img" />
            </a>
          </div>
          <div className="newsContent">
            <div className="newsTitle">
                {title}
            </div>
            <div className="newsDesc">
                {desc}
            </div>
          </div>
          <div className="metadata">
            <div className="newsInfo">
            <span className="updateTime">{`${updateTime.split('T')[0]} ${(updateTime.split('T')[1]).split('Z')[0]}`}</span>
            <span className="NewsSource">{source} </span>
            </div>
            <div style={{display: 'inline'}}></div>
            <div className="shareNews">
                <a href="#"><img src={whatsappIcon} className='shareIcons' alt="Whatsapp" /></a>
                <a href="#"><img src={facebookIcon} className='shareIcons' alt="Facebook" /></a>
                <a href="#"><img src={twitterIcon} className='shareIcons' alt="Twitter" /></a>
                <a href="#"><img src={copyIcon} className='shareIcons ' onClick={copied} id="copyIcon" alt="Copy Url" /></a>
            </div>
          </div>
        </div>
      </div>
    );
}
