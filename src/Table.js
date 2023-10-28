import React, { useState } from "react";
import { dataJson } from "./data.js";
import "./Table.css";

function Table() {
  const [data, setData] = useState([...dataJson]);
  return (
    <div className="main">
      <table className="table table-bordered mytable">
        <thead>
          <tr>
            <th id="head1" className="headingt">AnalystCode</th>
            <th className="heading">ExpDt</th>
            <th className="heading">LExp</th>
            <th className="heading">SExp</th>
            <th className="heading">NExp</th>

            <th className="heading">CumPL</th>
            <th className="heading">DayPL</th>

            <th className="heading">-0.25%</th>
            <th className="heading">-0.50%</th>
            <th className="heading">-0.75%</th>
            <th className="heading">-1%</th>
            <th className="heading">-2%</th>
            <th className="heading">-5%</th>
            <th className="heading">-10%</th>
            <th className="heading">-20%</th>

            <th className="heading">+0.25%</th>
            <th className="heading">+0.50%</th>
            <th className="heading">+0.75%</th>
            <th className="heading">+1%</th>
            <th className="heading">+2%</th>
            <th className="heading">+5%</th>
            <th className="heading">+10%</th>
            <th className="heading">+20%</th>

            <th className="heading">Delta</th>
            <th className="heading">Vega</th>
            <th className="heading">Theta</th>
            <th className="heading">Gamma</th>
            <th className="heading">Mrgn</th>
          </tr>
        </thead>
        <tbody>
          {data.map((elm) => {
            let className1 = elm["AnalystCode"] > 0 ? "green" : "red";
            let className2 = elm["ExpDt"] > 0 ? "green" : "red";
            let className3 = elm["LExp"] >= 0 ? "green" : "red";
            let className4 = elm["SExp"] >= 0 ? "green" : "red";
            let className5 = elm["NExp"] >= 0 ? "green" : "red";
            let className6 = elm["CumPL"] >= 0 ? "green" : "red";
            let className7 = elm["DayPL"] >= 0 ? "green" : "red";

            let className8 = elm["-0.25%"] >= 0 ? "green" : "red";
            let className9 = elm["-0.50%"] >= 0 ? "green" : "red";
            let className10 = elm["-0.75%"] >= 0 ? "green" : "red";
            let className11 = elm["-1%"] >= 0 ? "green" : "red";
            let className12 = elm["-2%"] >= 0 ? "green" : "red";

            let className13 = elm["-5%"] >= 0 ? "green" : "red";
            let className14 = elm["-10%"] >= 0 ? "green" : "red";
            let className15 = elm["-20%"] >= 0 ? "green" : "red";

            let className16 = elm["+0.25%"] >= 0 ? "green" : "red";
            let className17 = elm["+0.50%"] >= 0 ? "green" : "red";
            let className18 = elm["+0.75%"] >= 0 ? "green" : "red";
            let className19 = elm["+1%"] >= 0 ? "green" : "red";
            let className20 = elm["+2%"] >= 0 ? "green" : "red";
            let className21 = elm["+5%"] >= 0 ? "green" : "red";
            let className22 = elm["+10%"] >= 0 ? "green" : "red";
            let className23 = elm["+20%"] >= 0 ? "green" : "red";

            let className24 = elm["Delta"] >= 0 ? "green" : "red";
            let className25 = elm["Vega"] >= 0 ? "green" : "red";
            let className26 = elm["Theta"] >= 0 ? "green" : "red";
            let className27 = elm["Gamma"] >= 0 ? "green" : "red";
            let className28 = elm["Mrgn"] >= 0 ? "green" : "red";

function convertor(d){
let text = d.toLocaleString();
return text;
}



            return (
              <tr>
                <td className="head">{elm["AnalystCode"]}</td>
                <td>{elm["ExpDt"]}</td>

                <td className={className3}>
                  {elm["LExp"] ? elm["LExp"].toFixed(4).toLocaleString() : elm["LExp"]}
                </td>
                <td className={className4}>
                  {elm["SExp"] ? elm["SExp"].toFixed(4).toLocaleString() : elm["SExp"]}
                </td>
                <td className={className5}>
                  {elm["NExp"] ? elm["NExp"].toFixed(4).toLocaleString() : elm["NExp"]}
                </td>

                <td className={className6}>{elm["CumPL"].toLocaleString() }</td>
                <td className={className7}>{elm["DayPL"].toLocaleString()}</td>

                <td className={className8}>
                  {elm["-025%"] ? elm["-025%"].toFixed(4).toLocaleString() : elm["-025%"]}
                </td>
                <td className={className9}>
                  {elm["-050%"] ? elm["-050%"].toFixed(4).toLocaleString() : elm["-050%"]}
                </td>
                <td className={className10}>
                  {elm["-075%"] ? elm["-075%"].toFixed(4).toLocaleString() : elm["-075%"]}
                </td>
                <td className={className11}>
                  {elm["-1%"] ? elm["-1%"].toFixed(4).toLocaleString() : elm["-1%"]}
                </td>
                <td className={className12}>
                  {elm["-2%"] ? elm["-2%"].toFixed(4).toLocaleString() : elm["-2%"]}
                </td>
                <td className={className13}>
                  {elm["-5%"] ? elm["-5%"].toFixed(4).toLocaleString() : elm["-5%"]}
                </td>
                <td className={className14}>
                  {elm["-10%"] ? elm["-10%"].toFixed(4).toLocaleString() : elm["-10%"]}
                </td>
                <td className={className15}>
                  {elm["-20%"] ? elm["-20%"].toFixed(4).toLocaleString() : elm["-20%"]}
                </td>

                <td className={className16}>
                  {elm["+025%"] ? elm["+025%"].toFixed(4).toLocaleString() : elm["+025%"]}
                </td>
                <td className={className17}>
                  {elm["+050%"] ? elm["+050%"].toFixed(4).toLocaleString() : elm["+050%"]}
                </td>
                <td className={className18}>
                  {elm["+075%"] ? elm["+075%"].toFixed(4).toLocaleString() : elm["+075%"]}
                </td>
                <td className={className19}>
                  {elm["+1%"] ? elm["+1%"].toFixed(4).toLocaleString() : elm["+1%"]}
                </td>
                <td className={className20}>
                  {elm["+2%"] ? elm["+2%"].toFixed(4).toLocaleString() : elm["+2%"]}
                </td>
                <td className={className21}>
                  {elm["+5%"] ? elm["+5%"].toFixed(4).toLocaleString() : elm["+5%"]}
                </td>
                <td className={className22}>
                  {elm["+10%"] ? elm["+10%"].toFixed(4).toLocaleString() : elm["+10%"]}
                </td>
                <td className={className23}>
                  {elm["+20%"] ? elm["+20%"].toFixed(4).toLocaleString() : elm["+20%"]}
                </td>

                <td className={className24}>
                  {elm["Delta"] ? elm["Delta"].toFixed(4).toLocaleString() : elm["Delta"]}
                </td>
                <td className={className25}>
                  {elm["Vega"] ? elm["Vega"].toFixed(4).toLocaleString() : elm["Vega"]}
                </td>
                <td className={className26}>
                  {elm["Theta"] ? elm["Theta"].toFixed(4).toLocaleString() : elm["Theta"]}
                </td>
                <td className={className27}>
                  {elm["Gamma"] ? elm["Gamma"].toFixed(4).toLocaleString() : elm["Gamma"]}
                </td>
                <td className={className28}>
                  {elm["Mrgn"] ? elm["Mrgn"].toFixed(4).toLocaleString() : elm["Mrgn"]}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
