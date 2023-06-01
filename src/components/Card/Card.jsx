import Style from './Card.module.css';
import User from '../photo/Hansel.png';
import { useState, useEffect } from 'react';
import { Svg } from './Card-svg';
import {getUser, updateUser} from "../../api/api"
export const Card = () => {

    const [item, setItems] = useState([]);

  const hendlBTN = (e) => {
    if (e.target.textContent === "follow") {
        e.target.textContent = "following"
        e.target.classList.toggle(Style.btnActive);
    }else {
    e.target.textContent = "follow"
    e.target.classList.toggle(Style.btnActive);
    }
    
    };

    useEffect(() => {
         const fetchData = async () => {
      try {
        const data = await getUser();
        setItems(data);
      } catch (err) {
      }
    };
    fetchData()
    }, [])

    const element = item.map(( {followers, id, tweets}) => {
    return <div key={id} className={Style.overflow}>
        <Svg/>
        <div className={Style.backImage}></div>
        <div className={Style.UserLine}>
          <div className={Style.UserWrapper}>
            <img className={Style.UserPhoto} src={User} alt="userphoto" />
          </div>
        </div>
        <p className={Style.tweets}>{tweets} tweets</p>
        <h4 className={Style.follower}>{followers} Followers</h4>

        <button className={Style.btn} onClick={(e) => { hendlBTN(e);updateUser(id, { followers: followers + 1 })}}>
            follow
          </button>

      </div>
    })

  return (
    <section className={Style.Card}>
      {element}
    </section>
  );
};
