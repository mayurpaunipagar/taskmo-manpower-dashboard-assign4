import "./style.css";
//import dataset
import transactions from "./../../dataset";
import ProcessPath from "./processPath";
import tripledotIcon from "./../../icons/tripledot.png";
import DoughnutChart from "./doughnutChart";
import taskerEarningImage from "./../../icons/tasker-earnings.png";
import commisionEarnedImage from "./../../icons/commission-earn.png";
export default function MyTransaction(){
    const taskerEarning=55000;
    const commisionearn=2140;
    return <>
    <div className="transaction-container center">
        <div className="text1Style">Transaction Detail</div>
        <div className="transaction-detail">
                <DoughnutChart/>
            <div className="tasker-earning center mycol">
                <img src={taskerEarningImage} alt="Total Taskers Earning"/>
                <div className="tte">&#8377; {taskerEarning}</div>
                <div className="tText">Total Taskers earning</div>
            </div>
            <div className="commission-earned center mycol">
                <img src={commisionEarnedImage} alt="Total Commission earned"/>
                <div className="tte">&#8377; {commisionearn}</div>
                <div className="tText">Total Commision</div>
            </div>
        </div>
        <div className="transaction center mycolReverse">
        {transactions.map(({monthYear,totalTaskerEarning,commissionEarned,totalTaskerInvolved,approved,reedem},index)=>{
            return <>
                <div className="transaction-card center myrow">
                    <div className="center monthYearStyle">{monthYear}</div>
                    <div className=" center mycol">
                        <div className="totalTaskerEarnStyle">&#8377; {totalTaskerEarning}</div>
                        <div className="grayText">Total Taskers earning</div>
                    </div>
                    <div className=" center mycol">
                        <div className="commissionEarnStyle">&#8377; {commissionEarned}</div>
                        <div className="grayText">Commission earned</div>
                    </div>
                    <div className="center mycol">
                        <div className="totalTasker">{totalTaskerInvolved}</div>
                        <div className="grayText">Total Tasker involved</div>
                    </div>

                    <div><ProcessPath approved={approved} redeem={reedem}/></div>
                    <img className="tripleDot" src={tripledotIcon} alt="tripledot icon"/>
                </div>
            </>
        })}
        </div>
    </div>
    </>;
}