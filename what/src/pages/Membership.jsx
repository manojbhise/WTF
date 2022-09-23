import React from 'react'
import styles from "../styles/Membership.module.css"
import { AiOutlineLeft } from 'react-icons/ai';
import { BiMap } from 'react-icons/bi';
import { FaGetPocket } from 'react-icons/fa';
import { IoMdFitness } from 'react-icons/io';
import { TbVaccine } from 'react-icons/tb';
import { FaCoins } from 'react-icons/fa';
import { FcBusinessman } from 'react-icons/fc';
import { AiFillStar } from 'react-icons/ai';
import { useNavigate } from "react-router-dom"


const Membership = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.main}>
      <div className={styles.back}>
        <p><AiOutlineLeft style={{fontSize:"25px", fontWeight:"550"}}/> <button onClick={()=>navigate("/")}>Back</button></p>
      </div>
      <div className={styles.gym}>
        <div className={styles.left}>
           <h1>WTF: Hybrid Gym</h1>
           <h3><BiMap /> A 452 Basement, New Ashok Nagar</h3>
           <h3>Description</h3>
           <p>
           WTF: Hybrid Gym is one of the greatest gyms in Ashok Nagar, including Aerobics, Yoga, Gym functional trainers, Olympic deadlift barbells, punching bags, Tyre training, and other weight loss activities. Their program includes pilates that leverages the body's inherent movement patterns.
           </p>
           <h3>Facilities</h3>
           <div>
            <p>Sanitized Gym</p>
            <p>Skilled Trainer</p>
            <p>Modern Equipments</p>
            <p>Fully AC</p>
            <p>CCTV</p>
           </div>
           <h3>Why to choose WTF?</h3>
           <div className={styles.boxes}>
            <div>
              <FaCoins style={{fontSize:"40px",marginTop:"16px"}}/>
              <p>Earn WTF rewards coin</p>
            </div>
            <div>
              <TbVaccine style={{fontSize:"40px",marginTop:"16px"}}/>
              <p>Fully vaccinated staff</p>
            </div>
            <div>
              <IoMdFitness style={{fontSize:"40px",marginTop:"16px"}}/>
              <p>Track fitness journey</p>
            </div>
            <div>
              <FaGetPocket style={{fontSize:"40px",marginTop:"16px"}}/>
              <p>Pocket friendly relationship</p>
            </div>
           </div>
           <h3>How it works?</h3>
           <ul>
            <li><FcBusinessman/> Pick membership start date and complete your <br /> subscription process by clicking Buy Now Below</li>
            <li><FcBusinessman/> A dedicated general trainer will be assigned after <br /> you have taken your subscription</li>
            <li><FcBusinessman/> Explore WTF and start your fitness journey</li>
           </ul>
        </div>
        <div className={styles.right}>
          <div className={styles.top1}>
            <div className={styles.top}>
              <div>
                <AiFillStar style={{fontSize:"24px"}}/><AiFillStar style={{fontSize:"24px"}}/><AiFillStar style={{fontSize:"24px"}}/><AiFillStar style={{fontSize:"24px"}}/><AiFillStar style={{fontSize:"24px"}}/>
              </div>
              <p>3 Ratings</p>
            </div>
          </div>
          <div className={styles.bottom}>
            <h1>Choose Membership</h1>
          </div>
        </div>
      </div>
      <div className={styles.buy}>
        <button  className={styles.btn1}>Buy Now</button>
        <button  className={styles.btn2}>Book 1 day free session</button>
      </div>
    </div>
  )
}

export default Membership