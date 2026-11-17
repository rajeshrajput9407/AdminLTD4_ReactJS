function Dashboard() {
    return (
        <>
            <div className="app-content-header">
                <div className="container-fluid">
                    <h3>Dashboard</h3>
                    <p>Welcome to your Admin Dashboard</p>
                </div>
            </div>

            <div className="row">

                <div className="col-lg-3 col-6">
                    <div className="small-box text-bg-primary">
                        <div className="inner">
                            <h3>150</h3>
                            <p>Total Users</p>
                        </div>
                        <div className="small-box-icon">
                            <i className="bi bi-people"></i>
                        </div>
                        <a href="/users" className="small-box-footer">
                            More info <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="small-box text-bg-success">
                        <div className="inner">
                            <h3>53</h3>
                            <p>Active Projects</p>
                        </div>
                        <div className="small-box-icon">
                            <i className="bi bi-briefcase"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="small-box text-bg-warning">
                        <div className="inner">
                            <h3>44</h3>
                            <p>New Orders</p>
                        </div>
                        <div className="small-box-icon">
                            <i className="bi bi-cart"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

                <div className="col-lg-3 col-6">
                    <div className="small-box text-bg-danger">
                        <div className="inner">
                            <h3>65</h3>
                            <p>Pending Tasks</p>
                        </div>
                        <div className="small-box-icon">
                            <i className="bi bi-list-task"></i>
                        </div>
                        <a href="#" className="small-box-footer">
                            More info <i className="bi bi-arrow-right"></i>
                        </a>
                    </div>
                </div>

            </div>

            <div className="card">

                <div className="card-header">
                    <h3 className="card-title">Welcome</h3>
                </div>

                <div className="card-body">
                    Your React application with AdminLTE 4 is ready.
                </div>

            </div>
        </>
    );
}

export default Dashboard;