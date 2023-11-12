import React from 'react'
import { Link } from 'react-router-dom'
import s from './index.module.css'


export default function CategoryCard({ id, title, image }) {
  return (
    <Link to={`/categories/${id}`}>
        <div className={s.categoryCard}>
            <img src={`https://garden-server.onrender.com/${image}`} alt="" />
            <h2>{title}</h2>
        </div>
    </Link>
  )
}
