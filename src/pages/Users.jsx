function Users() {
    return (
        <div className="card">

            <div className="card-header">
                <h3 className="card-title">Users Management</h3>

                <button className="btn btn-primary float-end">
                    <i className="bi bi-plus-circle me-1"></i>
                    Add User
                </button>
            </div>

            <div className="card-body table-responsive">

                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John</td>
                            <td>john@example.com</td>
                            <td>
                                <span className="badge text-bg-success">
                                    Active
                                </span>
                            </td>
                            <td>
                                <button className="btn btn-sm btn-primary">
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    );
}

export default Users;