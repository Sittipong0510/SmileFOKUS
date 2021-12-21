import './Members.css'
import { v4 as uuidv4 } from 'uuid';


function Members(){

    const list=[
        {
            "customername": "Bussaracum ",
            "customertier": "Gold",
            "customerphone": "0824669224",
            "totaltransaction": 1,
            "totalamount": 500008,
            "totalreward": 40000,
            "remainingpoint": 40000
        },
        {
            "customername": "Leelar ",
            "customertier": "Platinum",
            "customerphone": "0874368466",
            "totaltransaction": 1,
            "totalamount": 10000,
            "totalreward": 800,
            "remainingpoint": 800
        },
        {
            "customername": "Papawarin M.",
            "customertier": "Silver",
            "customerphone": "0900843048",
            "totaltransaction": 1,
            "totalamount": 111050,
            "totalreward": 4442,
            "remainingpoint": 4442
        },
        {
            "customername": "VeryCust ",
            "customertier": "White",
            "customerphone": "0199909999",
            "totaltransaction": 1,
            "totalamount": 8600,
            "totalreward": 2064,
            "remainingpoint": 2064
        },
        {
            "customername": "smilecustomer ",
            "customertier": "Black",
            "customerphone": "0187773377",
            "totaltransaction": 1,
            "totalamount": 9840,
            "totalreward": 393,
            "remainingpoint": 393
        }
    ]

    return(
        <>
        <table>
            <thead>
                <th>Name</th>
                <th>ID</th>
                <th>Tier</th>
                <th>LTV</th>
                <th>Total Trans.</th>
                <th>Total Poin</th>
                <th>Remaining Point</th>
            </thead>

            <tbody>
                    {list.map((element)=>{
                        return <tr key={uuidv4()}>
                        <td>{element.customername}</td>
                        <td>{element.customerphone}</td>
                        <td>{element.customertier}</td>
                        <td>{element.totalamount}</td>
                        <td>{element.totaltransaction}</td>
                        <td>{element.totalreward}</td>
                        <td>{element.remainingpoint}</td></tr>
                    })}

            </tbody>
        </table>
        </>
    )
}


export default Members;