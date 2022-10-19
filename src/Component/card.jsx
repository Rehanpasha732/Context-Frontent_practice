import React, { useState } from "react";
import Graph from "./graph";
import ProgressBar from "./progressBar";
import ApexChart from "./area.jsx";
import BasicModal from './modal'

const Cards = () => {
    const [inp,setInp] = useState()
    const [inp1,setInp1] = useState()
    let a = document.getElementById("1")
    let b = document.getElementById("2")
    let c = document.getElementById("3")
    let d = document.getElementById("4")
    let tr_1 = document.getElementById("tr_1")
    let tr_2 = document.getElementById("tr_2")
    let tr_3 = document.getElementById("tr_3")
    let tr_4 = document.getElementById("tr_4")
    window.onkeydown = function (event) {
        let z = a.innerHTML
        if(event.keyCode === 13 && z === inp){
            tr_2.style.display = "none"
            tr_3.style.display = "none"
            tr_4.style.display = "none"
        console.log(z)
    }else if (b.innerHTML === inp){
        tr_1.style.display = "none"
        tr_3.style.display = "none"
        tr_4.style.display = "none"
    }else if (c.innerHTML === inp){
        tr_1.style.display = "none"
        tr_2.style.display = "none"
        tr_4.style.display = "none"
    }else if (d.innerHTML === inp){
        tr_1.style.display = "none"
        tr_2.style.display = "none"
        tr_3.style.display = "none"
    }
}
// alert("jabba")
// console.log(inp)
// console.log(a.innerHTML)
// console.log(b.innerHTML)
// console.log(c.innerHTML)
// console.log(d.innerHTML)
    // console.log(a.innerText)
    // const Search = () => {
    //     console.log(getInput.value)
    // }
    return (
        <div className="container">
            <div className="card_container">
                <div className="inner_card1">
                    <div>
                        <h2 className="heading">No of files</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"> <button class="sm_btn"></button> UPLOAD FILES</button>
                                <br />
                                <br />
                                <button className="btn"><button class="sm_btn" style={{ backgroundColor: 'white' }}></button> TOTAL FILES</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_card2">
                    <div>
                        <h2 className="heading">No of Insights</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"><button class="sm_btn"></button> INSIGHTS</button>
                                <br />
                                <br />
                                <button className="btn"><button class="sm_btn" style={{ backgroundColor: 'white' }}></button>ARTIFACTS</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="inner_card3">
                    <div>
                        <h2 className="heading">TIME SAVED</h2>
                        <div className="center_div">
                            <div>
                                <ProgressBar />
                            </div>
                            <div>
                                <button className="btn"><button class="sm_btn"></button> TIME SAVED</button>
                                <br />
                                <br />
                                <button className="btn"><button class="sm_btn_time" style={{ backgroundColor: 'white' }}></button>TIME</button>
                                <div className="percentage_div">
                                    <h4 className="percentage">77.8%</h4>
                                    <span style={{ fontSize: '24px' }} className="fa">&#xf0d8;</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Apex_chart_div">
                    <ApexChart />
                </div>
            </div>
            <div className="graph_cards">
                <div className="cards">
                    <div className="cards_inner_div">
                        <div><h2 className='recent'>Recent Files</h2></div>
                        <div className="input_div"><input placeholder='Search...' type="text" value={inp}  onChange={(e)=>{setInp(e.target.value)}}/></div>
                    </div>

                    <table className="table">
                        <thead>
                            <tr className='tr'>
                                <th>File Name</th>
                                <th>Project</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            <tr id = "tr_1">
                                <td className='row_2' id = "1">Additional</td>
                                <td className='row_2' >Access</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_2">
                                <td className='row_2' id = "2">File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_3">
                                <td className='row_2' id = "3">NewData</td>
                                <td className='row_2'>Additional</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_4">
                                <td className='row_2' id = "4">001_new</td>
                                <td className='row_2'>figa</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cards">
                    <div className="cards_inner_div">
                        <div><h2 className='recent'>Recent Files</h2></div>
                        <div className="input_div"><input placeholder='Search...' type="text" value={inp1}  onChange={(e)=>{setInp1(e.target.value)}}/></div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className='tr'>
                                <th>File Name</th>
                                <th>Project</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                            <tr id = "tr_1">
                                <td className='row_2' id = "1">Additional</td>
                                <td className='row_2' >Access</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_2">
                                <td className='row_2' id = "2">File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_3">
                                <td className='row_2' id = "3">NewData</td>
                                <td className='row_2'>Additional</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id = "tr_4">
                                <td className='row_2' id = "4">001_new</td>
                                <td className='row_2'>figa</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="div">
                    <h2 className="recent">Active Collaborators</h2>
                    <div className="graph_div">
                        <Graph />
                    </div>
                </div>
            </div>
            <div className="view_all_btn_div">
                <button className="view_all_btn"><BasicModal /></button>
                <button className="view_all_btn"><BasicModal /></button>

            </div>
        </div>
    )
}
export default Cards