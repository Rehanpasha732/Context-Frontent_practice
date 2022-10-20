import React, { useEffect, useState } from "react";
import Graph from "./graph";
import ProgressBar from "./progressBar";
import ApexChart from "./area.jsx";
import BasicModal from './modal'


const Cards = () => {
    const [inp, setInp] = useState()
    const [inp1, setInp1] = useState()
    let a = document.getElementById("1")
    let b = document.getElementById("2")
    let c = document.getElementById("3")
    let d = document.getElementById("4")
    let e = document.getElementById("5")
    let f = document.getElementById("6")
    let g = document.getElementById("7")
    let h = document.getElementById("8")
    let tr_1 = document.getElementById("tr_1")
    let tr_2 = document.getElementById("tr_2")
    let tr_3 = document.getElementById("tr_3")
    let tr_4 = document.getElementById("tr_4")
    let tr_5 = document.getElementById("tr_5")
    let tr_6 = document.getElementById("tr_6")
    let tr_7 = document.getElementById("tr_7")
    let tr_8 = document.getElementById("tr_8")
    let no_data = document.getElementById("no_data")
    window.onkeyup = function () {
        if (inp === "A" || inp === "Ad" || inp === "Add" || inp === "Addi" || inp === "Addit" || inp === "Additi" || inp === "Additio" || inp === "Addition" || inp === "Additiona" || inp === "Additional") {
            tr_1.style.display = ""
            tr_2.style.display = "none"
            tr_3.style.display = "none"
            tr_4.style.display = "none"
        } else if (inp === "F" || inp === "Fi" || inp === "Fil" || inp === "File" || inp === "File_" || inp === "File_n" || inp === "File_ne" || inp === "File_new") {
            tr_1.style.display = "none"
            tr_2.style.display = ""
            tr_3.style.display = "none"
            tr_4.style.display = "none"
        } else if (inp === "N" || inp === "Ne" || inp === "New" || inp === "NewD" || inp === "NewDa" || inp === "NewDat" || inp === "NewData") {
            tr_1.style.display = "none"
            tr_2.style.display = "none"
            tr_3.style.display = ""
            tr_4.style.display = "none"
        } else if (inp === "0" || inp === "00" || inp === "001" || inp === "001_" || inp === "001_n" || inp === "001_ne" || inp === "001_new") {
            tr_1.style.display = "none"
            tr_2.style.display = "none"
            tr_3.style.display = "none"
            tr_4.style.display = ""
        }
        else if (inp1 === "A" || inp1 === "Ad" || inp1 === "Add" || inp1 === "Addi" || inp1 === "Addit" || inp1 === "Additi" || inp1 === "Additio" || inp1 === "Addition" || inp1 === "Additiona" || inp1 === "Additional") {
            tr_5.style.display = ""
            tr_6.style.display = "none"
            tr_7.style.display = "none"
            tr_8.style.display = "none"
            no_data.innerHTML = ""
        } else if (inp1 === "F" || inp1 === "Fi" || inp1 === "Fil" || inp1 === "File" || inp1 === "File_" || inp1 === "File_n" || inp1 === "File_ne" || inp1 === "File_new") {
            tr_5.style.display = "none"
            tr_6.style.display = ""
            tr_7.style.display = "none"
            tr_8.style.display = "none"
            no_data.innerHTML = ""
        } else if (inp1 === "N" || inp1 === "Ne" || inp1 === "New" || inp1 === "NewD" || inp1 === "NewDa" || inp1 === "NewDat" || inp1 === "NewData") {
            tr_5.style.display = "none"
            tr_6.style.display = "none"
            tr_7.style.display = ""
            tr_8.style.display = "none"
            no_data.innerHTML = ""
        } else if (inp1 === "0" || inp1 === "00" || inp1 === "001" || inp1 === "001_" || inp1 === "001_n" || inp1 === "001_ne" || inp1 === "001_new") {
            tr_5.style.display = "none"
            tr_6.style.display = "none"
            tr_7.style.display = "none"
            tr_8.style.display = ""
            no_data.innerHTML = ""
        }
        // else if (inp1 !== "A" && inp1 !== "F" && inp1 !== "N" && inp1 !== "0" && inp1 !== "A" && inp1 !== "F" && inp1 !== "N" && inp1 !== "0") {
        //     tr_5.style.display = "none"
        //     tr_6.style.display = "none"
        //     tr_7.style.display = "none"
        //     tr_8.style.display = "none"
        //     no_data.innerHTML = "No Data Found"
        // }
        //  else if (inp1 === " ") {
        //     tr_5.style.display = ""
        //     tr_6.style.display = ""
        //     tr_7.style.display = ""
        //     tr_8.style.display = ""
        // }
        else {
            tr_1.style.display = ""
            tr_2.style.display = ""
            tr_3.style.display = ""
            tr_4.style.display = ""
            tr_5.style.display = ""
            tr_6.style.display = ""
            tr_7.style.display = ""
            tr_8.style.display = ""
        }
    }
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
                        <div className="input_div"><input placeholder='Search...' type="text" value={inp} onChange={(e) => { setInp(e.target.value) }} /></div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className="tr">
                                <th className="th">File Name</th>
                                <th className="th">Project</th>
                                <th className="th">Time</th>
                            </tr>
                        </thead>
                        <tbody id="tbody">
                                <p id="no_data"></p>
                            <tr id="tr_1">
                                <td className='row_2' id="1">Additional</td>
                                <td className='row_2' >Access</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_2">
                                <td className='row_2' id="2">File_new</td>
                                <td className='row_2'>new_12213</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_3">
                                <td className='row_2' id="3">NewData</td>
                                <td className='row_2'>Additional</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_4">
                                <td className='row_2' id="4">001_new</td>
                                <td className='row_2'>figa</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                        </tbody>
                        <div className="view_all_btn">
                            <button className="button" ><BasicModal /></button>
                        </div>
                    </table>
                </div>
                <div className="cards">
                    <div className="cards_inner_div">
                        <div><h2 className='recent'>Recent Files</h2></div>
                        <div className="input_div"><input placeholder='Search...' type="text" value={inp1} onChange={(e) => { setInp1(e.target.value) }} /></div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className='tr'>
                                <th>File Name</th>
                                <th>Project</th>
                                <th>Time</th>
                            </tr> 
                            <p></p>
                        </thead>
                       
                        <tbody id="tbody">
                            <p id="no_data"></p>
                            <tr id="tr_5">
                                <td className='row_2' id="5">Additional</td>
                                <td className='row_2' >Access</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_6">
                                <td className='row_2' id="6">File_new</td>
                                <td className='row_2'>new_123</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_7">
                                <td className='row_2' id="7">NewData</td>
                                <td className='row_2'>Additional</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <tr id="tr_8">
                                <td className='row_2' id="8">001_new</td>
                                <td className='row_2'>figa</td>
                                <td className='row_2'>10:45:60 AM</td>
                            </tr>
                            <div className="view_all_btn">
                                <button className="button" ><BasicModal/></button>
                            </div>
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
            {/* <div className="view_all_btn_div">
                <button className="view_all_btn"><BasicModal /></button>
                <button className="view_all_btn"><BasicModal /></button>

            </div> */}
        </div>
    )
}
export default Cards