import "./style.css";
import transactions from "./../../dataset";
import ProcessPath from "./processPath";
import tripledotIcon from "./../../icons/tripledot.png";

export default function MyTransaction(){
    
    return <>
    <div className="transaction-container center mycol">
        <div className="transaction-detail center myrow">
            <div className="chart"></div>
            <div className="tasker-earning"></div>
            <div className="commission-earned"></div>
        </div>
        <div className="transaction center mycolReverse">
        {transactions.map(({monthYear,totalTaskerEarning,commissionEarned,totalTaskerInvolved,approved,redeem},index)=>{
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

                    <div><ProcessPath approved={approved} redeem={redeem}/></div>
                    <div>
                    <img className="tripleDot" src={tripledotIcon} alt="tripledot icon"/>
                    </div>
                </div>
            </>
        })}
        </div>
    </div>
    </>;
}