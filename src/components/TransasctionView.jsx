import { Table } from "reactstrap";
const RenderTransaction = (transactionInfo) => {
    return (
        <>
        <h2>Transactions</h2>
        <Table
            borderless
            hover
            responsive
            size="sm"
            striped
        >
            <thead>
                <tr>
                    <th>
                        Order Number
                    </th>
                    <th>
                        Service Name
                    </th>
                    <th>
                        Rent From
                    </th>
                    <th>
                        Rent To
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>
                <tbody>
                    {transactionInfo.transactionInfo?.map(transaction => {
                        return (
                            <tr>
                                <th>{transaction.ordernumber}</th>
                                <td>{transaction.servicename}</td>
                                <td>{transaction.rentfrom}</td>
                                <td>{transaction.rentto}</td>
                                <td>{transaction.shipmentstatus}</td>
                            </tr>
                        )
                    }
                    )}
            </tbody>
        </Table>
        </>
    );
}

export default RenderTransaction;
/*

                */