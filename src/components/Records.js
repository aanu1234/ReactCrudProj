const Records = ({records}) => {
    return (
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Date Created</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {records.map((record) => (
                <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                    <td>{record.gender}</td>
                    <td>{record.created_at}</td>
                    <td>
                        <a href="#" className="text-primary">Edit</a> 
                        &nbsp;|&nbsp;
                        <a href="#" className="text-danger">Delete</a>
                    </td>
                </tr>))}
            </tbody>
        </table>
    )
}

export default Records