import React from 'react'
import "./Filter.scss"
import Rating from '@mui/material/Rating';

const SidebarFilter = () => {

    const rating = [4.5, 4, 3, 2, 1]
    const price = [{ start: 100, end: 200 }, { start: 200, end: 500 }, { start: 500, end: 1000 }, { start: 1000, end: 2000 }, { start: 2000, end: 5000 }]
    const discount = [60, 50, 30, 20, 10]
    const brands = ["Jaskire", "Jordan", "Apache", "ManHunter"]
    const department = ["Electronics", "Appliances", "Mens Fashion", "Womens Fashion", "Kids Fashion", "Toys and Games"]

    return (
        <div className='Filter'>
            <div className='std-card std-dimension'>
                <button className='std-btn m-1'>Reset</button>
                <div>
                    <p className='std-boldFont std-font1'>Department</p>
                    <ul className='std-ul'>
                        {
                            department.map((d, index) => {
                                return <li key={index}>
                                    <div className='d-flex'>
                                        <input className='std-checkbox' value={index} type="checkbox"></input>
                                        {d}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <br />
                <div>
                    <p className='std-boldFont std-font1'>Brand</p>
                    <ul className='std-ul'>
                        {
                            brands.map((b, index) => {
                                return <li key={index}>
                                    <div className='d-flex'>
                                        <input className='std-checkbox' value={index} type="checkbox"></input>
                                        {b}
                                    </div>
                                </li>
                            })
                        }
                        <li>
                            <div className='d-flex'>
                                <input className='std-checkbox' value={-1} type="checkbox"></input>
                                Other
                            </div>
                        </li>
                    </ul>
                </div>
                <br />
                <div>
                    <p className='std-boldFont std-font1'>Avg. Customer Rating</p>
                    <ul className='std-ul'>
                        {
                            rating.map((stars, index) => {
                                return <li key={index}>
                                    <div className='d-flex'>
                                        <input className='std-checkbox' value={index} type="checkbox"></input>
                                        <Rating name="read-only" value={stars} precision={0.5} readOnly />
                                        <p>& up</p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <br />
                <div>
                    <p className='std-boldFont std-font1'>Price</p>
                    <ul className='std-ul'>
                        {
                            price.map((price, index) => {
                                return <li key={index}>
                                    <div className='d-flex'>
                                        <input className='std-checkbox' value={index} type="checkbox"></input>
                                        {price.start + " to " + price.end}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <br />
                <div>
                    <p className='std-boldFont std-font1'>Discount</p>
                    <ul className='std-ul'>
                        {
                            discount.map((price, index) => {
                                return <li key={index}>
                                    <div className='d-flex'>
                                        <input className='std-checkbox' value={index} type="checkbox"></input>
                                        {price + "+% off"}
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SidebarFilter